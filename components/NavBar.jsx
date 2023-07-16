import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800 hover:underline">Reviews</Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-800 hover:underline" prefetch={false}>
            About
          </Link>
          {/* //prefetch to indicate whether to fetch the data when the page
            renders */}
        </li>
      </ul>
    </nav>
  );
}
