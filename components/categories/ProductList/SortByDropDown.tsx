import { NextPage } from "next";
import { useState, useEffect, MouseEventHandler } from "react";

const SortByDropDown: NextPage = () => {
    type SortDropDownType = {
        id: number;
        name: string;
    };
    const data: SortDropDownType[] = [
        {
            id: 1,
            name: "Newest Arrivals",
        },
        {
            id: 2,
            name: "Featured",
        },
        {
            id: 3,
            name: "Price : Low to High",
        },
        {
            id: 4,
            name: "Price : High to Low",
        },
        {
            id: 5,
            name: "Avg. Customer Review",
        },
    ];
    const [dropDownActive, setDropDownActive] = useState<boolean>(false);
    const [activeOption, setActiveOption] = useState<SortDropDownType>(data[3]);

    useEffect(() => {
        const clickedOutside = () => {
            setDropDownActive(false);
        };

        document.body.addEventListener("click", clickedOutside);

        return () => {
            document.body.removeEventListener("click", clickedOutside);
        };
    }, []);

    const renderOptions = data.map((x) => {
        return (
            <span key={x.id} className="block px-2 py-1 bg-white hover:bg-slate-200" onClick={() => setActiveOption(x)}>
                {x.name}
            </span>
        );
    });

    const toggleDropdown: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        setDropDownActive((current) => !current);
    };
    return (
        <div className="bg-white h-8 w-full max-w-[170px] rounded-sm relative cursor-pointer" onClick={toggleDropdown}>
            {/* Selected */}
            <div className="h-full w-full relative flex items-center px-2">
                <div className="text-[12px]">{activeOption.name}</div>
                <i className="fas fa-sort-down absolute right-2 top-1 text-main text-sm" />
            </div>
            {/* Options */}
            {dropDownActive && (
                <div className="absolute w-full max-w-[200px] mt-3 text-[12px] rounded-sm shadow-drop-down">{renderOptions}</div>
            )}
        </div>
    );
};

export default SortByDropDown;
