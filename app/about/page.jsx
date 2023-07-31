import Heading from "@/components/Heading";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Heading>About</Heading>
      <p>
        Welcome to{" "}
        <Link
          href="/"
          className="font-bold font-orbitron text-black-800 hover:pointer"
        >
          Indie Gamer
        </Link>
        , your number one source for comprehensive and unbiased video game
        reviews. We are dedicated to giving you the very best of our insights,
        with a focus on accuracy, objectivity, and in-depth analysis.
      </p>
    </>
  );
}
