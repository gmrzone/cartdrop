import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";
import { NextPage } from "next";
import Input from "../components/common/inputs/Input";
import TextArea from "../components/common/inputs/TextArea";
import Password from "../components/common/inputs/Password";
import MainButton from "../components/common/buttons/MainButton";
import SecondaryButton from '../components/common/buttons/SecondaryButton';
import ExtraButton from "../components/common/buttons/ExtraButton";
import CustomSelect from '../components/common/inputs/CustomSelect'

const Home: NextPage = () => {
    const selectOptions = [
        {
            label: "Option one",
            value: "option-one"
        },
        {
            label: "Option two",
            value: "option-two"
        },
        {
            label: "Option Three",
            value: "option-three"
        },
        {
            label: "Option Four",
            value: "option-four"
        }
    ]
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
                <div>
                    <div className="text-main pl-5">
                        <h1>heading 1</h1>
                        <h2>heading 2</h2>
                        <h3>heading 3</h3>
                        <h4>heading 4</h4>
                        <h5>heading 5</h5>
                        <h6>heading 6</h6>
                    </div>
                    <div className="pl-5">
                        <p>Paragraph</p>
                        <a href="">Link</a>
                        <br />
                        <span>Span</span>
                    </div>
                    <br />
                    <div className="pl-5">
                        <h1>Inputs</h1>
                        <div className="pt-6 space-y-6 w-96">
                            <Input type="text" label="NAME" />
                            <Input type="email" label="EMAIL" />
                            <Password type="password" label="PASSWORD" />
                            <TextArea type="textarea" label="COMMENTS" />
                            <CustomSelect options={selectOptions} initialLabel={{value: "select-options", label: "SELECT OPTIONS"}}/>
                        </div>
                    </div>
                    <div className="pt-6 w-96 mb-11 pl-5">
                        <h1>Buttons</h1>
                        <div className="space-y-6">
                            <MainButton text="Main Button" /><br />
                            <MainButton text="Disabled" disable={true} /><br />
                            <MainButton text="With icon" icon="far fa-alarm-clock"/><br />
                            <MainButton text="Loading" loading={true}/><br />
                            <SecondaryButton text="Secondary Button"/><br />
                            <SecondaryButton text="Disabled" disable={true} /><br />
                            <SecondaryButton text="With Icon" icon="far fa-alien"/><br />
                            <SecondaryButton text="Loading" loading={true}/><br />
                            <ExtraButton text="Extra Button" /> <br />
                            <ExtraButton text="Disabled" disable={true} /> <br />
                            <ExtraButton text="With Icon" icon="far fa-atom" /> <br />
                            <ExtraButton text="Loading" loading={true} /> <br />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Home;
