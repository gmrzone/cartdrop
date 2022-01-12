import { NextPage } from "next";
import { ProductVariationType } from "../../shared/types";
import ProductImage from "./ProductImages";
import Detail from "./Detail";

type ProductDetailProps = {
    productDetail: ProductVariationType;
};
const ProductDetail: NextPage<ProductDetailProps> = ({ productDetail }) => {
    return (
        <div className="flex flex-nowrap flex-col-reverse ipad:flex-row ipad:space-x-10 ipad:space-y-0">
            <ProductImage productDetail={productDetail} />
            <Detail productDetail={productDetail} />
        </div>
    );
};

export default ProductDetail;
