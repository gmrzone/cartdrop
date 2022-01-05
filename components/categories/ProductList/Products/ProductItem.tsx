import { ProductVariationType } from "../../../../shared/types";
import { NextPage } from "next";
import Image from "next/image";
type ProductItemProps = {
    productDetail: ProductVariationType;
};
const ProductItem: NextPage<ProductItemProps> = ({ productDetail }) => {
    console.log(productDetail);
    return (
        <div className="p-6 border-solid border-gray-200 border cursor-pointer rounded-md ipad:mx-3 my-4">
            <div className="relative w-64 h-44">
                <Image src={productDetail.images.filter((x) => x.primary)[0].image} alt="product_image" layout="fill" objectFit="contain" />
            </div>
            <div>{productDetail.product.name}</div>
            <div>{productDetail.product.subcategory.name}</div>
            <div className="font-roboto">&#8377;{productDetail.price}</div>
        </div>
    );
};

export default ProductItem;
