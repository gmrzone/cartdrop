import { useContext } from "react";
import ProductListContext from "../../../../../context/ProductListContext";
import CategoryFilterItem from "./CategoryFilterItem";
const CategoryFilter = () => {
    const { subcategories } = useContext(ProductListContext);
    const filterList = subcategories?.map((x) => {
        return <CategoryFilterItem subcategory={x} key={x.uuid} />;
    });
    return (
        <div>
            <h5 className="text-gray-700 mb-3">Subcategories</h5>
            <div className="space-y-2">{filterList}</div>
        </div>
    );
};

export default CategoryFilter;
