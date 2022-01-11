import { ProductVariationType } from "../../../../shared/types";
import { NextPage } from "next";
import Image from "next/image";
import SecondaryButtonLink from "../../../common/buttons/SmallButtonLink";
import StarRatingStatic from "../../../common/StarRating/Static";
type ProductItemProps = {
    productDetail: ProductVariationType;
};
const ProductItem: NextPage<ProductItemProps> = ({ productDetail }) => {
    return (
        <div className="p-6 border-solid border-gray-200 border cursor-pointer rounded-md ipad:mx-3 my-4">
            <div className="relative w-64 h-56 ipad:w-60 ipad:h-48 desktop:w-72 desktop:h-64 mx-auto">
                <Image src={productDetail.images.filter((x) => x.primary)[0].image} alt="product_image" layout="fill" objectFit="contain" />
            </div>
            <div className="mt-4 relative">
                <div className="text-xl h-14">
                    {productDetail.product.name.length <= 32 ? productDetail.product.name : productDetail.product.name.slice(0, 32) + "..."}
                </div>
                <div className="text-secondary">{productDetail.product.subcategory.name}</div>
                <div className="font-roboto text-2xl text-slate-600 mt-2 mb-2">&#8377;{productDetail.price}</div>
                <StarRatingStatic rating={3.2} />
                <div className="absolute right-0 bottom-1">
                    <SecondaryButtonLink text="View" to="/" />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
