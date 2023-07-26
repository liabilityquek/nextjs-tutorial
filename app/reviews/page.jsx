import Link from "next/link";
import Heading from "@/components/Heading";
import { getAllReviews } from "lib/reviews";
import Image from "next/image";

export const metadata = {
  title: 'Reviews',  
}

export default async function ReviewsPage() {

  const reviews = await getAllReviews();
  // console.log(`ReviewsPage: ${JSON.stringify(reviews, null, 2)}`)
  return (
    <>
      <Heading>Reviews</Heading>

      <nav>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl cursor-pointer">
              <Link href={`/reviews/${review.slug}`} prefetch={false}>
                
                  <Image
                    src={review.image}
                    alt={review.title}
                    width="640"
                    height="360"
                    className="rounded-t"
                  />
                  <h2 className="font-semibold font-orbitron py-1 text-center">{review.title}</h2>
                
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
