import { NextPage } from 'next'
import { FeaturedProductType } from '../../../shared/types'
import Image from 'next/image'
interface IProps {
    item: FeaturedProductType;
}
const ProductItem: NextPage<IProps> = ({ item }) => {
    return (
        <div className="border border-solid border-gray-200 p-2 rounded-md cursor-pointer relative">
            <div className="absolute -right-10 top-8 z-10 rotate-45 text-xs font-black bg-main text-white px-10 py-1">
                {item.discount}% OFF
            </div>
            <div className="w-60 p-2">
                <div className="relative w-full h-48">
                    <Image src={item.images.filter(x => x.primary === true)[0]?.image} alt={item.pid} layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className="text-center h-12">
                <p className="min-h-full">{item.product.name === item.product.name.slice(0, 45) ? item.product.name : item.product.name.slice(0, 45) + "..."}</p>
            </div>
        </div>
    )
}

export default ProductItem