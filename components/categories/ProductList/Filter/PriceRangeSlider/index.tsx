import { NextPage } from "next";
import Slider from "./Slider";
import NumberInput from "./NumberInput";
import { FormEventHandler, useRef, ChangeEvent, useState, useEffect } from "react";

type PriceRangeSliderType = {
    maxPrice: number;
};

const PriceRangeSlider: NextPage<PriceRangeSliderType> = ({ maxPrice }) => {
    const [firstRangeValue, setFirstRangeValue] = useState<number>(0); // add default start price
    const [secondRangeValue, setSecondRangeValue] = useState<number>(5000000); // add default end price
    const innerRange = useRef<null | HTMLDivElement>(null);
    const firstRangeRef = useRef<null | HTMLInputElement>(null);
    const secondRangeRef = useRef<null | HTMLInputElement>(null);

    const rangeInputHandler: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (innerRange.current && firstRangeRef.current && secondRangeRef.current) {
            const priceGap = (+maxPrice * 10) / 100;
            const minValue = +firstRangeRef.current.value; // get value of first range
            const maxValue = +secondRangeRef.current.value; // get value of second range
            const leftPercent = (firstRangeValue / maxPrice) * 100; // left progress percent
            const rightPercent = 100 - (secondRangeValue / maxPrice) * 100; // right progress percent
            const rangeType = e.target.dataset.type;
            if (maxValue - minValue < priceGap) {
                // if both range is too close (ie px between them is < priceGap)
                if (rangeType === "left") {
                    // change the value of first range to priceGap from second range to right
                    const newValue = secondRangeValue - priceGap;
                    setFirstRangeValue(newValue);
                    firstRangeRef.current.value = newValue.toString();
                } else {
                    // change the value of second range to priceGap from first range to left
                    const newValue = firstRangeValue + priceGap;
                    setSecondRangeValue(newValue);
                    secondRangeRef.current.value = newValue.toString();
                }
            } else {
                // if both range is not too close just change its value
                if (rangeType === "left") {
                    setFirstRangeValue(+e.target.value);
                } else {
                    setSecondRangeValue(+e.target.value);
                }
            }
            // update inner progress bar according to both range position
            innerRange.current.style.left = leftPercent + "%";
            innerRange.current.style.right = rightPercent + "%";
        }
    };

    return (
        <div>
            <h4 className="text-gray-700 mb-4">Price Range</h4>
            <Slider innerRange={innerRange} />
            <div className="relative range-input">
                <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    onInput={rangeInputHandler}
                    data-type="left"
                    ref={firstRangeRef}
                    value={firstRangeValue}
                />
                <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    onInput={rangeInputHandler}
                    data-type="right"
                    ref={secondRangeRef}
                    value={secondRangeValue}
                />
            </div>
            <div className="flex mt-4 justify-between items-center">
                <NumberInput currentValue={firstRangeValue} setRangeValue={setFirstRangeValue} />
                -
                <NumberInput currentValue={secondRangeValue} setRangeValue={setSecondRangeValue} />
            </div>
            <style jsx>{`
                .range-input input {
                    position: absolute;
                    top: -0.625rem;
                    height: 0.625rem;
                    width: 100%;
                    background: none;
                    -webkit-appearance: none;
                    pointer-events: none;
                }

                .range-input input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: white;
                    outline: 1px solid rgb(45, 61, 138);
                    pointer-events: auto;
                    cursor: pointer;
                    border: none;
                }

                .range-input input::-moz-range-thumb {
                    -moz-appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: white;
                    outline: 1px solid rgb(45, 61, 138);
                    pointer-events: auto;
                    cursor: pointer;
                    border: none;
                }
            `}</style>
        </div>
    );
};

export default PriceRangeSlider;
