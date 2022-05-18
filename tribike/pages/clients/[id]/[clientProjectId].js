import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h1>The projects of a given client</h1>
    </>
  );
}
