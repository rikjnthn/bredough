import Image from "next/image";
import Link from "next/link";

import HeroImg from "public/home-hero.jpg";

import style from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <section className={style.hero}>
      <Image priority role="presentation" src={HeroImg} alt="" />
      <div>
        <h1>Freshly Baked Daily</h1>
        <Link href="/bread">See Bread</Link>
      </div>
    </section>
  );
};

export default HomeHero;
