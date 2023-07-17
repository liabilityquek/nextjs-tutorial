import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>

      <nav>
        <ul className="flex flex-col gap-3">
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl cursor-pointer">
            <Link href="/reviews/hollow-knight" prefetch={false}>
            <img
              src="/images/hollow-knight.jpg"
              alt="hollow-knight"
              width="640"
              height="360"
              className="rounded-t"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center">Hollow Knight</h2>
            </Link>
          </li>
          <li className="bg-white border rounded shadow w-80 hover:shadow-xl cursor-pointer">
            <Link href="/reviews/stardew-valley" prefetch={false}>
            <img
              src="/images/stardew-valley.jpg"
              alt="stardew-valley"
              width="640"
              height="360"
              className="rounded-t"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center">Stardev Valley</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
