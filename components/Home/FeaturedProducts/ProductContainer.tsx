import { NextPage } from 'next'
import ProductList from './ProductList'
const ProductContainer: NextPage = () => {
    return (
        <div className="">
            <div>
                <ProductList />
            </div>
        </div>
    )
}

export default ProductContainer