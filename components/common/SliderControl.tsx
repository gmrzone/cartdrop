import { NextPage } from 'next';
import { MutableRefObject } from 'react';
import { useRef, useEffect } from 'react';

interface SliderControlProps {
    slideableContainerRef: MutableRefObject<HTMLDivElement | null>;
    sliderItemRef: MutableRefObject<HTMLAnchorElement | null>;
    currentSliderPosition: number;
    setCurrentSliderPositionTo: (n: number) => void;
    productsLength: number;
    alignmentPattern: [number, number, number, number];
    extraSpace: number;
}
const SliderControl: NextPage<SliderControlProps> = ({
    slideableContainerRef,
    sliderItemRef,
    currentSliderPosition,
    setCurrentSliderPositionTo,
    productsLength,
    alignmentPattern,
    extraSpace,
}) => {
    const rightControlRef = useRef<HTMLDivElement | null>(null);
    const leftControlRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const resetControls = () => {
            if (rightControlRef.current && leftControlRef.current) {
                rightControlRef.current.classList.remove('bg-gray-400');
                rightControlRef.current.classList.remove('text-gray-200');
                rightControlRef.current.classList.remove('cursor-not-allowed');
                rightControlRef.current.classList.add('bg-secondary');
                rightControlRef.current.classList.add('hover:bg-main');
                rightControlRef.current.classList.add('text-white');
                rightControlRef.current.classList.add('cursor-pointer');

                leftControlRef.current.classList.remove('bg-secondary');
                leftControlRef.current.classList.remove('hover:bg-main');
                leftControlRef.current.classList.remove('text-white');
                leftControlRef.current.classList.remove('cursor-pointer');
                leftControlRef.current.classList.add('bg-gray-400');
                leftControlRef.current.classList.add('text-gray-200');
                leftControlRef.current.classList.add('cursor-not-allowed');
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
                    stopPosition = -(
                        sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[0]) +
                        (productsLength - alignmentPattern[0 + 1]) * extraSpace
                    );
                } else if (window.innerWidth <= 1399) {
                    stopPosition = -(
                        sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[1]) +
                        (productsLength - (alignmentPattern[1] + 1)) * extraSpace
                    );
                } else if (window.innerWidth <= 1599) {
                    stopPosition = -(
                        sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[2]) +
                        (productsLength - (alignmentPattern[2] + 1)) * extraSpace
                    );
                } else {
                    stopPosition = -(
                        sliderItemRef.current?.clientWidth * (productsLength - alignmentPattern[3]) +
                        (productsLength - (alignmentPattern[3] + 1)) * extraSpace
                    );
                }

                if (currentSliderPosition > stopPosition) {
                    leftControlRef.current.classList.remove('bg-gray-400');
                    leftControlRef.current.classList.remove('text-gray-200');
                    leftControlRef.current.classList.remove('cursor-not-allowed');
                    leftControlRef.current.classList.add('bg-secondary');
                    leftControlRef.current.classList.add('hover:bg-main');
                    leftControlRef.current.classList.add('text-white');
                    leftControlRef.current.classList.add('cursor-pointer');
                    const nextPos = currentSliderPosition - (sliderItemRef.current.clientWidth + extraSpace);
                    slideableContainerRef.current.style.transform = `translate3d(${nextPos}px, 0px, 0px)`;
                    setCurrentSliderPositionTo(nextPos);

                    if (nextPos <= stopPosition) {
                        rightControlRef.current.classList.remove('bg-secondary');
                        rightControlRef.current.classList.remove('hover:bg-main');
                        rightControlRef.current.classList.remove('text-white');
                        rightControlRef.current.classList.remove('cursor-pointer');
                        rightControlRef.current.classList.add('bg-gray-400');
                        rightControlRef.current.classList.add('text-gray-200');
                        rightControlRef.current.classList.add('cursor-not-allowed');
                    }
                }
            }
        }
    };
    const goRight = () => {
        if (slideableContainerRef.current && sliderItemRef.current && rightControlRef.current && leftControlRef.current) {
            if (window.innerWidth >= 992) {
                if (currentSliderPosition < -sliderItemRef.current.clientWidth) {
                    rightControlRef.current.classList.remove('bg-gray-400');
                    rightControlRef.current.classList.remove('text-gray-200');
                    rightControlRef.current.classList.remove('cursor-not-allowed');
                    rightControlRef.current.classList.add('bg-secondary');
                    rightControlRef.current.classList.add('hover:bg-main');
                    rightControlRef.current.classList.add('text-white');
                    rightControlRef.current.classList.add('cursor-pointer');
                    // TODO : Somehow remove the extraSpace When the slider in at the stop position (Improvement)
                    const nextPos = currentSliderPosition + sliderItemRef.current.clientWidth + extraSpace;
                    slideableContainerRef.current.style.transform = `translate3d(${nextPos}px, 0px, 0px)`;
                    setCurrentSliderPositionTo(nextPos);

                    if (nextPos >= -(sliderItemRef.current.clientWidth + extraSpace)) {
                        leftControlRef.current.classList.remove('bg-secondary');
                        leftControlRef.current.classList.remove('hover:bg-main');
                        leftControlRef.current.classList.remove('text-white');
                        leftControlRef.current.classList.remove('cursor-pointer');
                        leftControlRef.current.classList.add('bg-gray-400');
                        leftControlRef.current.classList.add('text-gray-200');
                        leftControlRef.current.classList.add('cursor-not-allowed');
                    }
                }
            }
        }
    };
    return (
        <div className="flex space-x-2">
            <div
                className="bg-gray-400 px-3 py-1 text-gray-200 rounded-md text-lg cursor-not-allowed transition-colors duration-100"
                onClick={goRight}
                ref={leftControlRef}
            >
                <i className="fas fa-chevron-left" />
            </div>
            <div
                className="bg-secondary px-3 py-1 text-white rounded-md text-lg cursor-pointer hover:bg-main transition-colors duration-100"
                onClick={goLeft}
                ref={rightControlRef}
            >
                <i className="fas fa-chevron-right" />
            </div>
        </div>
    );
};

export default SliderControl;
