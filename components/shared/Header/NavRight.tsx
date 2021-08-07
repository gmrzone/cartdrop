import ProfileIcon from "./Icons/Profile";
import CartIcon from "./Icons/Cart";
import SearchBar from "./SearchBar";

const NavBar = () => {
    // const renderData = navRightData.map(x => {
    //     return (
    //         <li key={x.value}>
    //             {x.Icon}
    //         </li>
    //     )
    // })

    return (
        <nav className="flex items-center ml-auto md:ml-0">
            <ul className="flex space-x-4 mobile-bg:space-x-8">
                <li className="">
                    <ProfileIcon />
                </li>
                <li>
                    <CartIcon />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
