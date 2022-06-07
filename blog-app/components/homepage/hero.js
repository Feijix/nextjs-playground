import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/neo.jpg"
          alt="An image showing Neo"
          width={600}
          height={600}
        />
      </div>
      <h1>{"Hi, I'm Neo"}</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
