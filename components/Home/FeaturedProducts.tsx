import { NextPage } from "next";
import Section from "../common/Section";
import ProductList from "../common/ProductSlider";
import { FeaturedProductType } from "../../shared/types";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import SliderControl from "../common/SliderControl";
import { useRef } from "react";

interface IProps {
    featuredProducts: FeaturedProductType[];
}

const FeaturedProducts: NextPage<IProps> = ({ featuredProducts }) => {
    const slideableContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderItemRef = useRef<HTMLDivElement | null>(null);
    const currentSliderPosition = useRef<number>(0);
    const sliderLeftControlRef = useRef<HTMLDivElement | null>(null);
    const sliderRightControlRef = useRef<HTMLDivElement | null>(null);

    const goLeft = () => {
        if (slideableContainerRef.current && sliderItemRef.current && sliderLeftControlRef.current && sliderRightControlRef.current) {
            let stopPosition;
            if (window.innerWidth > 992) {
                if (window.innerWidth <= 1600) {
                    stopPosition = -(currentSliderPosition.current,
                    sliderItemRef.current?.clientWidth * (featuredProducts.length - 3) + 15);
                } else {
                    stopPosition = -(currentSliderPosition.current,
                    sliderItemRef.current?.clientWidth * (featuredProducts.length - 4) + 15);
                }
                if (currentSliderPosition.current > stopPosition) {
                    console.log(currentSliderPosition.current, stopPosition + (sliderItemRef.current.clientWidth - 30))
                    sliderLeftControlRef.current.classList.remove("bg-gray-400");
                    sliderLeftControlRef.current.classList.remove("text-gray-200");
                    sliderLeftControlRef.current.classList.remove("cursor-not-allowed");
                    sliderLeftControlRef.current.classList.add("bg-secondary");
                    sliderLeftControlRef.current.classList.add("hover:bg-main");
                    sliderLeftControlRef.current.classList.add("text-white");
                    sliderLeftControlRef.current.classList.add("cursor-pointer");

                    currentSliderPosition.current = currentSliderPosition.current - sliderItemRef.current.clientWidth - 15;
                    slideableContainerRef.current.style.transform = `translate3d(${currentSliderPosition.current}px, 0px, 0px)`;
                } 
                
                if(currentSliderPosition.current <= stopPosition) {
                    sliderRightControlRef.current.classList.remove("bg-secondary");
                    sliderRightControlRef.current.classList.remove("hover:bg-main");
                    sliderRightControlRef.current.classList.remove("text-white");
                    sliderRightControlRef.current.classList.remove("cursor-pointer");
                    sliderRightControlRef.current.classList.add("bg-gray-400");
                    sliderRightControlRef.current.classList.add("text-gray-200");
                    sliderRightControlRef.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };
    const goRight = () => {
        if (slideableContainerRef.current && sliderItemRef.current && sliderRightControlRef.current && sliderLeftControlRef.current) {
            if (window.innerWidth > 992) {
                if (currentSliderPosition.current < 0) {
                    sliderRightControlRef.current.classList.remove("bg-gray-400");
                    sliderRightControlRef.current.classList.remove("text-gray-200");
                    sliderRightControlRef.current.classList.remove("cursor-not-allowed");
                    sliderRightControlRef.current.classList.add("bg-secondary");
                    sliderRightControlRef.current.classList.add("hover:bg-main");
                    sliderRightControlRef.current.classList.add("text-white");
                    sliderRightControlRef.current.classList.add("cursor-pointer");

                    currentSliderPosition.current = currentSliderPosition.current + sliderItemRef.current.clientWidth + 15;
                    slideableContainerRef.current.style.transform = `translate3d(${currentSliderPosition.current}px, 0px, 0px)`;
                } 
                
                if (currentSliderPosition.current >= (0 - sliderItemRef.current.clientWidth + 15)) {
                    sliderLeftControlRef.current.classList.remove("bg-secondary");
                    sliderLeftControlRef.current.classList.remove("hover:bg-main");
                    sliderLeftControlRef.current.classList.remove("text-white");
                    sliderLeftControlRef.current.classList.remove("cursor-pointer");
                    sliderLeftControlRef.current.classList.add("bg-gray-400");
                    sliderLeftControlRef.current.classList.add("text-gray-200");
                    sliderLeftControlRef.current.classList.add("cursor-not-allowed");
                }
            }
        }
    };

    return (
        <Section title="FEATURED">
            <div className="absolute z-10 right-0 top-2 block ipad:hidden">
                <SmallButtonLink to="/products/featured" text="View All" />
            </div>
            <div className="absolute z-10 right-0 top-2 hidden ipad:block">
                <SliderControl
                    goLeft={goLeft}
                    goRight={goRight}
                    rightControlRef={sliderRightControlRef}
                    leftControlRef={sliderLeftControlRef}
                />
            </div>
            <ProductList featuredProducts={featuredProducts} slideableContainerRef={slideableContainerRef} sliderItemRef={sliderItemRef} />
        </Section>
    );
};

export default FeaturedProducts;
