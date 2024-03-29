import ProfileIcon from './Icons/Profile';
import CartIcon from './Icons/Cart';
import { MouseEventHandler, useEffect, useState } from 'react';
import { NextPage } from 'next';
import ProfileDropdown from './ProfileDropDown';
type NavBarProps = {
    toggleCartSidebar: MouseEventHandler<HTMLDivElement>;
};
const NavBar: NextPage<NavBarProps> = ({ toggleCartSidebar }) => {
    const [profileDropDown, setProfileDropdown] = useState<boolean>(false);
    useEffect(() => {
        const clickOutside = () => {
            if (profileDropDown) {
                setProfileDropdown(false);
            }
        };
        document.body.addEventListener('click', clickOutside);
        return () => {
            document.body.removeEventListener('click', clickOutside);
        };
    }, [profileDropDown]);

    const profileDropDownHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        setProfileDropdown((s) => !s);
    };

    return (
        <nav className="flex items-center ml-auto md:ml-0" title="nav-right">
            <ul className="flex space-x-4 mobile-sm:space-x-8">
                <li className="relative">
                    <ProfileIcon profileDropdownHandler={profileDropDownHandler} />
                    <ProfileDropdown profileDropdownActive={profileDropDown} />
                </li>
                <li>
                    <CartIcon classes="w-7 h-7 mobile-sm:w-8 mobile-sm:h-8" toggleCartSidebar={toggleCartSidebar} title="cart-icon" />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
