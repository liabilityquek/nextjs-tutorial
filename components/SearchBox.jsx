'use client'

import { Combobox } from "@headlessui/react"
import { useIsClient } from "../lib/hooks"
import { useState, useEffect } from "react"
import { getAllReviews } from "lib/reviews";
import { useRouter } from 'next/navigation';
// const reviews = [
//     { slug: 'hades-2018', title: 'Hades' },
//     { slug: 'fall-guys', title: 'Fall Guys: Ultimate Knockout' },
//     { slug: 'black-mesa', title: 'Black Mesa' },
//     { slug: 'disco-elysium', title: 'Disco Elysium' },
//     { slug: 'dead-cells', title: 'Dead Cells' },
// ]

export default function SearchBox() {
    const router = useRouter();
    const isClient = useIsClient();
    const [query, setQuery] = useState('')
    const [reviews, setReviews] = useState([])
    const [selectedReview, setSelectedReview] = useState('')
    console.log(`query: ${query}`)
    console.log(`selected: ${JSON.stringify(selectedReview, null, 2)}`)

    useEffect(() => {
        getAllReviews().then(({ reviews }) => 
        setReviews(reviews))
    }, [])

    if (!isClient) {
        return null;
    }
    
    const filteredReviews = reviews.filter((review) => review.title.toLowerCase().includes(query))

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
                    {filteredReviews.map((review) => (
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