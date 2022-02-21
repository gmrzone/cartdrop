import { NextPage } from "next";
import { ProfileLogoutOptions } from "./data";
import Link from "next/link";

type ProfileDropdown = {
    profileDropdownActive: boolean;
};

const ProfileDropDown: NextPage<ProfileDropdown> = ({ profileDropdownActive }) => {
    const renderOptions = ProfileLogoutOptions.map((x) => {
        return (
            <Link key={x.value} href={x.to} passHref>
                <a title={`profile-item-${x.value}`}>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-200 space-x-3">
                        <i className={`${x.icon} text-main text-lg`} />
                        <span className="text-main text-lg">{x.name}</span>
                    </li>
                </a>
            </Link>
        );
    });

    return (
        <ul
            className={`absolute bg-white shadow-drop-down rounded-sm top-10 right-0 z-40 ${profileDropdownActive ? "block" : "hidden"}`}
            title="profile-dropdown">
            {renderOptions}
        </ul>
    );
};

export default ProfileDropDown;
