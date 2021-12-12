import { NextPage } from "next";
import SortByDropDown from "./SortByDropDown";
import { MouseEventHandler } from 'react'

type FilterHeadProps = {
    openFilterSilder: () => void;

}
const FilterHead: NextPage<FilterHeadProps> = ({ openFilterSilder }) => {

    const openFilterSliderHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        openFilterSilder()
    }
    return (
        <div className="drop-shadow px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-2 mobile-bg:space-x-3 ipad:space-x-4 items-center cursor-pointer" onClick={openFilterSliderHandler}>
                {/* Filter icon */}
                <i className="far fa-filter text-white text-sm mobile-lg:text-base ipad:text-xl desktop-big:text-2xl" />
                <h2 className="text-white text-sm mobile-lg:text-base ipad:text-xl desktop-big:text-2xl">FILTERS</h2>
            </div>
            <div className="flex w-full space-x-2 justify-end items-center">
                <div className="space-x-2 hidden mobile-xl:flex">
                    {/* Applied filters  */}
                    <div className="text-xs bg-white px-2 py-2 rounded-full flex space-x-1">
                        <div className="">
                            <span>Brand</span> - <span>HP</span>
                        </div>
                        <div className="bg-main px-1 rounded-full cursor-pointer">
                            <i className="fal fa-times text-white" />
                        </div>
                    </div>
                    <div className="text-xs bg-white px-2 py-2 rounded-full flex space-x-1">
                        <div className="">
                            <span>Price</span> : <span>50000 - 70000</span>
                        </div>
                        <div className="bg-main px-1 rounded-full cursor-pointer">
                            <i className="fal fa-times text-white" />
                        </div>
                    </div>
                </div>
                <SortByDropDown />
            </div>
        </div>
    );
};

export default FilterHead;
