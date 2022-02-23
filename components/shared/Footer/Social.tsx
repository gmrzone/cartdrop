import { NextPage } from "next";
import { MouseEventHandler } from "react";

const Social: NextPage = () => {
    const socialData = [
        {
            icon: "fab fa-linkedin",
            href: "#",
        },
        {
            icon: "fab fa-instagram",
            href: "#",
        },
        {
            icon: "fab fa-github",
            href: "https://github.com/gmrzone",
        },
        {
            icon: "fab fa-twitter",
            href: "#",
        },
        {
            icon: "fab fa-youtube",
            href: "#",
        },
    ];
    const onMouseOver: MouseEventHandler<HTMLLIElement> = (e) => {
        const target = e.target as HTMLLIElement;
        target.classList.remove("scale-100");
        target.classList.add("scale-125");
    };

    const onMouseOut: MouseEventHandler<HTMLLIElement> = (e) => {
        const target = e.target as HTMLLIElement;
        target.classList.remove("scale-125");
        target.classList.add("scale-100");
    };
    const renderIcon = socialData.map((x) => {
        return (
            <li key={x.icon}>
                <a href={x.href} className="text-2xl md:text-3xl text-white">
                    <i className={x.icon + " transition-all scale-100 duration-150"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
                </a>
            </li>
        );
    });
    return (
        <ul className="flex space-x-4 md:space-x-8 justify-center my-3 md:my-4" title="footer-social">
            {renderIcon}
        </ul>
    );
};

export default Social;
