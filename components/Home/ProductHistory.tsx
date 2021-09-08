import { NextPage } from "next";
import Section from "../common/Section";
import ProductList from "../common/ProductSlider";
import { FeaturedProductType } from "../../shared/types";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import SliderControl from "../common/SliderControl";
import { useRef, useEffect } from "react";

interface IProps {
    historyProducts: FeaturedProductType[];
}

const ProductHistory: NextPage<IProps> = ({ historyProducts }) => {
    const slideableContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderItemRef = useRef<HTMLDivElement | null>(null);
    const currentSliderPosition = useRef<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                if (slideableContainerRef.current) {
                    currentSliderPosition.current = 0;
                    slideableContainerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
                }
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Section title="BASED ON YOUR HISTORY">
            <div className="absolute z-10 right-0 top-2 block ipad:hidden">
                <SmallButtonLink to="/products/featured" text="View All" />
            </div>
            <div className="absolute z-10 right-0 top-2 hidden ipad:block">
                <SliderControl
                    slideableContainerRef={slideableContainerRef}
                    sliderItemRef={sliderItemRef}
                    currentSliderPosition={currentSliderPosition}
                    productsLength={historyProducts.length}
                    alignmentPattern={[3, 3, 3, 4]}
                />
            </div>
            <ProductList ProductList={historyProducts} slideableContainerRef={slideableContainerRef} sliderItemRef={sliderItemRef} />
        </Section>
    );
};

export default ProductHistory;
