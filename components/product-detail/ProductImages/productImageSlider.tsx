import { NextPage } from "next";
import { ProductVariationImageType } from "../../../shared/types";
import { useRef, Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";

type ProductImageProps = {
    images: ProductVariationImageType[];
    activeImage: ProductVariationImageType;
    SetActiveImage: Dispatch<SetStateAction<ProductVariationImageType>>;
};

const ProductImageSlider: NextPage<ProductImageProps> = ({ images, activeImage, SetActiveImage }) => {
    const imageItemRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const imageSliderCurrentPosition = useRef<number>(0);
    const leftorTopSlideHandler = useRef<HTMLDivElement | null>(null);
    const rightOrBottomSlideHandler = useRef<HTMLDivElement | null>(null);
    const isMobile = useIsMobile();
    // Using useEffect to reset the slider when orientation is changed from mobile to desktop or vice versa
    useEffect(() => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.remove("transform-gpu");
            imageContainerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
            imageContainerRef.current.classList.add("transform-gpu");
            imageSliderCurrentPosition.current = 0;
        }
        // Reset Style for left or top slider controller
        if (leftorTopSlideHandler.current) {
            leftorTopSlideHandler.current.classList.remove("bg-secondary");
            leftorTopSlideHandler.current.classList.remove("cursor-pointer");
            leftorTopSlideHandler.current.classList.add("bg-slate-500");
            leftorTopSlideHandler.current.classList.add("cursor-not-allowed");
        }

        if (rightOrBottomSlideHandler.current) {
            rightOrBottomSlideHandler.current.classList.remove("bg-slate-500");
            rightOrBottomSlideHandler.current.classList.remove("cursor-not-allowed");
            rightOrBottomSlideHandler.current.classList.add("bg-secondary");
            rightOrBottomSlideHandler.current.classList.add("cursor-pointer");
        }
    }, [isMobile]);
    // TODO : Make image slider work properly
    const imageRightOrBottomClick = () => {
        const windowWidth = window.innerWidth;
        if (imageContainerRef.current && imageItemRef.current) {
            const stopPosition =
                windowWidth <= 992
                    ? imageContainerRef.current.scrollWidth - (imageContainerRef.current.parentNode as HTMLDivElement).clientWidth - 9
                    : imageContainerRef.current.scrollHeight - (imageContainerRef.current.parentNode as HTMLDivElement).clientHeight - 9;
            if (imageSliderCurrentPosition.current <= stopPosition) {
                const slideAmount = windowWidth <= 992 ? imageItemRef.current.clientWidth + 9 : imageItemRef.current.clientHeight + 9;
                const nextPos = imageSliderCurrentPosition.current + slideAmount;
                // imageContainerRef.current.classList.remove("translate-x-0");
                // imageContainerRef.current.classList.add("-translate-x-[80px]");
                if (windowWidth <= 992) {
                    imageContainerRef.current.style.transform = `translate3d(-${nextPos}px, 0px, 0px)`;
                } else {
                    imageContainerRef.current.style.transform = `translate3d(0px, -${nextPos}px, 0px)`;
                }

                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate leftSlideHandler color
                if (leftorTopSlideHandler.current) {
                    leftorTopSlideHandler.current.classList.remove("bg-slate-500");
                    leftorTopSlideHandler.current.classList.remove("cursor-not-allowed");
                    leftorTopSlideHandler.current.classList.add("bg-secondary");
                    leftorTopSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate rightSlideHandler once slider not slideable
                if (nextPos > stopPosition && rightOrBottomSlideHandler.current) {
                    rightOrBottomSlideHandler.current.classList.remove("bg-secondary");
                    rightOrBottomSlideHandler.current.classList.remove("cursor-pointer");
                    rightOrBottomSlideHandler.current.classList.add("bg-slate-500");
                    rightOrBottomSlideHandler.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    const imageLeftOrTopCLick = () => {
        const windowWidth = window.innerWidth;
        if (imageContainerRef.current && imageItemRef.current) {
            if (imageSliderCurrentPosition.current > 0) {
                const slideAmount = windowWidth <= 992 ? imageItemRef.current.clientWidth + 9 : imageItemRef.current.clientHeight + 9;
                const nextPos = imageSliderCurrentPosition.current - slideAmount;
                if (windowWidth <= 992) {
                    imageContainerRef.current.style.transform = `translate3d(-${nextPos}px, 0px, 0px)`;
                } else {
                    imageContainerRef.current.style.transform = `translate3d(0px, -${nextPos}px, 0px)`;
                }

                imageSliderCurrentPosition.current = nextPos;

                // Change/Activate rightSlideHandler color
                if (rightOrBottomSlideHandler.current) {
                    rightOrBottomSlideHandler.current.classList.remove("bg-slate-500");
                    rightOrBottomSlideHandler.current.classList.remove("cursor-not-allowed");
                    rightOrBottomSlideHandler.current.classList.add("bg-secondary");
                    rightOrBottomSlideHandler.current.classList.add("cursor-pointer");
                }

                // Change/Deactivate leftSlideHandler once slider not slideable
                if (nextPos <= 0 && leftorTopSlideHandler.current) {
                    leftorTopSlideHandler.current.classList.remove("bg-secondary");
                    leftorTopSlideHandler.current.classList.remove("cursor-pointer");
                    leftorTopSlideHandler.current.classList.add("bg-slate-500");
                    leftorTopSlideHandler.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    const renderImages = images.map((x) => {
        return (
            <div
                key={x.id}
                className={`image-slider-item w-[75px] h-[75px] relative border-solid rounded-md cursor-pointer ${
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
        <div className="flex flex-nowrap flex-row ipad:flex-col h-auto ipad:h-[400px] w-full ipad:w-auto mobile-lg:w-[400px] space-y-0 ipad:space-y-2 space-x-2 ipad:space-x-0">
            {images.length > 4 && (
                <div
                    className="bg-slate-500 rounded-md flex-grow-0 flex-shrink-0 flex flex-b justify-center items-center cursor-not-allowed shadow-drop-down w-[28px] ipad:w-auto h-auto ipad:h-[28px]"
                    onClick={imageLeftOrTopCLick}
                    ref={leftorTopSlideHandler}>
                    <i className={`fas fa-sort-up text-white text-xl -rotate-90 ipad:rotate-0`} />
                </div>
            )}
            <div className="h-full w-full overflow-hidden">
                <div
                    className={`transform-gpu duration-[0.25s] grid grid-flow-col ipad:grid-flow-row space-x-2 ipad:space-x-0 space-y-0 ipad:space-y-2 h-auto ipad:h-[${
                        75 * images.length + (images.length - 1) * 10
                    }px] w-[${75 * images.length + (images.length - 1) * 10}px] ipad:w-auto self-center ${images.length <= 4 && "mt-4"}`}
                    ref={imageContainerRef}>
                    {renderImages}
                </div>
            </div>
            {images.length > 4 && (
                <div
                    className="bg-secondary rounded-md flex-grow-0 flex-shrink-0 flex justify-center items-center cursor-pointer hover:bg-main shadow-drop-down w-[28px] ipad:w-auto h-auto ipad:h-[28px]"
                    onClick={imageRightOrBottomClick}
                    ref={rightOrBottomSlideHandler}>
                    <i className="fas fa-sort-down text-white text-xl -rotate-90 ipad:rotate-0" />
                </div>
            )}
        </div>
    );
};

export default ProductImageSlider;
