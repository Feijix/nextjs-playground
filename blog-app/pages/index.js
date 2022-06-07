import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a React framework for production",
    date: "2022-02-10",
  },
];

export default function Homepage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
