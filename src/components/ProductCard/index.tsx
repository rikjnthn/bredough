import Image from "next/image";

import { isUndefined } from "@/utils/isUndefined";

const ProductCard = ({
  productImg,
  width,
  height,
  breadName,
  desc,
  classname
}: {
  productImg: string;
  width: number;
  height: number;
  breadName: string;
  desc?: string;
  classname?: string
}) => {
  return (
    <div className={classname}>
      <Image src={productImg} alt={breadName} width={width} height={height} />
      <div>
        {!isUndefined(desc) ? <h2>{breadName}</h2> : <span>{breadName}</span>}
        {!isUndefined(desc) && <p>{desc}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
