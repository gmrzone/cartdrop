import Section from "../common/Section";
import { NextPage } from "next";
import { ProductVariationType } from "../../shared/types";
import useMobile from "../hooks/useIsMobile";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import ProductList from "../common/ProductSlider";
import SliderControl from "../common/SliderControl";
import { useRef, useEffect, useState } from "react";

interface TopProductsProps {
    category: string;
    topProducts: ProductVariationType[];
}

const TopProducts: NextPage<TopProductsProps> = ({ category, topProducts }) => {
    const isMobile = useMobile();
    const slideableContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderItemRef = useRef<HTMLDivElement | null>(null);
    const [currentSliderPosition, setCurrentSliderPosition] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                if (slideableContainerRef.current) {
                    setCurrentSliderPosition(0);
                    slideableContainerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const setCurrentSliderPositionTo = (n: number) => {
        setCurrentSliderPosition(n);
    };
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
                        setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                        productsLength={topProducts.length}
                        alignmentPattern={[3, 3, 3, 4]}
                        extraSpace={18}
                    />
                </div>
            )}
            <ProductList
                ProductList={topProducts}
                slideableContainerRef={slideableContainerRef}
                sliderItemRef={sliderItemRef}
                setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                category={category}
            />
        </Section>
    );
};

export default TopProducts;
