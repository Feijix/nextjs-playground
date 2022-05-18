import Link from "next/link";
import EventList from "../components/events/event-list";

import { getFeaturedEvents } from "../data/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}
