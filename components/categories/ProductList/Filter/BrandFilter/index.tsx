import { useContext } from "react";
import BrandContext from "../../../../../context/BrandContext";
import BrandFilterItem from "./BrandFilterItem";
const BrandFilter = () => {
    const brands = useContext(BrandContext);
    const filterList = brands?.map((x, i) => {
        return <BrandFilterItem brand={x} key={i} />;
    });
    return (
        <div>
            <h5 className="text-gray-700 mb-4">Brands</h5>
            {filterList}
        </div>
    );
};

export default BrandFilter;
