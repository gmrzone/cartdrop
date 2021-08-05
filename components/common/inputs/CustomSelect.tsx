import { NextPage } from "next";
import { useState, MouseEventHandler, useEffect, useRef, FocusEventHandler } from "react";
type options = {
    label: string;
    value: string;
};

interface SelectProps {
    options: options[];
    initialLabel: options;
}

const Select: NextPage<SelectProps> = ({ options, initialLabel }) => {
    const [selected, setSelected] = useState<options | null>(null);
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
    const labelRef = useRef<HTMLSpanElement | null>(null);
    const mainContainer = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const clickOutside = () => {
            if (dropDownOpen) {
                setDropDownOpen(false);
            }
        };
        document.body.addEventListener("click", clickOutside);

        return () => {
            document.body.removeEventListener("click", clickOutside);
        };
    }, [dropDownOpen]);

    useEffect(() => {
        if (labelRef.current && mainContainer.current) {
            if (selected) {
                mainContainer.current.classList.remove("border");
                labelRef.current.classList.remove("translate-x-0");
                labelRef.current.classList.remove("translate-y-0");
                labelRef.current.classList.remove("scale-100");
                labelRef.current.classList.remove("text-gray-500");
                labelRef.current.classList.add("-translate-x-5");
                labelRef.current.classList.add("-translate-y-7");
                labelRef.current.classList.add("scale-80");
                labelRef.current.classList.add("text-main");
                mainContainer.current.classList.add("border-2");
            } else {
                mainContainer.current.classList.remove("border-2");
                labelRef.current.classList.remove("-translate-x-5");
                labelRef.current.classList.remove("-translate-y-7");
                labelRef.current.classList.remove("scale-80");
                labelRef.current.classList.remove("text-main");
                labelRef.current.classList.add("translate-x-0");
                labelRef.current.classList.add("translate-y-0");
                labelRef.current.classList.add("scale-100");
                labelRef.current.classList.add("text-gray-500");
                mainContainer.current.classList.add("border");
            }
        }
    }, [selected]);

    const renderOptions = options.map((x) => {
        return (
            <div key={x.value} data-value={x.value} className="p-4 text-main bg-white hover:bg-gray-200" onClick={() => setSelected(x)}>
                {x.label}
            </div>
        );
    });
    const toggleDropDown: MouseEventHandler<HTMLDivElement> = (e) => {
        setDropDownOpen(!dropDownOpen);
    };

    return (
        <div
            className={`py-3 px-3 border-solid border-main font-poppins rounded-normal h-14 cursor-pointer relative ${
                !dropDownOpen && !selected ? "border" : "border-2"
            }`}
            onClick={toggleDropDown}
            ref={mainContainer}>
            <select className="hidden">
                {options.map((x) => {
                    return <option key={x.value}>{x.label}</option>;
                })}
            </select>
            <i className="fas fa-sort-down absolute right-4 top-4 text-main" />
            <div className="font-medium text-xl text-main">
                <span
                    className="text-gray-500 translate-x-0 translate-y-0 scale-100 duration-300 transition-all absolute bg-white"
                    ref={labelRef}>
                    {initialLabel.label}
                </span>
                {selected && (
                    <span data-selected={selected.value} className="text-xl text-main">
                        {selected.label}
                    </span>
                )}
            </div>
            <div className={`absolute bg-white w-full left-0 z-20 top-16 shadow-drop-down rounded-lg ${dropDownOpen ? "block" : "hidden"}`}>
                {renderOptions}
            </div>
        </div>
    );
};

export default Select;
