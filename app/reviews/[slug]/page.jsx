import Heading from "@/components/Heading"
import { getReview, getSlugs } from "lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
import Image from "next/image";
import myImageLoader from "my/image/loader";

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
        <div className="flex-gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
        </div>
        <Image
        quality={1}
        loader={myImageLoader}
        src={review.image}
        alt={review.title}
        width={640}
        // width="640"
        height="360"
        className="mb-2 rounded"
      />
        <article dangerouslySetInnerHTML={{__html: review.body}}
        className='max-w-screen-sm prose prose-slate'/>
        </>
    )
}