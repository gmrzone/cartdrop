import { NextPage } from "next";
import { MutableRefObject } from "react";
import { useRef, useEffect } from "react";

interface SliderControlProps {
    slideableContainerRef: MutableRefObject<HTMLDivElement | null>;
    sliderItemRef: MutableRefObject<HTMLDivElement | null>;
    currentSliderPosition: number;
    setCurrentSliderPositionTo: (n: number) => void;
    productsLength: number;
    alignmentPattern: [number, number, number, number];
}
const SliderControl: NextPage<SliderControlProps> = ({
    slideableContainerRef,
    sliderItemRef,
    currentSliderPosition,
    setCurrentSliderPositionTo,
    productsLength,
    alignmentPattern,
}) => {
    const rightControlRef = useRef<HTMLDivElement | null>(null);
    const leftControlRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const resetControls = () => {
            if (rightControlRef.current && leftControlRef.current) {
                rightControlRef.current.classList.remove("bg-gray-400");
                rightControlRef.current.classList.remove("text-gray-200");
                rightControlRef.current.classList.remove("cursor-not-allowed");
                rightControlRef.current.classList.add("bg-secondary");
                rightControlRef.current.classList.add("hover:bg-main");
                rightControlRef.current.classList.add("text-white");
                rightControlRef.current.classList.add("cursor-pointer");

                leftControlRef.current.classList.remove("bg-secondary");
                leftControlRef.current.classList.remove("hover:bg-main");
                leftControlRef.current.classList.remove("text-white");
                leftControlRef.current.classList.remove("cursor-pointer");
                leftControlRef.current.classList.add("bg-gray-400");
                leftControlRef.current.classList.add("text-gray-200");
                leftControlRef.current.classList.add("cursor-not-allowed");
            }
        };

        if (currentSliderPosition === 0) {
            resetControls();
        }
    }, [currentSliderPosition]);
    const goLeft = () => {
        if (slideableContainerRef.current && sliderItemRef.current && rightControlRef.current && leftControlRef.current) {
            let stopPosition;
            if (window.innerWidth >= 992) {
                if (window.innerWidth <= 1199) {
                    stopPosition = -(sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[0]) + 15);
                } else if (window.innerWidth <= 1399) {
                    stopPosition = -(sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[1]) + 15);
                } else if (window.innerWidth <= 1599) {
                    stopPosition = -(sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[2]) + 15);
                } else {
                    stopPosition = -(sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[3]) + 15);
                }
                // if (window.innerWidth <= 1600) {
                //     stopPosition = -(currentSliderPosition.current, sliderItemRef.current?.clientWidth * (productsLength - 3) + 15);
                // } else {
                //     stopPosition = -(currentSliderPosition.current, sliderItemRef.current?.clientWidth * (productsLength - 4) + 15);
                // }
                if (currentSliderPosition > stopPosition) {
                    console.log(currentSliderPosition, stopPosition + (sliderItemRef.current.clientWidth - 30));
                    leftControlRef.current.classList.remove("bg-gray-400");
                    leftControlRef.current.classList.remove("text-gray-200");
                    leftControlRef.current.classList.remove("cursor-not-allowed");
                    leftControlRef.current.classList.add("bg-secondary");
                    leftControlRef.current.classList.add("hover:bg-main");
                    leftControlRef.current.classList.add("text-white");
                    leftControlRef.current.classList.add("cursor-pointer");

                    const temp_pos = currentSliderPosition - sliderItemRef.current.clientWidth - 15;
                    slideableContainerRef.current.style.transform = `translate3d(${temp_pos}px, 0px, 0px)`;
                    setCurrentSliderPositionTo(temp_pos);
                }

                if (currentSliderPosition <= stopPosition) {
                    rightControlRef.current.classList.remove("bg-secondary");
                    rightControlRef.current.classList.remove("hover:bg-main");
                    rightControlRef.current.classList.remove("text-white");
                    rightControlRef.current.classList.remove("cursor-pointer");
                    rightControlRef.current.classList.add("bg-gray-400");
                    rightControlRef.current.classList.add("text-gray-200");
                    rightControlRef.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };
    const goRight = () => {
        if (slideableContainerRef.current && sliderItemRef.current && rightControlRef.current && leftControlRef.current) {
            if (window.innerWidth >= 992) {
                if (currentSliderPosition < 0) {
                    rightControlRef.current.classList.remove("bg-gray-400");
                    rightControlRef.current.classList.remove("text-gray-200");
                    rightControlRef.current.classList.remove("cursor-not-allowed");
                    rightControlRef.current.classList.add("bg-secondary");
                    rightControlRef.current.classList.add("hover:bg-main");
                    rightControlRef.current.classList.add("text-white");
                    rightControlRef.current.classList.add("cursor-pointer");

                    const temp_pos = currentSliderPosition + sliderItemRef.current.clientWidth + 15;
                    slideableContainerRef.current.style.transform = `translate3d(${temp_pos}px, 0px, 0px)`;
                    setCurrentSliderPositionTo(temp_pos);
                }

                if (currentSliderPosition >= 0 - sliderItemRef.current.clientWidth + 15) {
                    leftControlRef.current.classList.remove("bg-secondary");
                    leftControlRef.current.classList.remove("hover:bg-main");
                    leftControlRef.current.classList.remove("text-white");
                    leftControlRef.current.classList.remove("cursor-pointer");
                    leftControlRef.current.classList.add("bg-gray-400");
                    leftControlRef.current.classList.add("text-gray-200");
                    leftControlRef.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };
    return (
        <div className="flex space-x-2">
            <div
                className="bg-gray-400 px-3 py-1 text-gray-200 rounded-md text-lg cursor-not-allowed transition-colors duration-100"
                onClick={goRight}
                ref={leftControlRef}>
                <i className="fas fa-chevron-left" />
            </div>
            <div
                className="bg-secondary px-3 py-1 text-white rounded-md text-lg cursor-pointer hover:bg-main transition-colors duration-100"
                onClick={goLeft}
                ref={rightControlRef}>
                <i className="fas fa-chevron-right" />
            </div>
        </div>
    );
};

export default SliderControl;
