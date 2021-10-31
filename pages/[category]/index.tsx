import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import MainLayout from "../../components/common/MainLayout";
import MetaHead from "../../components/common/Head";
import axios from "axios";
import { BACKEND_URL } from "../../utils";
import { CategoryType, SubcategoryType, ProductVariationType } from "../../shared/types";

interface CategoryListProps {
    subcategories: SubcategoryType[];
    topProducts: ProductVariationType[];
}

const CategoryList: NextPage<CategoryListProps> = ({ subcategories, topProducts }) => {
    console.log(subcategories);
    console.log(topProducts);
    const description: string =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";

    return (
        <>
            <MetaHead
                title="Contact us"
                description={description}
                currentUrl="/contact"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <MainLayout>
                <h1>Afzal</h1>
            </MainLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const currentCategory = params!.category;
    const response = await axios.get(BACKEND_URL + `/core/subcategory/${currentCategory}/`);
    const response1 = await axios.get(BACKEND_URL + `/products/${currentCategory}/top/`);

    const subcategories: SubcategoryType[] = response.data;
    const topProducts: ProductVariationType[] = response1.data;
    return {
        props: {
            subcategories,
            topProducts,
        },
        revalidate: 86400, // 1 day
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
