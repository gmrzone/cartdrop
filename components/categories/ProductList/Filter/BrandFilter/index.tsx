import { useContext } from "react";
import FilterContext from "../../../../../context/FilterContext";
import BrandFilterItem from "./BrandFilterItem";
const BrandFilter = () => {
    const { brands } = useContext(FilterContext);
    const filterList = brands?.map((x, i) => {
        return <BrandFilterItem brand={x} key={i} />;
    });
    return (
        <div>
            <h5 className="text-gray-700 mb-3">Brands</h5>
            <div className="space-y-2">{filterList}</div>
        </div>
    );
};

export default BrandFilter;
