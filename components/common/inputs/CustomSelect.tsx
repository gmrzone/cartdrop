import { NextPage } from 'next';
import { useState, MouseEventHandler } from 'react';
type options = {
    label: string,
    value: string
}

interface SelectProps {
    options: options[],
    initialLabel: options
}

const Select: NextPage<SelectProps> = ({ options, initialLabel }) => {
    const [selected, setSelected] = useState<options | null>(null)
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)
    const renderOptions = options.map(x => {
        return <div key={x.value} data-value={x.value} className="p-4 text-main bg-white hover:bg-gray-200">{x.label}</div>
    })
    const toggleDropDown: MouseEventHandler<HTMLDivElement> = (e) => {
        setDropDownOpen(!dropDownOpen)
    }
    const handleFocus = () => {
        console.log("Working")
    }
    return (
        <div className="py-3 px-3 border border-solid border-main font-poppins rounded-normal h-14 cursor-pointer relative" onClick={toggleDropDown} onFocus={handleFocus}>
            <select className="hidden">
                {options.map(x => {
                    return <option key={x.value}>{x.label}</option>
                })}
            </select>
            <i className="fas fa-sort-down absolute right-4 top-4 text-main" />
            <div className="font-medium text-xl text-main">
                <span className="text-gray-500">{initialLabel.label}</span>
                {selected && <span data-selected={selected.value}>{selected.label}</span>}
            </div>
            <div className={`absolute bg-white w-full left-0 z-20 top-20 shadow-drop-down rounded-lg ${dropDownOpen ? "block" : "hidden"}`}>
                {renderOptions}
            </div>
        </div>
    )
}

export default Select