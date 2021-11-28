import { NextPage } from "next";
import Section from "../../common/Section";
import { SubcategoryOfferType } from "../../../shared/types";
import Slider from "../../common/CategorySlider";
import SliderControl from "../../common/SliderControl";
import { useRef, useEffect, useState } from "react";
import useMobile from "../../hooks/useIsMobile";

interface Props {
    subcategoryOffers: SubcategoryOfferType[];
}
const SubcategoryOffer: NextPage<Props> = ({ subcategoryOffers }) => {
    const slideableContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderItemRef = useRef<HTMLDivElement | null>(null);
    const [currentSliderPosition, setCurrentSliderPosition] = useState<number>(0);
    const isMobile = useMobile();

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
        <Section title="OFFERS">
            {!isMobile && (
                <div className="absolute z-10 right-0 top-2">
                    <SliderControl
                        slideableContainerRef={slideableContainerRef}
                        sliderItemRef={sliderItemRef}
                        currentSliderPosition={currentSliderPosition}
                        setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                        productsLength={subcategoryOffers.length}
                        alignmentPattern={[3, 3, 4, 4]}
                        extraSpace={15.5}
                    />
                </div>
            )}
            <Slider subcategoryOffers={subcategoryOffers} slideableContainerRef={slideableContainerRef} sliderItemRef={sliderItemRef} />
        </Section>
    );
};

export default SubcategoryOffer;
