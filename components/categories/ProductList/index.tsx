import { NextPage } from "next";
import Filter from "./Filter";
import FilterHead from "./FilterHead";
import { useState } from "react";
import Products from "./Products";

const ProductList: NextPage = () => {
    const [filterSliderActive, setFilterSliderActive] = useState<boolean>(false);

    const closeFilterSlider = () => {
        setFilterSliderActive(false);
        document.body.classList.remove("overflow-hidden");
        document.body.classList.add("overflow-auto");
    };

    const openFilterSlider = () => {
        setFilterSliderActive(true);
        document.body.classList.remove("overflow-auto");
        document.body.classList.add("overflow-hidden");
    };
    return (
        <div className="container">
            <FilterHead openFilterSilder={openFilterSlider} />
            <Filter closeFilterSlider={closeFilterSlider} filterSliderActive={filterSliderActive} />
            <Products />
        </div>
    );
};

export default ProductList;
