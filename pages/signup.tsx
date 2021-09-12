import { NextPage } from "next";
import HeadMeta from "../components/common/Head";
import SecondaryLayout from "../components/common/SecondaryLayout";
import SignupMain from '../components/Signup'

const Signup: NextPage = () => {
    const description: string =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";
    return (
        <>
            <HeadMeta
                title="signup"
                description={description}
                currentUrl="/signup/"
                keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
            />
            <SecondaryLayout>
                <SignupMain />
            </SecondaryLayout>
        </>
    );
};

export default Signup;
