import { NextPage } from "next";
import { ProductVariationType } from "../../shared/types";
import ProductImage from "./ProductImages";
import Detail from "./Detail";
import Section from "../../components/common/Section";

type ProductDetailProps = {
    productDetail: ProductVariationType;
};
const ProductDetail: NextPage<ProductDetailProps> = ({ productDetail }) => {
    return (
        <div className="flex space-x-4 ipad:space-x-10">
            <ProductImage productDetail={productDetail} />
            <Detail productDetail={productDetail} />
        </div>
    );
};

export default ProductDetail;
