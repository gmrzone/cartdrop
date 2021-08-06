import { NextPage } from "next";
import Logo from "./Logo";
import NavLeft from "./NavLeft";
import NavRight from './NavRight'
import SearchBar from "./SearchBar";
const Header: NextPage = () => {
    return (
        <div className="container flex">
            <Logo />
            <NavLeft />
            <SearchBar />
            <NavRight />
        </div>
    );
};

export default Header;
