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
        <div className="flex space-x-4">
            {renderProductList}
        </div>
    )
}

export default ProductList