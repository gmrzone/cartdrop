import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/common/MainLayout";
import MetaHead from "../components/common/Head";

export default function Home() {
    const description =
        "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";
    return (
        <MainLayout>
            <>
                <MetaHead
                    title="Home"
                    description={description}
                    currentUrl="/"
                    keywords="ecommerce, opensource, django, django rest framework, redis, postgresql, nextjs, typescript, tailwing, best, ecommerce, platform, india, 2021, fullstack"
                />
                <div>
                    <div>
                        <h1>heading 1</h1>
                        <h1>heading 2</h1>
                        <h1>heading 3</h1>
                        <h1>heading 4</h1>
                        <h1>heading 5</h1>
                        <h1>heading 6</h1>
                    </div>
                    <div>
                        <p>Paragraph</p>
                        <a href="">Link</a>
                        <span>Span</span>
                    </div>
                    <div>
                        <h1>Inputs</h1>
                    </div>
                </div>
            </>
        </MainLayout>
    );
}
