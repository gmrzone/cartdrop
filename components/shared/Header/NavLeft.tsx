import { NextPage } from "next";
import { navLeftData } from "./data";

const NavLeft: NextPage = () => {
    const renderData = navLeftData.map((x) => {
        return (
            <li key={x.value} className="text-main font-bold text-md">
                {x.name}
            </li>
        );
    });
    return (
        <nav className="flex items-center ml-20">
            <ul className="flex space-x-8">{renderData}</ul>
        </nav>
    );
};

export default NavLeft;
