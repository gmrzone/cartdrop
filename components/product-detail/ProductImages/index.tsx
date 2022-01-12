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

    // TODO : Make image slider work properly
    const imageRightClick = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.remove("translate-y-0");
            imageContainerRef.current.classList.add("-translate-y-[80px]");
        }
    };

    const imageLeftCLick = () => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.remove("-translate-y-[80px]");
            imageContainerRef.current.classList.add("translate-y-0");
        }
    };

    const renderImages = productDetail.images.map((x) => {
        return (
            <div
                key={x.id}
                className={`image-slider-item w-[75px] h-[75px] relative border-solid rounded-md  cursor-pointer ${
                    activeImage.id === x.id
                        ? "border-opacity-100 opacity-100 border-[3px] border-secondary"
                        : "border-main border-2 border-opacity-20 opacity-70 hover:border-opacity-50"
                }`}
                onClick={() => SetActiveImage(x)}
                ref={imageItemRef}>
                <Image src={x.image} alt="product-image-small" layout="fill" objectFit="contain" />
            </div>
        );
    });
    return (
        <div className="flex flex-nowrap ipad:flex-row flex-col-reverse justify-center items-center space-x-8 border border-solid border-main border-opacity-10 mobile-lg:p-4 rounded-md">
            <div
                className={`flex flex-nowrap flex-row ipad:flex-col h-auto ipad:h-[400px] ipad:w-auto w-[${
                    productDetail.images.length > 4 ? 314 : 324
                }px] mobile-lg:w-[400px] space-y-0 space-x-2 ipad:space-y-2 ipad:space-x-0`}>
                {productDetail.images.length > 4 && (
                    <div
                        className="bg-slate-500 rounded-md flex-grow-0 flex-shrink-0 flex flex-b justify-center items-center cursor-not-allowed shadow-drop-down w-[28px] h-auto ipad:h-[28px] ipad:w-auto"
                        onClick={imageLeftCLick}>
                        <i className={`fas fa-sort-up text-white text-xl -rotate-90 ipad:rotate-0`} />
                    </div>
                )}
                <div className="h-full w-full overflow-hidden">
                    <div
                        className={`transform-gpu duration-200 translate-x-0 translate-y-0 grid grid-flow-col ipad:grid-flow-row space-y-0 space-x-2 ipad:space-x-0 ipad:flex-col ipad:space-y-2 h-auto w-[${
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
                        onClick={imageRightClick}>
                        <i className="fas fa-sort-down text-white text-xl -rotate-90 ipad:rotate-0" />
                    </div>
                )}
            </div>
            <div className="relative w-[300px] h-[320px] mobile-lg:w-[360px] mobile-lg:h-[380px] ipad:w-[380px] ipad:h-[400px] desktop:w-[400px] desktop:h-[420px] desktop-big:w-[450px] desktop-big:h-[470px] mb-6 ipad:mb-0">
                <Image src={activeImage.image} alt="main-product-image" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default ProductImage;
