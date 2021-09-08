import { NextPage } from "next";
import { SubcategoryOfferType } from "../../../shared/types";
import Image from "next/image";
import { MutableRefObject } from "react";
interface Props {
    subcategoryOfferItem: SubcategoryOfferType;
    sliderItemRef: MutableRefObject<HTMLDivElement | null>;
}
const SliderItem: NextPage<Props> = ({ subcategoryOfferItem, sliderItemRef }) => {
    const maxDiscount: number = Math.max(...subcategoryOfferItem.coupons.map((x) => x.discount));
    const renderImages = subcategoryOfferItem.subcategory_images.map((x, i) => {
        return (
            <div
                key={i}
                className="relative w-28 h-28 sm:w-32 sm:h-32 desktop:w-40 desktop:h-40 desktop-big:w-32 desktop-big:h-32 desktop-large:w-36 desktop-large:h-36 bg-white rounded-lg p-4">
                <Image src={x.image} alt="subcategory-image" layout="fill" objectFit="contain" />
            </div>
        );
    });

    return (
        <div className="slider-item flex flex-col bg-main rounded-lg p-3 cursor-pointer" ref={sliderItemRef}>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 justify-items-center">{renderImages}</div>
            <div className="mt-auto ipad:pt-4">
                <p className="text-center text-white font-semibold">
                    Upto {maxDiscount}% Off ON {subcategoryOfferItem.name}
                </p>
            </div>
            <style>{`
                .slider-item {
                    width: var(--subcategory-item-width);
                }
            `}</style>
        </div>
    );
};

export default SliderItem;
