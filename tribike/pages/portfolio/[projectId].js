import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  return (
    <>
      <h1>{`Project ${router.query.projectId}`}</h1>
    </>
  );
}
