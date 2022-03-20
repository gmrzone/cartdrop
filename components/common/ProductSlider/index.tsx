import { NextPage } from 'next';
import { ProductVariationType } from '../../../shared/types';
import SliderItem from './SliderItem';
import { MutableRefObject } from 'react';
import { useEffect } from 'react';

interface IProps {
    ProductList: ProductVariationType[];
    slideableContainerRef: MutableRefObject<HTMLDivElement | null>;
    sliderItemRef: MutableRefObject<HTMLDivElement | null>;
    setCurrentSliderPositionTo: (n: number) => void;
    category: string;
}
const ProductList: NextPage<IProps> = ({ ProductList, slideableContainerRef, sliderItemRef, setCurrentSliderPositionTo, category }) => {
    const renderProductList = ProductList?.map((x, i) => {
        return <SliderItem key={x.uuid} item={x} index={i} sliderItemRef={sliderItemRef} />;
    });

    useEffect(() => {
        const resetSlider = () => {
            if (window.innerWidth >= 992) {
                if (slideableContainerRef.current) {
                    setCurrentSliderPositionTo(0);
                    slideableContainerRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
                }
            }
        };
        // Enable transition will enable transition effect on the slider (We will use setTimeout to enable it after some seconds)
        const enableTransition = () => {
            if (slideableContainerRef.current) {
                slideableContainerRef.current.classList.add('transform-gpu');
                slideableContainerRef.current.classList.add('duration-500');
            }
        };
        // Remove Transition will remove transition effect from the slider. We will invoke this as soon as the component is unmounted
        const removeTransition = () => {
            if (slideableContainerRef.current) {
                slideableContainerRef.current.classList.remove('transform-gpu');
                slideableContainerRef.current.classList.remove('duration-500');
            }
        };

        // Enabling transition after 50 ms
        setTimeout(enableTransition, 10);
        resetSlider();

        return () => {
            resetSlider();
            removeTransition();
        };
    }, [category, slideableContainerRef, setCurrentSliderPositionTo]);
    return (
        <div className="overflow-x-hidden">
            <div
                className="flex justify-center flex-wrap gap-1 sm:gap-2 md:gap-3 ipad:flex-nowrap ipad:gap-0 ipad:space-x-4 inner-container"
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
