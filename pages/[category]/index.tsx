import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import MainLayout from "../../components/common/MainLayout";
import MetaHead from "../../components/common/Head";
import { useRouter } from "next/router";
import axios from "axios";
import { BACKEND_URL } from "../../utils";
import { CategoryType, SubcategoryType } from "../../shared/types";

interface CategoryListProps {
    subcategories: SubcategoryType[];
}

const CategoryList: NextPage<CategoryListProps> = ({ subcategories }) => {
    console.log(subcategories);
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
    const subcategories: SubcategoryType[] = response.data;

    return {
        props: {
            subcategories,
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
