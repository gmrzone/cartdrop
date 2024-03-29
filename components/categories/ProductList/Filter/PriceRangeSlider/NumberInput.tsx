import { NextPage } from 'next';
import { FormEventHandler } from 'react';

type NumberInputProps = {
    currentValue: number;
    onChange: FormEventHandler<HTMLInputElement>;
    type: string;
};

// TODO : Fix This component later (change input type number to select dropdown with different prices)
const NumberInput: NextPage<NumberInputProps> = ({ currentValue, onChange, type }) => {
    return (
        <div className="font-roboto whitespace-nowrap text-main number-input">
            &#8377;{' '}
            <input
                type="number"
                value={currentValue}
                className="border w-[100px] ipad:w-[120px] h-[40px] rounded-md text-center text-md ipad:text-lg"
                onChange={onChange}
                data-type={type}
                disabled
            />
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx>{`
                .number-input input[type='number'] {
                    -moz-appearance: none;
                }

                .number-input input[type='number']:focus {
                    border-color: rgb(45, 61, 138);
                    outline: none;
                }
                .number-input input[type='number']::-webkit-outer-spin-button,
                .number-input input[type='number']::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            `}</style>
        </div>
    );
};

export default NumberInput;
