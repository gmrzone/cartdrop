import { NextPage } from "next";
import { ProductVariationType, ProductVariationImageType } from "../../../shared/types";
import { useState, useRef } from "react";
import Image from "next/image";

type ProductImageProps = {
    productDetail: ProductVariationType;
};

const ProductImage: NextPage<ProductImageProps> = ({ productDetail }) => {
    const [activeImage, SetActiveImage] = useState<ProductVariationImageType>(productDetail.images.filter((x) => x.primary)[0]);
    const imageItemRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    const slideImageRight = () => {

    }

    const slideImageLeft = () => {

    }

    const renderImages = productDetail.images.map((x) => {
        return (
            <div
                key={x.id}
                className={`w-[75px] h-[75px] relative border-2 border-solid rounded-md border-main cursor-pointer hover:border-opacity-50 transition-opacity delay-150 ${
                    activeImage.id === x.id ? "border-opacity-100 opacity-100" : "border-opacity-20 opacity-70"
                }`}
                onClick={() => SetActiveImage(x)}
                ref={imageItemRef}>
                <Image src={x.image} alt="product-image-small" layout="fill" objectFit="contain" />
            </div>
        );
    });
    return (
        <div className="flex flex-nowrap space-x-8 border border-solid border-main border-opacity-10 p-4 rounded-md">
            <div className="flex flex-nowrap flex-col h-auto max-h-[400px] space-y-2">
                {productDetail.images.length > 4 && (
                    <div className="bg-slate-500 rounded-md text-center cursor-not-allowed shadow-drop-down" onClick={slideImageLeft}>
                        <i className="fas fa-sort-up text-white text-xl" />
                    </div>
                )}
                <div className="h-full overflow-hidden">
                    <div
                        className={`space-y-2 h-[${
                            (imageItemRef.current?.clientHeight as number) * productDetail.images.length +
                            (productDetail.images.length - 1) * 10
                        }px] self-center ${productDetail.images.length <= 4 && "mt-4"}`} ref={imageContainerRef}>
                        {renderImages}
                    </div>
                </div>
                {productDetail.images.length > 4 && (
                    <div className="bg-secondary rounded-md text-center cursor-pointer hover:bg-main shadow-drop-down" onClick={slideImageRight}>
                        <i className="fas fa-sort-down text-white text-xl" />
                    </div>
                )}
            </div>
            <div className="relative w-[450px] h-[470px]">
                <Image src={activeImage.image} alt="main-product-image" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default ProductImage;
