import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <ul>
        <Link href="events">Events</Link>
      </ul>
    </>
  );
}
