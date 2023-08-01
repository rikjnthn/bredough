import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import style from "./ProductSnippet.module.scss";
import ProductCard from "../ProductCard";

interface ProductDataType {
  productImg: string;
  breadName: string;
}

const productData: ProductDataType[] = [
  {
    productImg: "/croissant.jpg",
    breadName: "Croissant",
  },
  {
    productImg: "/bagel.jpg",
    breadName: "Bagel",
  },
  {
    productImg: "/wheat-bread.jpg",
    breadName: "Wheat Bread",
  },
  {
    productImg: "/cinnamon-rolls.jpg",
    breadName: "Cinnamon Rolls",
  },
  {
    productImg: "/garlic-bread.jpg",
    breadName: "Garlic Bread",
  },
  {
    productImg: "/ciabatta.jpg",
    breadName: "Ciabatta",
  },
];

const ProductSnippet = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const productSnippetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setIsIntersecting(() => true);
      });
    }, {
      rootMargin: "-100px"
    });

    if (productSnippetRef.current) {
      observer.observe(productSnippetRef.current);
    }
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <section className={style.product_snippet}>
      <h1>What We Sell</h1>
      <div className={style.product_container}>
        <div ref={productSnippetRef}>
          {productData.map((val) => (
            <ProductCard
              key={val.breadName}
              classname={isIntersecting ? style.slide_in_up : ''}
              width={150}
              height={160}
              {...val}
            />
          ))}
        </div>
      </div>

      <Link href="/bread">See Bread</Link>
    </section>
  );
};

export default ProductSnippet;
