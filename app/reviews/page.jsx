import Link from "next/link";
import Heading from "@/components/Heading";
import { getAllReviews } from "lib/reviews";
import Image from "next/image";

export const metadata = {
  title: 'Reviews',
}

const PAGE_SIZE = 6;

export default async function ReviewsPage({ searchParams }) {
  console.log(`ReviewsPage page no: ${searchParams}`)
  const page = parsePageParam(searchParams.page);
  const reviews = await getAllReviews(PAGE_SIZE, page);
  console.log(`ReviewsPage: ${reviews.map((review) => review.slug).join(', ')}`)
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex gap-2 pb-3">
        <Link href={`/reviews?page={page - 1}`}>&lt;</Link>
        <span>Page {page} </span>
        <Link href={`/reviews?page={page + 1}`}>&lt;</Link>
      </div>


      <nav>
        <ul className="flex flex-row flex-wrap gap-3">
          {reviews.map((review, index) => (
            <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl cursor-pointer">
              <Link href={`/reviews/${review.slug}`} prefetch={false}>

                <Image
                  src={review.image}
                  alt={review.title}
                  priority={index === 0} //load the image asap
                  width={640}
                  height={360}
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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1
}