import { NextPage } from "next";
import CustomSelect from "../../../components/common/inputs/CustomSelect";
const FilterHead: NextPage = () => {
    return (
        <div className="drop-shadow px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-6">
                {/* Filter icon */}

                <i className="far fa-filter text-white text-3xl" />
                <h2 className="text-white">FILTERS</h2>
            </div>
            <div>
                <div className="flex space-x-2">
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
            </div>
        </div>
    );
};

export default FilterHead;
