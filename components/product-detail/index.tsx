import { NextPage } from "next";
import { ProductVariationType } from "../../shared/types";
import ProductImageDesktop from "./ProductImages/desktop";
import ProductImageMobile from "./ProductImages/Mobile";
import Detail from "./Detail";
import useMobile from "../hooks/useIsMobile";
import ActiveImage from "./ProductImages/ActiveImage";
import { ProductVariationImageType } from "../../shared/types";
import { useState } from "react";
type ProductDetailProps = {
    productDetail: ProductVariationType;
};
const ProductDetail: NextPage<ProductDetailProps> = ({ productDetail }) => {
    const isMobile = useMobile();
    const [activeImage, SetActiveImage] = useState<ProductVariationImageType>(productDetail.images.filter((x) => x.primary)[0]);
    return (
        <div className="flex flex-nowrap flex-col-reverse ipad:flex-row ipad:space-x-10 ipad:space-y-0">
            <div className="flex flex-nowrap flex-col-reverse ipad:flex-row justify-center items-center space-x-8 border border-solid border-main border-opacity-10 mobile-lg:p-4 rounded-md">
                {isMobile ? (
                    <ProductImageMobile images={productDetail.images} activeImage={activeImage} SetActiveImage={SetActiveImage} />
                ) : (
                    <ProductImageDesktop images={productDetail.images} activeImage={activeImage} SetActiveImage={SetActiveImage} />
                )}
                <ActiveImage image={activeImage.image} />
            </div>
            <Detail productDetail={productDetail} />
        </div>
    );
};

export default ProductDetail;
