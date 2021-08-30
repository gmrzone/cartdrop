import { NextPage } from "next";
import { FeaturedProductType } from "../../../shared/types";
import Image from "next/image";
interface IProps {
    item: FeaturedProductType;
    index: number
}
const ProductItem: NextPage<IProps> = ({ item, index }) => {
    console.log(item)
    const generateName = item.product.name + " (" + (item.color ? item.color.name : "") + (item.laptop_variant ? ", " + item.laptop_variant.name : "") + (item.mobile_variant ? ", " + item.mobile_variant.name : "") + (item.ac_capacity_variant ? ", " + item.ac_capacity_variant.capacity : "") + (item.ac_star_variant ? ", " + item.ac_star_variant.star : "") + (item.book_variation ? ", " + item.book_variation.name : "") + (item.juices_quantity ? ", " + item.juices_quantity  : "") + (item.refrigerator_capacity ? ", " + item.refrigerator_capacity : "") + (item.size ? ", " + item.size.code : "") + (item.tv_variant ? ", " + item.tv_variant.display_size : "") + ")"
    // const generateName = item.product.name + `(${item.color ? item.color.name : "" + item.ac_capacity_variant ? ", " + item.ac_capacity_variant?.capacity : "" + item.ac_star_variant ?  ", " + item.ac_star_variant?.star : "" + item.book_variation ? ", " +item.book_variation?.name : "" +  item.juices_quantity ? ", " + item.juices_quantity : "" + item.laptop_variant ? ", " + item.laptop_variant?.name : "" + item.mobile_variant ? ", " + item.mobile_variant?.name : "" + item.refrigerator_capacity ? ", " + item.refrigerator_capacity : "" + item.size && ", " + item.size?.name + item.tv_variant && ", " + item.tv_variant?.display_size})`
    return (
        <div className={`item-main block border border-solid border-gray-200 rounded-md cursor-pointer relative overflow-hidden ${index > 3 && "hidden ipad:block"}`}>
            <div className="absolute -right-11 top-4 z-10 rotate-45 text-very-small ipad:text-xs font-black bg-main text-white px-10 py-1">
                {item.discount}% OFF
            </div>
            <div className="p-2">
                <div className="ipad:w-full p-2">
                    <div className="relative w-24 h-24 ipad:w-64 ipad:h-48 mx-auto">
                        <Image
                            src={item.images.filter((x) => x.primary === true)[0]?.image}
                            alt={item.pid}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="text-center h-12 flex flex-col justify-center items-center">
                    <p className="text-xs sm:text-sm desktop:text-lg">
                        {generateName === generateName.slice(0, 35) ? generateName : generateName.slice(0, 35) + "..."}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-secondary font-semibold text-xs sm:text-sm desktop:text-lg">
                    <span className="font-roboto text-secondary">&#x20b9; </span>{parseInt(item.price).toLocaleString('en-IN')}
                    </p>
                </div>
            </div>
            <style>{`
            
                .item-main {
                    width: calc(50% - 0.25rem);
                }
                @media (min-width: 640px){
                    .item-main {
                        width: calc(50% - 0.5rem);
                    }
                }
                @media (min-width: 768px){
                    .item-main {
                        width: calc(50% - 0.75rem);
                    }
                }
                @media (min-width: 992px){
                    .item-main {
                        width: 300px
                    }
    
                }
            `}</style>
        </div>
    );
};

export default ProductItem;
