import Heading from "@/components/Heading"
import Link from 'next/link'

export default function HomePage() {
    return(
        <>
        <Heading>Indie Gamer</Heading>
        <p className="pb-3">
            Only the best Indie Games reviewed for you!
        </p>
        <div className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full cursor-pointer">
            <Link href="/reviews/stardew-valley" prefetch={false} className="flex flex-col sm:flex-row">
            <img
              src="/images/stardew-valley.jpg"
              alt="stardew-valley"
              width="640"
              height="360"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">Stardev Valley</h2>
            </Link>
          </div>
        </>
    )
}