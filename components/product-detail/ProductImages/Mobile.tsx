import { NextPage } from "next";
import { ProductVariationImageType } from "../../../shared/types";
import { useRef, Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ProductImageProps = {
    images: ProductVariationImageType[];
    activeImage: ProductVariationImageType;
    SetActiveImage: Dispatch<SetStateAction<ProductVariationImageType>>;
};

const ProductImage: NextPage<ProductImageProps> = ({ images, activeImage, SetActiveImage }) => {
    const imageItemRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const imageSliderCurrentPosition = useRef<number>(0);
    const leftSlideHandler = useRef<HTMLDivElement | null>(null);
    const rightSlideHandler = useRef<HTMLDivElement | null>(null);

    // TODO : Make image slider work properly
    const imageRightClick = () => {
        if (imageContainerRef.current && imageItemRef.current) {
            const stopPosition =
                imageContainerRef.current.scrollWidth - (imageContainerRef.current.parentNode as HTMLDivElement).clientWidth - 9;
            if (imageSliderCurrentPosition.current <= stopPosition) {
                const slideAmount = imageItemRef.current.clientWidth + 9;
                const nextPos = imageSliderCurrentPosition.current + slideAmount;
                // imageContainerRef.current.classList.remove("translate-x-0");
                // imageContainerRef.current.classList.add("-translate-x-[80px]");
                imageContainerRef.current.style.transform = `translate3d(-${nextPos}px, 0px, 0px)`;
                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate leftSlideHandler color
                if (leftSlideHandler.current) {
                    leftSlideHandler.current.classList.remove("bg-slate-500");
                    leftSlideHandler.current.classList.remove("cursor-not-allowed");
                    leftSlideHandler.current.classList.add("bg-secondary");
                    leftSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate rightSlideHandler once slider not slideable
                if (nextPos > stopPosition && rightSlideHandler.current) {
                    rightSlideHandler.current.classList.remove("bg-secondary");
                    rightSlideHandler.current.classList.remove("cursor-pointer");
                    rightSlideHandler.current.classList.add("bg-slate-500");
                    rightSlideHandler.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    const imageLeftCLick = () => {
        if (imageContainerRef.current && imageItemRef.current) {
            if (imageSliderCurrentPosition.current > 0) {
                const slideAmount = imageItemRef.current.clientHeight + 9;
                const nextPos = imageSliderCurrentPosition.current - slideAmount;
                imageContainerRef.current.style.transform = `translate3d(-${nextPos}px, 0px, 0px)`;
                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate rightSlideHandler color
                if (rightSlideHandler.current) {
                    rightSlideHandler.current.classList.remove("bg-slate-500");
                    rightSlideHandler.current.classList.remove("cursor-not-allowed");
                    rightSlideHandler.current.classList.add("bg-secondary");
                    rightSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate leftSlideHandler once slider not slideable
                if (nextPos <= 0 && leftSlideHandler.current) {
                    leftSlideHandler.current.classList.remove("bg-secondary");
                    leftSlideHandler.current.classList.remove("cursor-pointer");
                    leftSlideHandler.current.classList.add("bg-slate-500");
                    leftSlideHandler.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    const renderImages = images.map((x) => {
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
        <div className="flex flex-nowrap flex-row h-auto w-full mobile-lg:w-[400px] space-y-0 space-x-2">
            {images.length > 4 && (
                <div
                    className="bg-slate-500 rounded-md flex-grow-0 flex-shrink-0 flex flex-b justify-center items-center cursor-not-allowed shadow-drop-down w-[28px] h-auto"
                    onClick={imageLeftCLick}
                    ref={leftSlideHandler}>
                    <i className={`fas fa-sort-up text-white text-xl -rotate-90 ipad:rotate-0`} />
                </div>
            )}
            <div className="h-full w-full overflow-hidden">
                <div
                    className={`transform-gpu duration-[0.25s] grid grid-flow-col space-x-2 h-auto w-[${
                        75 * images.length + (images.length - 1) * 10
                    }px] self-center ${images.length <= 4 && "mt-4"}`}
                    ref={imageContainerRef}>
                    {renderImages}
                </div>
            </div>
            {images.length > 4 && (
                <div
                    className="bg-secondary rounded-md flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer hover:bg-main shadow-drop-down w-[28px] h-auto"
                    onClick={imageRightClick}
                    ref={rightSlideHandler}>
                    <i className="fas fa-sort-down text-white text-xl -rotate-90" />
                </div>
            )}
        </div>
    );
};

export default ProductImage;
