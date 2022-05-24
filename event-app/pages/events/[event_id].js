import Head from "next/head";

import { getFeaturedEvents, getEventById } from "../../data/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import Comments from "../../components/input/comments";

export default function EventPage(props) {
  const { event } = props;

  if (!event)
    return (
      <>
        <Head>
          <title>Event not found</title>
        </Head>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </>
    );

  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments event_id={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const event_id = context.params.event_id;
  return { props: { event: await getEventById(event_id) } };
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents();
  const paths = featuredEvents.map((event) => ({
    params: { event_id: event.id },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
