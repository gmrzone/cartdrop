import { NextPage } from "next";
import { ProductVariationType } from "../../../shared/types";
import SliderItem from "./SliderItem";
import { MutableRefObject } from "react";
import { useEffect } from "react";

interface IProps {
    ProductList: ProductVariationType[];
    slideableContainerRef: MutableRefObject<HTMLDivElement | null>;
    sliderItemRef: MutableRefObject<HTMLDivElement | null>;
    currentSliderPosition: number;
    setCurrentSliderPositionTo: (n: number) => void;
    category: string;
}
const ProductList: NextPage<IProps> = ({
    ProductList,
    slideableContainerRef,
    sliderItemRef,
    currentSliderPosition,
    setCurrentSliderPositionTo,
    category,
}) => {
    const renderProductList = ProductList?.map((x, i) => {
        return <SliderItem key={x.uuid} item={x} index={i} sliderItemRef={sliderItemRef} />;
    });

    useEffect(() => {
        const resetSlider = () => {
            if (window.innerWidth >= 992) {
                if (slideableContainerRef.current) {
                    setCurrentSliderPositionTo(0);
                    slideableContainerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
                }
            }
        };
        resetSlider();

        return () => {
            resetSlider();
        };
    }, [category, slideableContainerRef]);
    return (
        <div className="overflow-x-hidden">
            <div
                className="flex justify-center flex-wrap gap-1 sm:gap-2 md:gap-3 ipad:flex-nowrap ipad:gap-0 ipad:space-x-4 inner-container transform-gpu duration-500"
                ref={slideableContainerRef}>
                {renderProductList}
                <style>{`
                
                    .inner-container {
                        width: 100%;
                    }

                    @media (min-width: 992px){
                        .inner-container {
                            width: calc(var(--product-item-width) * ${ProductList.length})
                        }
                    }
                
                `}</style>
            </div>
        </div>
    );
};

export default ProductList;
