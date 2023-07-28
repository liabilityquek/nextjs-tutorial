import Heading from "@/components/Heading"
import { getReview, getSlugs } from "lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
import Image from "next/image";

export async function generateMetadata({ params: { slug } }){
  const review = await getReview(slug)
  return {
    title: review.title,
  }
}

//generate dynamic static page to speed up for server side rendering
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }))
}

export default async function ReviewPage({ params: { slug } }) {
  // console.log(`Reviews Page: ${slug}`)
    const review = await getReview(slug);
    console.log(`review: ${JSON.stringify(review, null, 2)}`)
    return(
        <>
        <Heading>{review.title}</Heading>
        <p className="font-semibold pb-3">
          {review.subtitle}
        </p>
        <div className="flex-gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
        </div>
        <Image
        src={review.image}
        alt={review.title}
        // priority //load the image asap
        width={640}
        height={360}
        className="mb-2 rounded"
      />
        <article dangerouslySetInnerHTML={{__html: review.body}}
        className='max-w-screen-sm prose prose-slate'/>
        </>
    )
}