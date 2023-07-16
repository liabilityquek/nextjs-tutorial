import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <h1>Reviews</h1>
      
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
