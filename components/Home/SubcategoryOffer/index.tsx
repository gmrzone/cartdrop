import { NextPage } from 'next'
import Section from '../../common/Section'
import { SubcategoryOfferType } from '../../../shared/types'

interface Props {
    subcategoryOffers: SubcategoryOfferType[]
}
const SubcategoryOffer: NextPage<Props> = ({ subcategoryOffers }) => {
    return (
        <Section title="OFFERS">
            
        </Section>
    )
}

export default SubcategoryOffer