import ProfileIcon from "./Icons/Profile";
import CartIcon from "./Icons/Cart";
import { MouseEventHandler, useEffect, useState } from "react";
import { NextPage } from "next";
import ProfileDropdown from './ProfileDropDown'
type NavBarProps = {
    toggleCartSidebar: MouseEventHandler<HTMLDivElement>;
};
const NavBar: NextPage<NavBarProps> = ({ toggleCartSidebar }) => {
    const [profileDropDown, setProfileDropdown] = useState<boolean>(false)
    useEffect(() => {
        const clickOutside = () => {
            if (profileDropDown){
                setProfileDropdown(false)
            }
        }
        document.body.addEventListener('click', clickOutside)
        return () => {
            document.body.removeEventListener('click', clickOutside)
        }
    }, [profileDropDown])

    return (
        <nav className="flex items-center ml-auto md:ml-0">
            <ul className="flex space-x-4 mobile-bg:space-x-8">
                <li className="relative">
                    <ProfileIcon setProfileDropdown={setProfileDropdown} />
                    <ProfileDropdown profileDropdownActive={profileDropDown}/>
                </li>
                <li>
                    <CartIcon classes="w-7 h-7 mobile-bg:w-8 mobile-bg:h-8" toggleCartSidebar={toggleCartSidebar} />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
