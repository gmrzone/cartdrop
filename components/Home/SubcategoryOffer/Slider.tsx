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
        <div>
            <div className="flex flex-shrink-0 space-x-4 slider-inner-container">
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