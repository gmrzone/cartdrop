import { NextPage } from "next";
import { navLeftData } from "./data";
import Image from 'next/image';
import DefaultProfile from '../../../public/default_profilepic.png'
import { MouseEventHandler } from 'react'

type LeftNavProps = {
    toggleLeftNav: MouseEventHandler<HTMLDivElement>,
    leftNavActive: boolean
}
const NavLeft: NextPage<LeftNavProps> = ({ toggleLeftNav, leftNavActive }) => {
    const renderData = navLeftData.map((x) => {
        return (
            <li key={x.value} className="text-main px-4 py-2 font-bold text-lg ipad:px-0 ipad:py-0">
                {x.name}
            </li>
        );
    });
    return (
        <nav className={`left-0 w-80 ml-auto md:ml-0 z-50 shadow-drop-down transition-transform duration-300 ${leftNavActive ? "translate-x-0" : "-translate-x-full"} bg-white h-screen top-0 absolute desktop:self-center desktop:items-center desktop:translate-x-0 desktop:ml-20 desktop:static desktop:h-auto desktop:w-auto desktop:shadow-none`}>
            <div className="bg-secondary p-4 relative flex items-center space-x-4 desktop:hidden">
                <Image src={DefaultProfile} width={40} height={40} alt="default-profile" className="rounded-full px-4"/>
                <p className="text-white font-bold text-lg">Login & Signup</p>
                <i className="fas fa-times absolute right-5 text-lg text-white cursor-pointer" onClick={toggleLeftNav}/>
            </div>
            <ul className="flex flex-col desktop:space-x-8 desktop:flex-row desktop:p-0 mt-1 desktop:mt-0">{renderData}</ul>
        </nav>
    );
};

export default NavLeft;
