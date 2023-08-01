import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./ProductAdvantages.module.scss";

const ProductAdvantages = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setIsIntersecting(() => true);
        });
      },
      {
        rootMargin: "-300px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <section ref={sectionRef} className={style.product_advantages_wrapper}>
      <article>
        <div>
          <h1>Delicious and Rich Flavour</h1>
          <p>
            Baked by professional bakers, resulting in delicious and rich bread
          </p>
        </div>
        <Image
          className={isIntersecting ? "slide-in-right" : style.opacity_0}
          role="presentation"
          src="/bread-catalog-2.jpg"
          alt=""
          width={450}
          height={350}
        />
      </article>
      <article>
        <div>
          <h1>Having Over 5 Types of Bread</h1>
          <p>We have croissants, wheat bread, garlic bread, bagel, and more.</p>
        </div>
        <Image
          className={isIntersecting ? "slide-in-left" : style.opacity_0}
          role="presentation"
          src="/bread-catalog-3.jpg"
          alt=""
          width={450}
          height={350}
        />
      </article>
      <article>
        <div>
          <h1>Freshly Baked</h1>
          <p>To serve the best bread to you</p>
        </div>
        <Image
          className={isIntersecting ? "slide-in-right" : style.opacity_0}
          role="presentation"
          src="/baker.jpg"
          alt=""
          width={450}
          height={350}
        />
      </article>
    </section>
  );
};

export default ProductAdvantages;
