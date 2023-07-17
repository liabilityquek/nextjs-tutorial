// 'use client' //to indicate this server as a client component
import Heading from "@/components/Heading";
export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt="hollow-knight"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Hollow Knight.</p>
    </>
  );
}
