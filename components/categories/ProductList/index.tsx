import { NextPage } from "next";
import Filter from "./Filter";
import FilterHead from "./FilterHead";
import { useState } from "react";

const ProductList: NextPage = () => {
    const [filterSliderActive, setFilterSilderActive] = useState<boolean>(false);

    const closeFilterSlider = () => {
        setFilterSilderActive(false);
    };

    const openFilterSlider = () => {
        setFilterSilderActive(true);
    };
    return (
        <div className="container bg-main">
            <FilterHead openFilterSilder={openFilterSlider} />
            <Filter closeFilterSlider={closeFilterSlider} filterSliderActive={filterSliderActive} />
        </div>
    );
};

export default ProductList;
