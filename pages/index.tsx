import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";
import { NextPage } from "next";
import Hero from "../components/Home/Hero";
import { BACKEND_URL } from "../utils";
import axios from "axios";
import { Category } from "../shared/types";
import CategoryPanelNew from '../components/Home/CategortPanerNew'
export const getStaticProps = async () => {
    const categories = await axios.get(BACKEND_URL + "/core/categories/");

    return {
        props: {
            categories: categories.data,
        },
    };
};

type HomeProps = {
    categories: Category[];
};

const Home: NextPage<HomeProps> = ({ categories }) => {
    const description: string =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";
    return (
        <>
            <MetaHead
                title="Home"
                description={description}
                currentUrl="/"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <MainLayout>
                <Hero categories={categories} />
            </MainLayout>
        </>
    );
};

export default Home;
