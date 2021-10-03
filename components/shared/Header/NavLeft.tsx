import { NextPage } from "next";
import { navLeftData, NavLeftData2 } from "./data";
import Image from "next/image";
import DefaultProfile from "../../../public/default_profilepic.png";
import { MouseEventHandler } from "react";
import Link from "next/link";

type LeftNavProps = {
    toggleLeftNav: MouseEventHandler<HTMLDivElement>;
    leftNavActive: boolean;
};
const NavLeft: NextPage<LeftNavProps> = ({ toggleLeftNav, leftNavActive }) => {
    const renderData = navLeftData.map((x) => {
        return (
            <li key={x.value} className="px-6 py-3 desktop:px-0 desktop:py-0">
                <Link href={x.to} passHref>
                    <a className="font-semibold text-text desktop:text-main desktop:font-bold desktop:text-base text-lg">
                        <i className={`${x.icon} desktop:hidden mr-4`} />
                        {x.name}
                    </a>
                </Link>
            </li>
        );
    });

    const renderData2 = NavLeftData2.map((x) => {
        return (
            <Link href={x.to} passHref key={x.value}>
                <li className="px-6 py-3 desktop:bg-white desktop:hover:bg-gray-200 cursor-pointer">
                    <a className="text-text font-semibold text-lg desktop:font-bold desktop:text-main desktop:text-base">
                        <i className={`${x.icon} desktop:hidden mr-4`} />
                        {x.name}
                    </a>
                </li>
            </Link>
        );
    });
    return (
        <>
            <nav
                className={`left-0 w-full max-w-xs ml-auto md:ml-0 z-50 shadow-drop-down transition-transform duration-300 ${
                    leftNavActive ? "translate-x-0" : "-translate-x-full"
                } bg-white h-screen top-0 fixed desktop:self-center desktop:items-center desktop:z-0 desktop:translate-x-0 desktop:ml-20 desktop:relative desktop:max-w-max desktop:h-auto desktop:w-auto desktop:shadow-none`}>
                <div className="bg-secondary p-4 relative flex items-center space-x-4 desktop:hidden">
                    <Image src={DefaultProfile} width={40} height={40} alt="default-profile" className="rounded-full px-4" />
                    <p className="text-white font-bold text-lg">Login & Signup</p>
                    <i className="fas fa-times absolute right-5 text-lg text-white cursor-pointer" onClick={toggleLeftNav} />
                </div>
                <ul className="flex flex-col desktop:space-x-7 desktop-big:space-x-11 desktop:flex-row desktop:p-0 mt-1 desktop:mt-0">
                    {renderData}
                    <li className="text-main font-bold text-md ipad:px-0 ipad:py-0 group">
                        <div className="hidden desktop:block cursor-pointer">
                            More
                            <i className="fas fa-caret-down text-xs ml-1" />
                        </div>
                        <ul className="static flex flex-col desktop:hidden desktop:group-hover:block desktop:absolute desktop:right-0 desktop:z-50 desktop:top-6 desktop:bg-white desktop:rounded-md desktop:shadow-drop-down overflow-hidden">
                            {renderData2}
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavLeft;
