import { NextPage } from "next";
import FilterHead from "./FilterHead";
const ProductList: NextPage = () => {
    return (
        <div className="container bg-main">
            <FilterHead />
        </div>
    );
};

export default ProductList;
