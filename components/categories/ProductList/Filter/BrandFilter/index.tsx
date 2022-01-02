import { useContext } from "react";
import ProductListContext from "../../../../../context/ProductListContext";
import BrandFilterItem from "./BrandFilterItem";
import { BrandsTypes } from '../../../../../shared/types'
const BrandFilter = () => {
    const { brands } = useContext(ProductListContext);
    const filterList = brands?.map((x: BrandsTypes, i: number) => {
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
