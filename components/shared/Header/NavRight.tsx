import ProfileIcon from "./Icons/Profile";
import CartIcon from "./Icons/Cart";
import { MouseEventHandler } from "react";
import { NextPage } from "next";
type NavBarProps = {
    toggleCartSidebar: MouseEventHandler<HTMLDivElement>;
};
const NavBar: NextPage<NavBarProps> = ({ toggleCartSidebar }) => {
    return (
        <nav className="flex items-center ml-auto md:ml-0">
            <ul className="flex space-x-4 mobile-bg:space-x-8">
                <li className="">
                    <ProfileIcon />
                </li>
                <li>
                    <CartIcon classes="w-7 h-7 mobile-bg:w-8 mobile-bg:h-8" toggleCartSidebar={toggleCartSidebar} />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
