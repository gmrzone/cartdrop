import axios from 'axios';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ProductVariationType } from '../../../../shared/types';
import { BACKEND_URL } from '../../../../utils';
import MetaHead from '../../../../components/common/Head';
import MainLayout from '../../../../components/common/MainLayout';
import CategoryPanel from '../../../../components/common/CategoryPanel';
import { CategoryType } from '../../../../shared/types';
import ProductDetailComponent from '../../../../components/product-detail';

type ProductDetailPropsType = {
    productDetail: ProductVariationType;
    categories: CategoryType[];
};

type StaticPathParams = {
    uid: string;
    pid: string;
    slug: string;
};

const ProductDetail: NextPage<ProductDetailPropsType> = ({ productDetail, categories }) => {
    return (
        <>
            <MetaHead title="" currentUrl="" keywords="" description="" />
            <MainLayout>
                <CategoryPanel categories={categories} activeCategory={null} />
                <div className="container mt-4 mobile-lg:mt-6 ipad:mt-10">
                    <ProductDetailComponent productDetail={productDetail} />
                </div>
            </MainLayout>
        </>
    );
};

export default ProductDetail;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { uid, pid, slug } = params as StaticPathParams;
    const response = await axios.get(`${BACKEND_URL}/products/${slug}/${uid}/${pid}/`);
    const response1 = await axios.get(`${BACKEND_URL}/core/categories/`);
    const productDetail: ProductVariationType = response.data;
    const categories: CategoryType[] = response1.data;
    return {
        props: {
            productDetail,
            categories,
        },
        revalidate: 43200, // 12 Hours
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`${BACKEND_URL}/products/featured/`);
    const products: ProductVariationType[] = response.data;
    const paths = products.map((x) => {
        return {
            params: { uid: x.uuid, pid: x.pid, slug: x.product.slug },
        };
    });
    return {
        paths,
        fallback: 'blocking', // Blocking means the all new path will be erver side rendered
    };
};
