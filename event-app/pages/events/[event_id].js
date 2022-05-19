import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";

export default function Event() {
  const router = useRouter();
  const event = getEventById(router.query.event_id);

  if (!event) return <p>No event found!</p>;

  return (
    <>
      <h1>{`Event ${event.title}`}</h1>
    </>
  );
}
