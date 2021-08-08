import { NextPage } from "next";
import Logo from "./Logo";
import LogoSmall from "./LogoSmall";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import SearchBar from "./SearchBar";
import { useState, MouseEventHandler } from "react";
import BurgerIcon from "./BurgerIcon";
import CartSidebar from "./CartSidebar";
const Header: NextPage = () => {
    const [leftNavActive, setLeftNavActive] = useState<boolean>(false);
    const [cartSideBarActive, setCartSideBarActive] = useState<boolean>(false)

    const toggleCartSidebar: MouseEventHandler = (e) => {
        console.log("Afzal")
        setCartSideBarActive(!cartSideBarActive)
    }
    const toggleLeftNav: MouseEventHandler = (e) => {
        setLeftNavActive((s) => !s);
    };
    return (
        <div className="container flex">
            <BurgerIcon toggleLeftNav={toggleLeftNav} />
            <Logo />
            <LogoSmall />
            <NavLeft toggleLeftNav={toggleLeftNav} leftNavActive={leftNavActive} />
            <div className="ml-auto hidden md:block">
                <SearchBar />
            </div>
            <NavRight toggleCartSidebar={toggleCartSidebar}/>
            <CartSidebar toggleCartSidebar={toggleCartSidebar} cartSidebarActive={cartSideBarActive}/>
        </div>
    );
};

export default Header;
