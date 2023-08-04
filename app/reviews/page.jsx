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
      <div className="flex justify-center items-center my-2">
        <ul className="list-style-none flex">
          <li>
            <Link href={`/reviews?page=${page - 1}`} className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Previous</Link>
          </li>
          <span>Page {page} </span>
          <Link href={`/reviews?page=${page + 1}`} className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Next</Link>
        </ul>
      </div>
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