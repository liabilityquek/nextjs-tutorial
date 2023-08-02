import { NextResponse } from "next/server";
import { revalidateTag } from 'next/cache'
import { CACHE_TAG_REVIEWS } from "lib/reviews";
import { sendEmail } from "../../../nodemailer/index.js";


export async function POST(request) {
  try {

    const payload = await request.json();
    // console.log(`payload: ${JSON.stringify(payload, null, 2)}`)
    if (payload.model === 'review') {
      revalidateTag(CACHE_TAG_REVIEWS)
      await sendEmail({
        email: process.env.EMAIL_FROM,
        subject: `Game reviews - ${payload.event} for title: ${payload.entry.title}`,
        // templateVariables: {
        //   html: payload.html
        // }
      }, payload)

    }
    // console.log('revalidated:', CACHE_TAG_REVIEWS);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Error processing request', { status: 500 });
  }
}