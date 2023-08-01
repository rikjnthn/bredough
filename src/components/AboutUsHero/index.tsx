import Image from "next/image";

import style from "./AboutUsHero.module.scss";

const AboutUsHero = () => {
  return (
    <section className={style.hero}>
      <h1>About Us</h1>
      <div>
        <div>
          <p>
            We are a company running a food business. We sell various types of
            bread, from simple wheat bread to baguettes and others.
          </p>
          <Image
            className="slide-in-right"
            priority
            role="presentation"
            src="/about-us-hero.jpg"
            alt=""
            width={320}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
