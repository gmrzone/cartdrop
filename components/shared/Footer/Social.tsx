import { NextPage } from 'next'

const Social: NextPage = () => {
    const socialData = [
        {
            icon: "fab fa-linkedin",
            href: "#"
        },
        {
            icon: "fab fa-instagram",
            href: "#"
        },
        {
            icon: "fab fa-github",
            href: "https://github.com/gmrzone"
        },
        {
            icon: "fab fa-twitter",
            href: "#"
        },
        {
            icon: "fab fa-youtube",
            href: "#"
        }
    ]
    
    const renderIcon = socialData.map(x => {
        return (
            <li key={x.icon}>
                <a href={x.href} className="text-2xl md:text-3xl text-white">
                    <i className={x.icon}/>
                </a>
            </li>
        )
    })
    return (
        <ul className="flex space-x-4 md:space-x-8 justify-center my-3 md:my-4">
            {renderIcon}
        </ul>
    )
}

export default Social