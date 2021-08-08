import React, { ReactNode } from "react";
import CartIcon from "./Icons/Cart";
import ProfileIcon from "./Icons/Profile";
import SearchBar from "./SearchBar";

type NavLeft = {
    name: string;
    value: string;
    icon: string;
};
type NavRight = {
    Icon: ReactNode;
    value: string;
};
export const navLeftData: NavLeft[] = [
    {
        name: "Become a seller",
        value: "become-a-seller",
        icon: "far fa-badge-percent",
    },
    {
        name: "Offers",
        value: "offers",
        icon: "far fa-tag",
    },
    {
        name: "Blog",
        value: "blog",
        icon: "far fa-blog",
    },
];

export const NavLeftData2: NavLeft[] = [
    {
        name: "About",
        value: "about",
        icon: "far fa-info-square",
    },
    {
        name: "Contact",
        value: "contact",
        icon: "far fa-address-book",
    },
    {
        name: "Terms & Conditions",
        value: "terms-and-conditions",
        icon: "far fa-copy",
    },
];

export const navRightData: NavRight[] = [
    {
        Icon: CartIcon,
        value: "cart",
    },
    {
        Icon: ProfileIcon,
        value: "profile",
    },
    {
        Icon: SearchBar,
        value: "search",
    },
];
