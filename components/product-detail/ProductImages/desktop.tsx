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
    const topSlideHandler = useRef<HTMLDivElement | null>(null);
    const bottomSlideHandler = useRef<HTMLDivElement | null>(null);

    // TODO : Make image slider work properly
    const imageBottomClick = () => {
        if (imageContainerRef.current && imageItemRef.current) {
            const stopPosition =
                imageContainerRef.current.scrollHeight - (imageContainerRef.current.parentNode as HTMLDivElement).clientHeight - 9;
            if (imageSliderCurrentPosition.current <= stopPosition) {
                const slideAmount = imageItemRef.current.clientHeight + 9;
                const nextPos = imageSliderCurrentPosition.current + slideAmount;
                console.log(imageSliderCurrentPosition.current);
                imageContainerRef.current.style.transform = `translate3d(0px, -${nextPos}px, 0px)`;
                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate topSLiderHandler color
                if (topSlideHandler.current) {
                    topSlideHandler.current.classList.remove("bg-slate-500");
                    topSlideHandler.current.classList.remove("cursor-not-allowed");
                    topSlideHandler.current.classList.add("bg-secondary");
                    topSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate bottomSlideHandler once slider not slideable
                if (nextPos > stopPosition && bottomSlideHandler.current) {
                    bottomSlideHandler.current.classList.remove("bg-secondary");
                    bottomSlideHandler.current.classList.remove("cursor-pointer");
                    bottomSlideHandler.current.classList.add("bg-slate-500");
                    bottomSlideHandler.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    const imageTopCLick = () => {
        if (imageContainerRef.current && imageItemRef.current) {
            if (imageSliderCurrentPosition.current > 0) {
                const slideAmount = imageItemRef.current.clientHeight + 9;
                const nextPos = imageSliderCurrentPosition.current - slideAmount;
                imageContainerRef.current.style.transform = `translate3d(0px, -${nextPos}px, 0px)`;
                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate bottomSlideHandler color
                if (bottomSlideHandler.current) {
                    bottomSlideHandler.current.classList.remove("bg-slate-500");
                    bottomSlideHandler.current.classList.remove("cursor-not-allowed");
                    bottomSlideHandler.current.classList.add("bg-secondary");
                    bottomSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate topSlideHandler once slider not slideable
                if (nextPos <= 0 && topSlideHandler.current) {
                    topSlideHandler.current.classList.remove("bg-secondary");
                    topSlideHandler.current.classList.remove("cursor-pointer");
                    topSlideHandler.current.classList.add("bg-slate-500");
                    topSlideHandler.current.classList.add("cursor-not-allowed");
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
        <div className="flex flex-nowrap flex-col h-[400px] w-auto space-y-2 space-x-0">
            {images.length > 4 && (
                <div
                    className="bg-slate-500 rounded-md flex-grow-0 flex-shrink-0 flex flex-b justify-center items-center cursor-not-allowed shadow-drop-down h-[28px] w-auto"
                    onClick={imageTopCLick}
                    ref={topSlideHandler}>
                    <i className={`fas fa-sort-up text-white text-xl -rotate-90 ipad:rotate-0`} />
                </div>
            )}
            <div className="h-full w-full overflow-hidden">
                <div
                    className={`transform-gpu duration-[0.25s] grid grid-flow-row flex-col space-y-2 h-auto w-auto h-[${
                        75 * images.length + (images.length - 1) * 10
                    }px] self-center ${images.length <= 4 && "mt-4"}`}
                    ref={imageContainerRef}>
                    {renderImages}
                </div>
            </div>
            {images.length > 4 && (
                <div
                    className="bg-secondary rounded-md flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer hover:bg-main shadow-drop-down h-[28px] w-auto"
                    onClick={imageBottomClick}
                    ref={bottomSlideHandler}>
                    <i className="fas fa-sort-down text-white text-xl rotate-0" />
                </div>
            )}
        </div>
    );
};

export default ProductImage;
