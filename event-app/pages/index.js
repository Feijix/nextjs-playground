import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/api-util";

export default function Home(props) {
  const { featuredEvents } = props;

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { featuredEvents: await getFeaturedEvents() } };
}
