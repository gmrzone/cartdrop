import { NextPage } from "next";
import Dynamic from "next/dynamic";
import Logo from "./Logo";
import LogoSmall from "./LogoSmall";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import SearchBar from "./SearchBar";
import { useState, MouseEventHandler, useRef, useEffect } from "react";
import BurgerIcon from "./BurgerIcon";
import CartSidebar from "./CartSidebar";
import Backdrop from "../../common/Backdrop";

const Header: NextPage = () => {
    const backdropRef = useRef<null | HTMLDivElement>(null);
    const [leftNavActive, setLeftNavActive] = useState<boolean>(false);
    const [cartSideBarActive, setCartSideBarActive] = useState<boolean>(false);

    const toggleCartSidebar: MouseEventHandler = (e) => {
        setCartSideBarActive(!cartSideBarActive);
    };
    const toggleLeftNav: MouseEventHandler = (e) => {
        setLeftNavActive((s) => !s);
    };
    const showBackDrop = () => {
        if (backdropRef.current) {
            backdropRef.current.classList.remove("opacity-0");
            backdropRef.current.classList.add("opacity-100");
        }
    };
    const hideBackdrop = () => {
        if (backdropRef.current) {
            backdropRef.current.classList.add("hidden");
        }
    };
    useEffect(() => {
        if (backdropRef.current) {
            if (leftNavActive || cartSideBarActive) {
                backdropRef.current.classList.remove("hidden");
                setTimeout(showBackDrop, 20);
            } else {
                backdropRef.current.classList.remove("opacity-100");
                backdropRef.current.classList.add("opacity-0");
                setTimeout(hideBackdrop, 300);
            }
        }
    }, [leftNavActive, cartSideBarActive]);

    const backdropClick = () => {
        if (leftNavActive) {
            setLeftNavActive(false);
        }
        if (cartSideBarActive) {
            setCartSideBarActive(false);
        }
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
            <NavRight toggleCartSidebar={toggleCartSidebar} />
            <CartSidebar toggleCartSidebar={toggleCartSidebar} cartSidebarActive={cartSideBarActive} />
            <Backdrop backdropRef={backdropRef} onClick={backdropClick} />
        </div>
    );
};

export default Header;
