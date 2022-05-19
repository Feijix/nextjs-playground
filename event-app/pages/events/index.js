import { useRouter } from "next/router";

import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

export default function Events() {
  const router = useRouter();
  const events = getAllEvents();

  function searchEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList items={events} />
    </>
  );
}
