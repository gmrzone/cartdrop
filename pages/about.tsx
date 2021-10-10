import { NextPage } from "next";
import MetaHead from "../components/common/Head";
import MainLayout from "../components/common/MainLayout";
import AboutMain from "../components/about";
const Contact: NextPage = () => {
    const description: string =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";
    return (
        <>
            <MetaHead
                title="About us"
                description={description}
                currentUrl="/about"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <MainLayout>
                <AboutMain />
            </MainLayout>
        </>
    );
};

export default Contact;
