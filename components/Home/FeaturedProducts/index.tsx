import { NextPage } from "next";
import Section from "../../common/Section";
import ProductList from "./ProductList";
import { FeaturedProductType } from "../../../shared/types";
import SmallButtonLink from '../../common/buttons/SmallButtonLink';
import SliderControl from '../../common/SliderControl'

interface IProps {
    featuredProducts: FeaturedProductType[];
}

const FeaturedProducts: NextPage<IProps> = ({ featuredProducts }) => {
    const goLeft = () => {
        
    }
    const goRight = () => {

    }
    return (
            <Section title="FEATURED" viewAll="/products/featured/">
                <div className="absolute z-10 right-0 top-2 block ipad:hidden">
                    <SmallButtonLink to="products/featured" text="View All" />
                </div>
                <div className="absolute z-10 right-0 top-2 hidden ipad:block">
                    <SliderControl goLeft={goLeft} goRight={goRight} />
                </div>
                <div className="">
                    <div className="overflow-x-hidden">
                        <ProductList featuredProducts={featuredProducts} />
                    </div>
                </div>
            </Section>
    );
};

export default FeaturedProducts;
