import { NextPage } from "next";
import { FeaturedProductType } from "../../../shared/types";
import ProductItem from "./ProductItem";

interface IProps {
    featuredProducts: FeaturedProductType[];
}
const ProductList: NextPage<IProps> = ({ featuredProducts }) => {
    const renderProductList = featuredProducts?.map((x, i) => {
        return <ProductItem key={x.uuid} item={x} index={i}/>;
    });
    return (
        <div className="ipad:flex ipad:flex-nowrap ipad:space-x-4 inner-container">
            {renderProductList}
            <style>{`
            
                .inner-container {
                    width: 100%;
                }

                @media (min-width: 992px){
                    .inner-container {
                        width: 1560px;
                    }
                }
            
            `}</style>
        </div>
    );
};

export default ProductList;
