import { NextPage } from 'next'
import { FeaturedProductType } from '../../../shared/types'
import ProductItem from './ProductItem';


interface IProps {
    featuredProducts: FeaturedProductType[]
}
const ProductList: NextPage<IProps> = ({ featuredProducts }) => {
    const renderProductList = featuredProducts?.map(x => {
        return <ProductItem key={x.uuid} item={x}/>
    })
    return (
        <div>
            {renderProductList}
        </div>
    )
}

export default ProductList