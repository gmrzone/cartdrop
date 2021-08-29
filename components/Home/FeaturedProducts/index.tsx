import {NextPage} from 'next'
import Section from '../../common/Section'
import ProductContainer from './ProductContainer'

const FeaturedProducts: NextPage = () => {
    return (
        <Section title="FEATURED">
            <ProductContainer />
        </Section>
    )
}

export default FeaturedProducts