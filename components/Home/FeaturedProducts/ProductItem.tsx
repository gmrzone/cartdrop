import { NextPage } from 'next'
import { FeaturedProductType } from '../../../shared/types'

interface IProps {
    item: FeaturedProductType;
}
const ProductItem: NextPage<IProps> = ({ item }) => {
    return (
        <div>
            <div>
                <p>{item.product.name}</p>
            </div>
        </div>
    )
}

export default ProductItem