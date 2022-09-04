import CartIcon from './Icons/Cart';
import ProfileIcon from './Icons/Profile';
import SearchBar from './SearchBar';

type NavLeft = {
    name: string;
    value: string;
    icon: string;
    to: string;
};

type ProfileOptions = {
    name: string;
    value: string;
    icon: string;
    to: string;
};
export const navLeftData: NavLeft[] = [
    {
        name: 'Become a seller',
        value: 'become-a-seller',
        icon: 'far fa-badge-percent',
        to: '/become-a-seller',
    },
    {
        name: 'Offers',
        value: 'offers',
        icon: 'far fa-tag',
        to: '/offers',
    },
    {
        name: 'Blog',
        value: 'blog',
        icon: 'far fa-blog',
        to: '/blog',
    },
];

export const NavLeftData2: NavLeft[] = [
    {
        name: 'About',
        value: 'about',
        icon: 'far fa-info-square',
        to: '/about',
    },
    {
        name: 'Contact',
        value: 'contact',
        icon: 'far fa-address-book',
        to: '/contact',
    },
    {
        name: 'Terms & Conditions',
        value: 'terms-and-conditions',
        icon: 'far fa-copy',
        to: '/terms-and-conditions',
    },
];

export const navRightData = [
    {
        Icon: CartIcon,
        value: 'cart',
    },
    {
        Icon: ProfileIcon,
        value: 'profile',
    },
    {
        Icon: SearchBar,
        value: 'search',
    },
];

export const ProfileLogoutOptions: ProfileOptions[] = [
    {
        name: 'Login',
        value: 'login',
        icon: 'fa fa-sign-in',
        to: '/login',
    },
    {
        name: 'Sign-up',
        value: 'signup',
        icon: 'far fa-user-plus',
        to: '/signup',
    },
];
