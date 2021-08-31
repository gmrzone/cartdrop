import { NextPage } from "next";
import Section from "../../common/Section";
import ProductList from "./ProductList";
import { FeaturedProductType } from "../../../shared/types";

interface IProps {
    featuredProducts: FeaturedProductType[];
}

const FeaturedProducts: NextPage<IProps> = ({ featuredProducts }) => {
    return (
        <Section title="FEATURED" viewAll="/products/featured/">
            <div className="">
                <div className="overflow-x-auto">
                    <ProductList featuredProducts={featuredProducts} />
                </div>
            </div>
        </Section>
    );
};

export default FeaturedProducts;
