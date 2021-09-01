import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";
import { NextPage } from "next";
import Hero from "../components/Home/HeroSection/Hero";
import { BACKEND_URL } from "../utils";
import axios from "axios";
import { CategoryType, FeaturedProductType, SubcategoryOfferType } from "../shared/types";
import TodaysDeal from "../components/Home/TodeysDeal";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import SubcategoryOffer from "../components/Home/SubcategoryOffer";

export const getStaticProps = async () => {
    const categories = await axios.get(BACKEND_URL + "/core/categories/");
    const featuredProducts = await axios.get(BACKEND_URL + "/products/featured/");
    const subcategoryOffers = await axios.get(BACKEND_URL + "/core/offers/");

    return {
        props: {
            categories: categories.data,
            featuredProducts: featuredProducts.data,
            subcategoryOffers: subcategoryOffers.data
        },
    };
};

type HomeProps = {
    categories: CategoryType[];
    featuredProducts: FeaturedProductType[];
    subcategoryOffers: SubcategoryOfferType[];
};

const Home: NextPage<HomeProps> = ({ categories, featuredProducts, subcategoryOffers }) => {
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
                <TodaysDeal />
                <FeaturedProducts featuredProducts={featuredProducts} />
                <SubcategoryOffer subcategoryOffers={subcategoryOffers}/>
                <TodaysDeal />
            </MainLayout>
        </>
    );
};

export default Home;
