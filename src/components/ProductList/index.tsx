import style from "./ProductList.module.scss";

import ProductCard from "../ProductCard";

interface ProductDataType {
  productImg: string;
  breadName: string;
  desc: string;
}

const productData: ProductDataType[] = [
  {
    productImg: "/croissant.jpg",
    breadName: "Croissant",
    desc: "A crescent shaped roll with flaky outer layer and a soft, buttery interior.",
  },
  {
    productImg: "/cinnamon-rolls.jpg",
    breadName: "Cinnamon Rolls",
    desc: "A sweet baked dough filled with a cinnamon-sugar filling and topped with a delectable cream cheese glaze.",
  },
  {
    productImg: "/garlic-bread.jpg",
    breadName: "Garlic Bread",
    desc: "A crispy outer crust and a soft, buttery center infused with the rich and aromatic taste of garlic.",
  },
  {
    productImg: "/ciabatta.jpg",
    breadName: "Ciabatta",
    desc: "An Italian classic with delightful bread known for its rustic appearance, crisp crust, and soft, airy interior.",
  },
  {
    productImg: "/bagel.jpg",
    breadName: "Bagel",
    desc: "A circular bread with a chewy texture and a slightly crusty exterior.",
  },
  {
    productImg: "/wheat-bread.jpg",
    breadName: "Wheat Bread",
    desc: "Made with high-quality whole wheat flour, our wheat bread is packed with nutrients, and fiber.",
  },
  {
    productImg: "/baguette.jpg",
    breadName: "Baguette",
    desc: "A bread with crisp and golden on the outside, soft and chewy on the inside",
  },
  {
    productImg: "/rye-bread.jpg",
    breadName: "Rye Bread",
    desc: "Made with a combination of rye flour and wheat flour, our rye breads boast a distinctive flavor, and denser texture.",
  },
  {
    productImg: "/sourdough.jpg",
    breadName: "Sourdough",
    desc: "A tangy flavor and a chewy crust that pairs beautifully with various spreads.",
  },
];

const ProductList = () => {
  return (
    <section>
      <section className={style.product_list}>
        {productData.map((val) => (
          <ProductCard key={val.breadName} {...val} width={100} height={110} />
        ))}
      </section>
    </section>
  );
};

export default ProductList;
