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
    const currentSliderPosition = useRef<number>(0)
    const goLeft = () => {
        if (slideableContainerRef.current && sliderItemRef.current) {
            let stopPosition;
            if (window.innerWidth > 992){
                if (window.innerWidth <= 1600){
                    stopPosition = -(currentSliderPosition.current, (sliderItemRef.current?.clientWidth * (featuredProducts.length - 3)) + 15)
                }
                else{
                    stopPosition = -(currentSliderPosition.current, (sliderItemRef.current?.clientWidth * (featuredProducts.length - 4)) + 15)
                }
                if (currentSliderPosition.current > stopPosition){
                    currentSliderPosition.current = currentSliderPosition.current - sliderItemRef.current.clientWidth - 15
                    slideableContainerRef.current.style.transform = `translate3d(${currentSliderPosition.current}px, 0px, 0px)` 
                }
            }
        }
    };
    const goRight = () => {
        if (slideableContainerRef.current && sliderItemRef.current) {
            if (window.innerWidth > 992){
                if (currentSliderPosition.current < 0){
                    currentSliderPosition.current = currentSliderPosition.current + sliderItemRef.current.clientWidth + 15
                    slideableContainerRef.current.style.transform = `translate3d(${currentSliderPosition.current}px, 0px, 0px)`
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
                <SliderControl goLeft={goLeft} goRight={goRight} />
            </div>
            <ProductList featuredProducts={featuredProducts} slideableContainerRef={slideableContainerRef} sliderItemRef={sliderItemRef} />
        </Section>
    );
};

export default FeaturedProducts;
