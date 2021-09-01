import { NextPage } from 'next';
import { SubcategoryOfferType } from '../../../shared/types';
import SliderItem from './SliderItem'

interface Props {
    subcategoryOffers: SubcategoryOfferType[]
}

const Slider: NextPage<Props> = ({ subcategoryOffers }) => {
    const renderSliderItems = subcategoryOffers.map(x => {
        return <SliderItem key={x.uuid} subcategoryOfferItem={x}/>
    })
    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 slider-inner-container">
                {renderSliderItems}
            </div>
            <style>{`
                .slider-inner-container {
                    width: calc(var(--subcategory-item-width) * ${subcategoryOffers.length})
                }
            `}</style>
        </div>
    )
}

export default Slider