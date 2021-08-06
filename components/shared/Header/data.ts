import React, { ReactNode } from 'react';
import CartIcon from './Icons/Cart';
import ProfileIcon from './Icons/Profile';
import SearchBar from './SearchBar'

type NavLeft = {
    name: string;
    value: string;
};
type NavRight = {
    Icon: ReactNode,
    value: string
}
export const navLeftData: NavLeft[] = [
    {
        name: "Become a seller",
        value: "become-a-seller",
    },
    {
        name: "About",
        value: "about",
    },
    {
        name: "Contact",
        value: "contact",
    },
];


export const navRightData: NavRight[] = [
    {
        Icon: CartIcon,
        value: "cart"
    },
    {
        Icon: ProfileIcon,
        value: "profile"
    },
    {
        Icon: SearchBar,
        value: "search"
    }
]