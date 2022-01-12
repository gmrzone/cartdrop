import { NextPage } from "next";
import { ProductVariationType, ProductVariationImageType } from "../../../shared/types";
import { useState } from "react";
import Image from "next/image";

type ProductImageProps = {
    productDetail: ProductVariationType;
};

const ProductImage: NextPage<ProductImageProps> = ({ productDetail }) => {
    const [activeImage, SetActiveImage] = useState<ProductVariationImageType>(productDetail.images.filter((x) => x.primary)[0]);

    const renderImages = productDetail.images.map((x) => {
        return (
            <div
                key={x.id}
                className={`w-[75px] h-[75px] relative border-2 border-solid rounded-md border-main cursor-pointer hover:border-opacity-50 transition-opacity delay-150 ${
                    activeImage.id === x.id ? "border-opacity-100" : "border-opacity-20"
                }`}
                onClick={() => SetActiveImage(x)}>
                <Image src={x.image} alt="product-image-small" layout="fill" objectFit="contain" />
            </div>
        );
    });
    return (
        <div className="flex flex-nowrap space-x-8">
            <div className="space-y-2 h-[380px] overflow-auto">{renderImages}</div>
            <div className="relative w-[350px] h-[380px] border border-solid rounded-md">
                <Image src={activeImage.image} alt="main-product-image" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default ProductImage;
