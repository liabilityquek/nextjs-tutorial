import Link from "next/link";
import Heading from "@/components/Heading";
export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      
        <nav>
          <ul>
            <li>
              <Link href="/reviews/hollow-knight" prefetch={false}>Hollow Knight</Link>
            </li>
            <li>
              <Link href="/reviews/stardew-valley" prefetch={false}>Stardev Valley</Link>
            </li>
          </ul>
        </nav>
      
    </>
  );
}
