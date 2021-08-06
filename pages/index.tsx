import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";
import { NextPage } from "next";
import Input from "../components/common/inputs/Input";
import TextArea from "../components/common/inputs/TextArea";
import Password from "../components/common/inputs/Password";
import MainButton from "../components/common/buttons/MainButton";
import SecondaryButton from "../components/common/buttons/SecondaryButton";
import ExtraButton from "../components/common/buttons/ExtraButton";
import CustomSelect from "../components/common/inputs/CustomSelect";

const Home: NextPage = () => {
    const selectOptions = [
        {
            label: "Option one",
            value: "option-one",
        },
        {
            label: "Option two",
            value: "option-two",
        },
        {
            label: "Option Three",
            value: "option-three",
        },
        {
            label: "Option Four",
            value: "option-four",
        },
    ];
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
                <div>Body</div>
            </MainLayout>
        </>
    );
};

export default Home;
