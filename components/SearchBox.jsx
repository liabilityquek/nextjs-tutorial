'use client'

import { Combobox } from "@headlessui/react"
import { useIsClient } from "../lib/hooks"
import { useState, useEffect } from "react"
import { getAllReviews } from "lib/reviews";
import { useRouter } from 'next/navigation';
import NotFoundPage from "@/app/not-found";
// import { searchReview } from 'lib/reviews';

export default function SearchBox() {
    const router = useRouter();
    const isClient = useIsClient();
    const [query, setQuery] = useState('')
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null)
    const [selectedReview, setSelectedReview] = useState('')
    console.log(`query: ${query}`)
    console.log(`selected: ${JSON.stringify(selectedReview, null, 2)}`)

    useEffect(() => {
        (async () => {
            try{
                const response = await fetch('/api/search?query='
                    + encodeURIComponent(query));
                const reviews = await response.json();
                // console.log(`SearchBox: ${JSON.stringify(reviews, null, 2)}`)
                setReviews(reviews);
            }catch(err){
                console.err(`Error loading this page: ${err}`)
                setError(err);
            }
        })();
    }, [query])

    if(error){
        return <NotFoundPage/>

    }

    if (!isClient) {
        return null;
    }

    // const filteredReviews = reviews.filter((review) => review.title.toLowerCase().includes(query.toLowerCase()))
    // .sort((a, b) => a.title.localeCompare(b.title))
    // .slice(0, 5)

    const handleChange = (selectedReview) => {
        setSelectedReview(selectedReview)
        router.push(`/reviews/${selectedReview.slug}`)
    }


    return (
        <div className="relative w-48">
            <Combobox onChange={handleChange}>
                <Combobox.Input
                    className="border px-2 py-1 rounded w-full font-orbitron"
                    placeholder='Search...'
                    onChange={(event) => setQuery(event.target.value)} />

                <Combobox.Options className="absolute bg-white py-1 w-full font-orbitron">
                    {reviews.map((review) => (
                        <Combobox.Option key={review.slug} value={review}>
                            {({ active }) => {
                                console.log('Is active:', active);
                                return (
                                    <div className={`block px-2 truncate w-full ${active ? 'bg-orange-100' : ''}`}>
                                        {review.title}
                                    </div>
                                );
                            }}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    )
}