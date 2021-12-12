import { NextPage } from 'next';
import { useEffect, useRef } from 'react';

type FilterProps = {
    closeFilterSlider: () => void;
    filterSliderActive: boolean;
}

const Filter: NextPage<FilterProps> = ({ closeFilterSlider, filterSliderActive }) => {
    const slider = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (slider.current){
            if (filterSliderActive){
                slider.current.classList.remove("-translate-x-full")
                slider.current.classList.add("translate-x-0")
            }
            else{
                slider.current.classList.remove("translate-x-0")
                slider.current.classList.add("-translate-x-full")
            }
        }
    }, [filterSliderActive])

    return (
        <div className="h-screen fixed w-full max-w-sm bg-white top-0 left-0 z-[100] shadow-drop-down transition-transform duration-300 -translate-x-full" ref={slider}>
            <div className="p-3 flex items-center justify-between shadow-g-in">
                <div className="pl-2">
                    <i className="far fa-filter text-main text-2xl ipad:text-3xl" />
                </div>
                <div className="text-lg mobile-lg:text-xl ipad:text-2xl text-main font-bold">FILTERS</div>
                <div className="pr-2" onClick={closeFilterSlider}>
                    <i className="fal fa-times text-3xl text-main cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Filter