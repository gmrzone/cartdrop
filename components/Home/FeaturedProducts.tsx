import { NextPage } from 'next';
import Section from '../common/Section';
import ProductList from '../common/ProductSlider';
import { ProductVariationType } from '../../shared/types';
import SmallButtonLink from '../common/buttons/SmallButtonLink';
import SliderControl from '../common/SliderControl';
import { useRef, useEffect, useState, useCallback } from 'react';
import useMobile from '../hooks/useIsMobile';

interface IProps {
    featuredProducts: ProductVariationType[];
}

const FeaturedProducts: NextPage<IProps> = ({ featuredProducts }) => {
    const isMobile = useMobile();
    const slideableContainerRef = useRef<HTMLDivElement | null>(null);
    const sliderItemRef = useRef<HTMLAnchorElement | null>(null);
    const [currentSliderPosition, setCurrentSliderPosition] = useState<number>(0);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                if (slideableContainerRef.current) {
                    setCurrentSliderPosition(0);
                    slideableContainerRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
                }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const setCurrentSliderPositionTo = useCallback((n: number) => {
        setCurrentSliderPosition(n);
    }, []);
    return (
        <Section title="FEATURED">
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
                        productsLength={featuredProducts.length}
                        alignmentPattern={[3, 3, 3, 4]}
                        extraSpace={16}
                    />
                </div>
            )}
            <ProductList
                ProductList={featuredProducts}
                slideableContainerRef={slideableContainerRef}
                sliderItemRef={sliderItemRef}
                setCurrentSliderPositionTo={setCurrentSliderPositionTo}
                category=""
            />
        </Section>
    );
};

export default FeaturedProducts;
