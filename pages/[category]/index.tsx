import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import MainLayout from '../../components/common/MainLayout'
import MetaHead from '../../components/common/Head'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    return {
        props: {

        },
        revalidate: 10
    }
}

const CategoryList: NextPage = () => {
    const description: string =
    "CARTDROP is the leading ecommerce platform in India. CARTDROP is the best open-source eCommerce shopping cart solution. Cartdrop is free, and it is the most popular Django eCommerce platform.";
    const router = useRouter()
    console.log(router)
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
    )
}


export default CategoryList