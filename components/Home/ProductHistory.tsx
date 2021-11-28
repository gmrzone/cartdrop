import { NextPage } from "next";
import Section from "../common/Section";
import ProductList from "../common/ProductSlider";
import { ProductVariationType } from "../../shared/types";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import SliderControl from "../common/SliderControl";
import { useRef, useEffect, useState } from "react";
import useMobile from "../hooks/useIsMobile";

interface IProps {
    historyProducts: ProductVariationType[];
}

const ProductHistory: NextPage<IProps> = ({ historyProducts }) => {
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
        <Section title="BASED ON YOUR HISTORY">
            {isMobile ? (
                <div className="absolute z-10 right-0 top-2">
                    <SmallButtonLink to="/products/featured" text="View All" />
                </div>
            ) : (
                <div className="absolute z-10 right-0 top-2">
                    <SliderControl
                        slideableContainerRef={slideableContainerRef}
                        sliderItemRef={sliderItemRef}
                        currentSliderPosition={currentSliderPosition}
                        setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                        productsLength={historyProducts.length}
                        alignmentPattern={[3, 3, 3, 4]}
                        extraSpace={18}
                    />
                </div>
            )}

            <ProductList
                ProductList={historyProducts}
                slideableContainerRef={slideableContainerRef}
                sliderItemRef={sliderItemRef}
                currentSliderPosition={currentSliderPosition}
                setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                category=""
            />
        </Section>
    );
};

export default ProductHistory;
