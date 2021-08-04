import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";
import { NextPage } from 'next';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';

const Home: NextPage = () => {
    const description:string =
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
                    <div className="text-main">
                        <h1>heading 1</h1>
                        <h2>heading 2</h2>
                        <h3>heading 3</h3>
                        <h4>heading 4</h4>
                        <h5>heading 5</h5>
                        <h6>heading 6</h6>
                    </div>
                    <div>
                        <p>Paragraph</p>
                        <a href="">Link</a>
                        <br />
                        <span>Span</span>
                    </div>
                    <br />
                    <div className="pl-5">
                        <h1>Inputs</h1>
                        <div className="pt-6 space-y-6 w-96">
                            <Input type="text" label="NAME"/>
                            <Input type="email" label="EMAIL"/>
                            <TextArea type="textarea" label="COMMENTS" />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default Home
