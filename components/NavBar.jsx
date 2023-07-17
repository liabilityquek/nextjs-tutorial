import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="font-bold font-orbitron text-orange-800 hover:underline">
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="font-bold font-orbitron text-orange-800 hover:underline">Reviews</Link>
        </li>
        <li className="ml-auto">
          <Link href="/about" className="font-bold font-orbitron text-orange-800 hover:underline" prefetch={false}>
            About
          </Link>
          {/* //prefetch to indicate whether to fetch the data when the page
            renders */}
        </li>
      </ul>
    </nav>
  );
}
