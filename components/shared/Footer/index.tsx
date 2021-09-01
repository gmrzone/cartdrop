import { NextPage } from 'next'
import { navLeftData } from '../Header/data'
import Link from 'next/link';
const Footer: NextPage = () => {
    const footerData = [
        {
            id: 1,
            name: "Login",
            link: "/login/"
        },
        {
            id: 2,
            name: "Signup",
            link: "/signup/"
        },
        {
            id: 3,
            name: "Become a seller",
            link: "/become-a-seller/"
        },
        {
            id: 4,
            name: "Blog",
            link: "/blog/"
        },
        {
            id: 5,
            name: "Featured Products",
            link: "/featured/"
        },
        {
            id: 6,
            name: "Careers",
            link: "/careers/"
        },
        {
            id: 7,
            name: "About",
            link: "/about/"
        },
        {
            id: 8,
            name: "Contact",
            link: "/contact/"
        },
        {
            id: 9,
            name: "Privacy",
            link: "/privacy/"
        },
        {
            id: 10,
            name: "Terms",
            link: "/terms/"
        },
    ]

    const renderFooterData = footerData.map(x => {
        return (
            <li key={x.id} className="inline-block">
                <Link href={x.link}>
                    <a className="text-white hover:text-blue-200 font-semibold">{x.name}</a>
                </Link>
            </li>
        )
    })
    return (
        <footer className="bg-main">
            <div className="container">
                <div className="py-8">
                    <h1 className="text-center"><span className="text-black">CART</span><span className="text-white">DROP</span></h1>
                </div>
                <div>
                    <ul className="text-center space-x-10">
                        {renderFooterData}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer