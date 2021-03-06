import { useRouter } from "next/router";
import Head from "next/head";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../data/api-util";

export default function Events(props) {
  const router = useRouter();
  const { allEvents } = props;

  function searchEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
      </Head>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { allEvents: await getAllEvents() } };
}
