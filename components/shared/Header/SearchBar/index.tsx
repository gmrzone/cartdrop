import { NextPage } from "next";
import { MouseEventHandler, useRef, useEffect, useState } from "react";
const SearchBar: NextPage = () => {
    const mainSearch = useRef<null | HTMLDivElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [searchExpended, setSearchExpended] = useState<boolean>(false);
    useEffect(() => {
        if (mainSearch.current && inputRef.current && window.innerWidth >= 768) {
            if (searchExpended) {
                mainSearch.current.classList.remove("md:w-12");
                mainSearch.current.classList.add("md:w-72");
                mainSearch.current.classList.add("ipad:w-80");
                mainSearch.current.classList.add("desktop-large:w-96");
                inputRef.current.focus();
            } else {
                mainSearch.current.classList.remove("md:w-72");
                mainSearch.current.classList.remove("ipad:w-80");
                mainSearch.current.classList.remove("desktop-large:w-96");
                mainSearch.current.classList.add("md:w-12");
                inputRef.current.blur();
            }
        }
    }, [searchExpended]);

    useEffect(() => {
        const clickOutside = () => {
            if (searchExpended) {
                setSearchExpended(false);
            }
        };
        document.body.addEventListener("click", clickOutside);

        return () => {
            document.body.removeEventListener("click", clickOutside);
        };
    }, [searchExpended]);

    const expandSearch: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        setSearchExpended(true);
    };
    return (
        <div
            className="flex flex-nowrap rounded-md mt-3 w-full items-center overflow-hidden border-2 relative border-solid border-main md:rounded-full md:w-12 h-11 cursor-pointer self-center md:mt-0 md:mr-8 transition-all duration-500"
            onClick={expandSearch}
            ref={mainSearch}>
            <div className="ml-3">
                <i className="fa fa-search text-main text-xl" aria-hidden="true" />
            </div>
            <div className="w-full md:w-auto mr-1">
                <input
                    type="text"
                    className="top-0 h-full w-full left-0 text-main focus:outline-none font-poppins font-semibold pl-3"
                    ref={inputRef}
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default SearchBar;
