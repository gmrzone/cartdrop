import MainLayout from '../components/common/MainLayout';
import MetaHead from '../components/common/Head';
import { NextPage, GetStaticProps } from 'next';
import Hero from '../components/Home/HeroSection/Hero';
import { BACKEND_URL } from '../utils';
import axios from 'axios';
import { CategoryType, ProductVariationType, SubcategoryOfferType } from '../shared/types';
import TodaysDeal from '../components/Home/TodeysDeal';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import SubcategoryOffer from '../components/Home/SubcategoryOffer';
import ProductHistory from '../components/Home/ProductHistory';
import CategoryPanel from '../components/common/CategoryPanel';

export const getStaticProps: GetStaticProps = async () => {
    const categories = await axios.get(BACKEND_URL + '/core/categories/');
    // const categories = await axios.get('http://localhost:5000/api/categories');
    const featuredProducts = await axios.get(BACKEND_URL + '/products/featured/');
    const subcategoryOffers = await axios.get(BACKEND_URL + '/core/offers/');
    console.log({ subcategoryOffers });
    // const subcategoryOffers = await axios.get('http://localhost:5000/api/subcategories/offers');

    return {
        props: {
            categories: categories.data,
            featuredProducts: featuredProducts.data,
            subcategoryOffers: subcategoryOffers.data.results,
        },
    };
};

type HomeProps = {
    categories: CategoryType[];
    featuredProducts: ProductVariationType[];
    subcategoryOffers: SubcategoryOfferType[];
};

const Home: NextPage<HomeProps> = ({ categories, featuredProducts, subcategoryOffers }) => {
    const description =
        'CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.';
    return (
        <>
            <MetaHead
                title="Home"
                description={description}
                currentUrl="/"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <MainLayout>
                <CategoryPanel categories={categories} activeCategory={null} />
                <Hero />
                <TodaysDeal />
                <FeaturedProducts featuredProducts={featuredProducts} />
                <SubcategoryOffer subcategoryOffers={subcategoryOffers} />
                <ProductHistory historyProducts={featuredProducts} />
            </MainLayout>
        </>
    );
};

export default Home;
