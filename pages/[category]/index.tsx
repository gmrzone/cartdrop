import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import MainLayout from "../../components/common/MainLayout";
import MetaHead from "../../components/common/Head";
import axios from "axios";
import { BACKEND_URL } from "../../utils";
import { CategoryType, SubcategoryType, ProductVariationType, BrandsTypes, PaginatedProductVariationType } from "../../shared/types";
import TopProducts from "../../components/categories/topProducts";
import { useRouter } from "next/router";
import CategoryPanel from "../../components/common/CategortPanelNew";
import ProductList from "../../components/categories/ProductList";
import ProductListContext from "../../context/ProductListContext";

interface CategoryListProps {
    subcategories: SubcategoryType[];
    topProducts: ProductVariationType[];
    categories: CategoryType[];
    brands: BrandsTypes[];
    paginatedProduct: PaginatedProductVariationType;
}

const CategoryList: NextPage<CategoryListProps> = ({ subcategories, topProducts, categories, brands, paginatedProduct }) => {
    const router = useRouter();
    const activeCategory = String(router.query["category"]);
    const description: string =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";

    return (
        <>
            <MetaHead
                title={`Best ${activeCategory}`}
                description={description}
                currentUrl="/contact"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <MainLayout>
                <CategoryPanel categories={categories} activeCategory={activeCategory} />
                <TopProducts category={activeCategory} topProducts={topProducts} />
                {/* Adding Context to pass brand to nested component */}
                <ProductListContext.Provider value={{ brands, subcategories, paginatedProduct }}>
                    <ProductList />
                </ProductListContext.Provider>
            </MainLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentCategory = params!.category;
    const response = await axios.get(BACKEND_URL + `/core/subcategory/${currentCategory}/`);
    const response1 = await axios.get(BACKEND_URL + `/products/${currentCategory}/top/`);
    const response2 = await axios.get(BACKEND_URL + "/core/categories/");
    const response3 = await axios.get(BACKEND_URL + `/core/brand/${currentCategory}/`);
    const response4 = await axios.get(BACKEND_URL + `/products/${currentCategory}/?page=1`);

    const subcategories: SubcategoryType[] = response.data;
    const topProducts: ProductVariationType[] = response1.data;
    const categories: CategoryType[] = response2.data;
    const brands: BrandsTypes[] = response3.data;
    const paginatedProduct: PaginatedProductVariationType = response4.data;
    return {
        props: {
            subcategories,
            topProducts,
            categories,
            brands,
            paginatedProduct,
        },
        revalidate: 43200, // 12 Hours
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(BACKEND_URL + "/core/categories/");
    const categorys: CategoryType[] = response.data;

    const paths = categorys.map((x) => {
        return { params: { category: x.slug } };
    });
    return {
        paths,
        fallback: false,
    };
};

export default CategoryList;
