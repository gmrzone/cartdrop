import { NextPage } from "next";
import Logo from "./Logo";
import NavLeft from "./NavLeft";
import NavRight from './NavRight'
import SearchBar from "./SearchBar";
import { useState, MouseEventHandler } from 'react';
import BurgerIcon from "./BurgerIcon";
const Header: NextPage = () => {

    const [leftNavActive, setLeftNavActive] = useState<boolean>(false)
    const toggleLeftNav: MouseEventHandler = (e) => {
           setLeftNavActive(s => !s)
    }
    return (
        <div className="container flex">
            <BurgerIcon toggleLeftNav={toggleLeftNav}/>
            <Logo />
            <NavLeft toggleLeftNav={toggleLeftNav} leftNavActive={leftNavActive}/>
            <div className="ml-auto hidden md:block">
                <SearchBar />
            </div>
            <NavRight />
        </div>
    );
};

export default Header;
