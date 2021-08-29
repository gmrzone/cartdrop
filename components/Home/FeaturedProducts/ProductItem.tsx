import { NextPage } from 'next'
import { FeaturedProductType } from '../../../shared/types'
import Image from 'next/image'
interface IProps {
    item: FeaturedProductType;
}
const ProductItem: NextPage<IProps> = ({ item }) => {
    return (
        <div className="border border-solid border-gray-200 rounded-md cursor-pointer relative overflow-hidden" style={{width: "300px"}}>
            <div className="absolute -right-10 top-8 z-10 rotate-45 text-xs font-black bg-main text-white px-10 py-1">
                {item.discount}% OFF
            </div>
            <div className="p-2">
                <div className="w-full p-2">
                    <div className="relative w-64 h-48">
                        <Image src={item.images.filter(x => x.primary === true)[0]?.image} alt={item.pid} layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className="text-center h-12">
                    <p className="min-h-full">{item.product.name === item.product.name.slice(0, 45) ? item.product.name : item.product.name.slice(0, 45) + "..."}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem