import { useRouter } from "next/router";

export default function ClientPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push("");
  }

  return (
    <>
      <h1>{`Client ${router.query.id}`}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
}
