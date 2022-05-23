import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/api-util";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <>
      <Head>
        <title>NextJS Events</title>
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { featuredEvents: await getFeaturedEvents() } };
}
