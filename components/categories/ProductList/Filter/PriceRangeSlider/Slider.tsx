import { NextPage } from "next";
import { MutableRefObject } from "react";

type SliderProps = {
    innerRange: MutableRefObject<HTMLDivElement | null>;
};

const Slider: NextPage<SliderProps> = ({ innerRange }) => {
    return (
        <div className="h-2.5 w-full bg-slate-300 rounded-lg overflow-hidden relative">
            <div className="h-2.5 bg-main rounded-lg absolute top-0 left-[0%] right-[0%]" ref={innerRange}></div>
        </div>
    );
};

export default Slider;
