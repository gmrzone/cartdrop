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
    const goLeft = () => {
        if (slideableContainerRef.current) {
            console.log(`Go Left ${sliderItemRef.current?.clientWidth} px`);
        }
    };
    const goRight = () => {
        if (slideableContainerRef.current) {
            console.log(`Go Right ${sliderItemRef.current?.clientWidth} px`);
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
