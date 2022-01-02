import { NextPage } from "next";

const Checkbox: NextPage = () => {
    return (
        <div className="relative">
            <input
                type="checkbox"
                className="peer appearance-none h-[1.85rem] w-[1.85rem] rounded-[0.200rem] border border-main cursor-pointer relative z-50"
            />
            <i className="far fa-check text-main text-xl h-full w-full top-0 left-0 absolute peer-checked:text-opacity-100 text-opacity-0 z-40 text-center" />
        </div>
    );
};

export default Checkbox;
