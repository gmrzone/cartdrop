import Section from "../common/Section";
import { NextPage } from "next";
import { ProductVariationType } from "../../shared/types";
import useMobile from "../hooks/useIsMobile";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import ProductList from "../common/ProductSlider";
import SliderControl from "../common/SliderControl";
import { useRef, useEffect } from "react";

interface TopProductsProps {
    category: string;
    topProducts: ProductVariationType[];
}

const TopProducts: NextPage<TopProductsProps> = ({ category, topProducts }) => {
    const isMobile = useMobile();
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
        <Section title={`BEST SELLING ${category?.toUpperCase()}`}>
            {isMobile ? (
                <div className="absolute z-10 right-0 top-2">
                    <SmallButtonLink to="/products/top" text="View All" />
                </div>
            ) : (
                <div className="absolute z-10 right-0 top-2">
                    <SliderControl
                        slideableContainerRef={slideableContainerRef}
                        sliderItemRef={sliderItemRef}
                        currentSliderPosition={currentSliderPosition}
                        productsLength={topProducts.length}
                        alignmentPattern={[3, 3, 3, 4]}
                    />
                </div>
            )}
            <ProductList
                ProductList={topProducts}
                slideableContainerRef={slideableContainerRef}
                sliderItemRef={sliderItemRef}
                currentSliderPosition={currentSliderPosition}
                category={category}
            />
        </Section>
    );
};

export default TopProducts;
