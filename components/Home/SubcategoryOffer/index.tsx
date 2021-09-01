import { NextPage } from 'next'
import Section from '../../common/Section'
import { SubcategoryOfferType } from '../../../shared/types'
import Slider from './Slider'

interface Props {
    subcategoryOffers: SubcategoryOfferType[]
}
const SubcategoryOffer: NextPage<Props> = ({ subcategoryOffers }) => {
    return (
        <Section title="OFFERS">
            <Slider subcategoryOffers={subcategoryOffers}/>
        </Section>
    )
}

export default SubcategoryOffer