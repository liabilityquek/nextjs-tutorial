import { NextResponse } from "next/server";
import { searchReview } from '@/lib/reviews'

export async function GET(request){
    const query = request.nextUrl.searchParams.get('query');
    const reviews = await searchReview(query);
    return NextResponse.json(reviews)
}