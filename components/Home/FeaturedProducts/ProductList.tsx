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
        <div className="flex flex-shrink-0 space-x-4" style={{width: "1560px"}}>
            {renderProductList}
        </div>
    )
}

export default ProductList