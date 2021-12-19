import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";

type NumberInputProps = {
    currentValue: number;
    setRangeValue: Dispatch<SetStateAction<number>>;
};
const NumberInput: NextPage<NumberInputProps> = ({ currentValue, setRangeValue }) => {
    return (
        <div className="font-roboto whitespace-nowrap text-main number-input">
            &#8377;{" "}
            <input
                type="number"
                value={currentValue}
                className="border w-[100px] ipad:w-[120px] h-[40px] rounded-md text-center text-md ipad:text-lg"
                onChange={(e) => setRangeValue(+e.target.value)}
            />
            <style jsx>{`
                .number-input input[type="number"] {
                    -moz-appearance: textfield;
                }

                .number-input input[type="number"]:focus {
                    border-color: rgb(45, 61, 138);
                    outline: none;
                }
                .number-input input[type="number"]::-webkit-outer-spin-button,
                .number-input input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            `}</style>
        </div>
    );
};

export default NumberInput;
