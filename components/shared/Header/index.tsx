import { NextPage } from "next";
import Logo from "./Logo";
import NavLeft from "./NavLeft";
const Header: NextPage = () => {
    return (
        <div className="container flex">
            <Logo />
            <NavLeft />
        </div>
    );
};

export default Header;
