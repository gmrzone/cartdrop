import { NextPage } from "next";
import { SubcategoryOfferType } from "../../../shared/types";
import SliderItem from "./SliderItem";
import { MutableRefObject } from "react";
interface Props {
    subcategoryOffers: SubcategoryOfferType[];
    slideableContainerRef: MutableRefObject<HTMLDivElement | null>;
    sliderItemRef: MutableRefObject<HTMLDivElement | null>;
}

const Slider: NextPage<Props> = ({ subcategoryOffers, slideableContainerRef, sliderItemRef }) => {
    const renderSliderItems = subcategoryOffers.map((x) => {
        return <SliderItem key={x.uuid} subcategoryOfferItem={x} sliderItemRef={sliderItemRef} />;
    });
    return (
        <div className="overflow-hidden slider-main-container">
            <div className="overflow-x-auto overflow-y-hidden slider-outer-container">
                <div className="flex space-x-4 slider-inner-container" ref={slideableContainerRef}>
                    {renderSliderItems}
                </div>
                <style>{`
                    .slider-inner-container {
                        width: calc(var(--subcategory-item-width) * ${subcategoryOffers.length});
                        scroll-behavior: smooth;
                        will-change: transform;
                        transform: translateX(0px);
                        transition: transform 0.2s linear;
                    }
                    .slider-outer-container {
                        height: calc(100% + 15px);
                        scroll-behavior: smooth;

                    }
                    
                    .slider-main-container {
                        height: 304px;
                    }
                    @media (min-width: 640px){
                        .slider-main-container {
                            height: 336px
                        }
                    }
                    @media (min-width: 992px){
                        .slider-main-container {
                            height: 352px
                        }
                    }
                    @media (min-width: 1199px){
                        .slider-main-container {
                            height: 392px
                        }
                    }
                    @media (min-width: 1399px){
                        .slider-main-container {
                            height: 352px
                        }
                    }
                    @media (min-width: 1599px){
                        .slider-main-container {
                            height: 360px
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Slider;
