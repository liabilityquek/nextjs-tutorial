import Heading from "@/components/Heading"
import Link from 'next/link'
import { getFeaturedReview } from "lib/reviews"

export default async function HomePage() {
  const review = await getFeaturedReview()
    return(
        <>
        <Heading>Indie Gamer</Heading>
        <p className="pb-3">
            Only the best Indie Games reviewed for you!
        </p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full cursor-pointer">
            <Link href={`reviews/${review.slug}`} prefetch={false} className="flex flex-col sm:flex-row" >
            <img
              src={review.image}
              alt={review.title}
              width="640"
              height="360"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">{review.title}</h2>
            </Link>
          </div>
        </>
    )
}