import { NextPage } from "next";
import { MutableRefObject } from "react";

interface SliderControlProps {
    goLeft: () => void;
    goRight: () => void;
    rightControlRef: MutableRefObject<HTMLDivElement | null>;
    leftControlRef: MutableRefObject<HTMLDivElement | null>;
}
const SliderControl: NextPage<SliderControlProps> = ({ goLeft, goRight, rightControlRef, leftControlRef }) => {
    return (
        <div className="flex space-x-2">
            <div
                className="bg-gray-400 px-3 py-1 text-gray-200 rounded-md text-lg cursor-not-allowed transition-colors duration-100"
                onClick={goRight}
                ref={leftControlRef}>
                <i className="fas fa-chevron-left" />
            </div>
            <div
                className="bg-secondary px-3 py-1 text-white rounded-md text-lg cursor-pointer hover:bg-main transition-colors duration-100"
                onClick={goLeft}
                ref={rightControlRef}>
                <i className="fas fa-chevron-right" />
            </div>
        </div>
    );
};

export default SliderControl;
