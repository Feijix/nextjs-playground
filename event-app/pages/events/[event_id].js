import { useRouter } from "next/router";

export default function Event() {
  const router = useRouter();

  return (
    <>
      <h1>{`Event ${router.query.event_id}`}</h1>
    </>
  );
}
