import { NextPage } from 'next';
import { SubcategoryOfferType } from '../../../shared/types';
import Image from 'next/image'
interface Props {
    subcategoryOfferItem: SubcategoryOfferType
}
const SliderItem: NextPage<Props> = ({ subcategoryOfferItem }) => {
    const maxDiscount: number = Math.max(...subcategoryOfferItem.coupons.map(x => x.discount))
    const renderImages = subcategoryOfferItem.subcategory_images.map((x, i) => {
        return (
            <div key={i} className="relative w-full h-36 bg-white rounded-lg">
                <Image src={x.image} alt="subcategory-image" layout="fill" objectFit="contain"/>
            </div>
        )
    })
    
    return (
        <div className="slider-item flex flex-col bg-main rounded-lg p-4    ">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                {renderImages}
            </div>
            <div className="mt-2">
                <p className="text-center text-white font-semibold">Upto {maxDiscount}% OFF ON {subcategoryOfferItem.name}</p>
            </div>
            <style>{`
                .slider-item {
                    width: var(--subcategory-item-width);
                }
            `}</style>
        </div>
    )
}

export default SliderItem