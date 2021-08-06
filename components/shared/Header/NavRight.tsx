import ProfileIcon from './Icons/Profile';
import CartIcon from './Icons/Cart';
import SearchBar from './SearchBar'

const NavBar = () => {
    // const renderData = navRightData.map(x => {
    //     return (
    //         <li key={x.value}>
    //             {x.Icon}
    //         </li>
    //     )
    // })

    return (
        <nav className="flex items-center">
            <ul className="flex space-x-8">
                <li>
                    <ProfileIcon />
                </li>
                <li>
                    <CartIcon />
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
