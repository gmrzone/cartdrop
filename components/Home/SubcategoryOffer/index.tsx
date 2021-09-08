import { NextPage } from "next";
import Section from "../../common/Section";
import { SubcategoryOfferType } from "../../../shared/types";
import Slider from "./Slider";
import SliderControl from "../../common/SliderControl";
import { useRef, useEffect } from "react";

interface Props {
    subcategoryOffers: SubcategoryOfferType[];
}
const SubcategoryOffer: NextPage<Props> = ({ subcategoryOffers }) => {
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
        <Section title="OFFERS">
            <div className="absolute z-10 right-0 top-2 hidden ipad:block">
                <SliderControl
                    slideableContainerRef={slideableContainerRef}
                    sliderItemRef={sliderItemRef}
                    currentSliderPosition={currentSliderPosition}
                    productsLength={subcategoryOffers.length}
                    alignmentPattern={[3, 3, 4, 4]}
                />
            </div>
            <Slider subcategoryOffers={subcategoryOffers} slideableContainerRef={slideableContainerRef} sliderItemRef={sliderItemRef} />
        </Section>
    );
};

export default SubcategoryOffer;
