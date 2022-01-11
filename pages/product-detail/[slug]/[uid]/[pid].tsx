import axios from 'axios';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ProductVariationType } from '../../../../shared/types';
import { BACKEND_URL } from "../../../../utils";


type ProductDetailPropsType = {
    productDetail: ProductVariationType
}

type StaticPathParams = {
    uid: string;
    pid: string;
    slug: string;
}

const ProductDetail: NextPage<ProductDetailPropsType> = ({ productDetail }) => {
    console.log(productDetail)
    return (
        <div>
            <h1>{productDetail.product.name}</h1>
        </div>
    )
}

export default ProductDetail

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { uid, pid, slug } = params as StaticPathParams
    console.log(uid, pid, slug)
    const response = await axios.get(`${BACKEND_URL}/products/${slug}/${uid}/${pid}/`)
    const productDetail: ProductVariationType = response.data

    return {
        props: {
            productDetail
        },
        revalidate: 43200, // 12 Hours
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`${BACKEND_URL}/products/featured/`)
    const products: ProductVariationType[] = response.data
    const paths = products.map(x => {
        return {
            params: {uid: x.uuid, pid: x.pid, slug: x.product.slug}
        }
    })
    return {
        paths,
        fallback: "blocking"   // Blocking means the all new path will be erver side rendered
    }
}