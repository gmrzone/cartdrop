import { NextPage } from "next";
import { FeaturedProductType } from "../../../shared/types";
import ProductItem from "./ProductItem";

interface IProps {
    featuredProducts: FeaturedProductType[];
}
const ProductList: NextPage<IProps> = ({ featuredProducts }) => {
    const renderProductList = featuredProducts?.map((x, i) => {
        return <ProductItem key={x.uuid} item={x} index={i} />;
    });
    return (
        <div className="overflow-x-hidden">
            <div className="flex justify-center flex-wrap gap-1 sm:gap-2 md:gap-3 ipad:flex-nowrap ipad:gap-0 ipad:space-x-4 inner-container transform-gpu duration-500">
                {renderProductList}
                <style>{`
                
                    .inner-container {
                        width: 100%;
                    }

                    @media (min-width: 992px){
                        .inner-container {
                            width: calc(var(--product-item-width) * ${featuredProducts.length})
                        }
                    }
                
                `}</style>
            </div>
        </div>
    );
};

export default ProductList;
