import { ProductVariationType } from "../../../../shared/types";
import { NextPage } from "next";

type ProductItemProps = {
    productDetail: ProductVariationType;
};
const ProductItem: NextPage<ProductItemProps> = ({ productDetail }) => {
    return <div>{productDetail.product.name}</div>;
};

export default ProductItem;
