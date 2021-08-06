import { NextPage } from "next";
import { navLeftData } from "./data";
import Image from 'next/image'

const NavLeft: NextPage = () => {
    const renderData = navLeftData.map((x) => {
        return (
            <li key={x.value} className="text-main font-bold text-lg">
                {x.name}
            </li>
        );
    });
    return (
        <nav className="left-0 w-80 z-50 shadow-drop-down bg-white h-screen top-0 absolute ipad:self-center ipad:items-center ipad:ml-20 ipad:static ipad:h-auto ipad:w-auto ipad:shadow-none">
            <div className="block ipad:hidden bg-secondary p-4">
                <h4 className="text-white">Login & Signup</h4>
            </div>
            <ul className="flex flex-col items-center ipad:space-x-8 ipad:flex-row">{renderData}</ul>
        </nav>
    );
};

export default NavLeft;
