import {useEffect, useState, useRef} from 'react'
import Image from "next/image";

import style from "./CompanyExplanation.module.scss";

const CompanyExplanation = () => {
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
    console.log(isIntersecting);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <section ref={sectionRef} className={style.company_explanation}>
      <article>
        <h1>More Than 1000 Stores Worldwide</h1>
        <div>
          <p>
            We have built our stores strategically, so you can easily buy your
            favourite bread.
          </p>
          <Image
            className={isIntersecting ? "slide-in-right" : style.opacity_0}
            role="presentation"
            src="/bread-catalog.jpg"
            alt=""
            width={280}
            height={200}
          />
        </div>
      </article>
      <article>
        <h1>Having More Than 5000 employees</h1>
        <p>Our employee comes from local workers where our shop stands</p>
      </article>
      <article>
        <h1>Have Been Operating For 10 Years</h1>
        <p>
          We stand as a successful ten-year corporation thus we are experienced
          in making bread.
        </p>
      </article>
    </section>
  );
};

export default CompanyExplanation;
