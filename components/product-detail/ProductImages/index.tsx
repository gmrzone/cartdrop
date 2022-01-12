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

    const slideImageRight = () => {};

    const slideImageLeft = () => {};

    const renderImages = productDetail.images.map((x) => {
        return (
            <div
                key={x.id}
                className={`image-slider-item w-[75px] h-[75px] relative border-2 border-solid rounded-md border-main cursor-pointer ${
                    activeImage.id === x.id ? "border-opacity-100 opacity-100" : "border-opacity-20 opacity-70 hover:border-opacity-50"
                }`}
                onClick={() => SetActiveImage(x)}
                ref={imageItemRef}>
                <Image src={x.image} alt="product-image-small" layout="fill" objectFit="contain" />
            </div>
        );
    });
    return (
        <div className="flex flex-nowrap ipad:flex-row flex-col-reverse space-x-8 border border-solid border-main border-opacity-10 p-4 rounded-md">
            <div className="flex flex-nowrap flex-row ipad:flex-col h-auto ipad:h-[400px] ipad:w-auto w-[400px] space-y-0 space-x-2 ipad:space-y-2 ipad:space-x-0">
                {productDetail.images.length > 4 && (
                    <div
                        className="bg-slate-500 rounded-md flex-grow-0 flex-shrink-0 flex flex-b justify-center items-center cursor-not-allowed shadow-drop-down w-[28px] h-auto ipad:h-[28px] ipad:w-auto"
                        onClick={slideImageLeft}>
                        <i className={`fas fa-sort-up text-white text-xl -rotate-90 ipad:rotate-0`} />
                    </div>
                )}
                <div className="h-full w-full overflow-hidden">
                    <div
                        className={`grid grid-flow-col ipad:grid-flow-row space-y-0 space-x-2 ipad:space-x-0 ipad:flex-col ipad:space-y-2 h-auto w-[${
                            75 * productDetail.images.length + (productDetail.images.length - 1) * 10
                        }px] ipad:w-auto ipad:h-[${
                            75 * productDetail.images.length + (productDetail.images.length - 1) * 10
                        }px] self-center ${productDetail.images.length <= 4 && "mt-4"}`}
                        ref={imageContainerRef}>
                        {renderImages}
                    </div>
                </div>
                {productDetail.images.length > 4 && (
                    <div
                        className="bg-secondary rounded-md flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer hover:bg-main shadow-drop-down w-[28px] h-auto ipad:h-[28px] ipad:w-auto"
                        onClick={slideImageRight}>
                        <i className="fas fa-sort-down text-white text-xl -rotate-90 ipad:rotate-0" />
                    </div>
                )}
            </div>
            <div className="relative w-[360px] h-[380px] ipad:w-[380px] ipad:h-[400px] desktop:w-[400px] desktop:h-[420px] desktop-big:w-[450px] desktop-big:h-[470px]">
                <Image src={activeImage.image} alt="main-product-image" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default ProductImage;
