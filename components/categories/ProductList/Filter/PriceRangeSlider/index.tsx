import { NextPage } from "next";
import Slider from "./Slider";
import NumberInput from "./NumberInput";
import { FormEventHandler, useRef, ChangeEvent, useState, useEffect } from "react";

type PriceRangeSliderType = {
    maxPrice: number;
};

const PriceRangeSlider: NextPage<PriceRangeSliderType> = ({ maxPrice }) => {
    const innerRange = useRef<null | HTMLDivElement>(null);
    const firstRangeRef = useRef<null | HTMLInputElement>(null);
    const secondRangeRef = useRef<null | HTMLInputElement>(null);

    const rangeInputHandler: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (innerRange.current && firstRangeRef.current && secondRangeRef.current) {
            const priceGap = (+maxPrice * 10) / 100;
            const minValue = +firstRangeRef.current.value;
            const maxValue = +secondRangeRef.current.value;
            const leftPercent = (minValue / maxPrice) * 100;
            const rightPercent = 100 - (maxValue / maxPrice) * 100;
            if (maxValue - minValue < priceGap) {
                const rangeType = e.target.dataset.type;
                console.log(rangeType);
                if (rangeType === "left") {
                    const newValue = maxValue - priceGap;
                    firstRangeRef.current.value = newValue.toString();
                } else {
                    const newValue = minValue + priceGap;
                    secondRangeRef.current.value = newValue.toString();
                }
            } else {
                innerRange.current.style.left = leftPercent + "%";
                innerRange.current.style.right = rightPercent + "%";
            }
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
                    defaultValue={2000}
                    onInput={rangeInputHandler}
                    data-type="left"
                    ref={firstRangeRef}
                />
                <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    defaultValue={200000}
                    onInput={rangeInputHandler}
                    data-type="right"
                    ref={secondRangeRef}
                />
            </div>
            <div className="flex mt-4 justify-between items-center">
                <NumberInput currentValue={2000} />
                -
                <NumberInput currentValue={maxPrice} />
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
