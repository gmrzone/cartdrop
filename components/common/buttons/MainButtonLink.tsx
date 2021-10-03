import { NextPage } from "next";
import Link from "next/link";

type MainProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    to: string;
    fullWidth?: boolean;
};

const MainButtonLink: NextPage<MainProps> = ({ text, icon, disable, to, fullWidth = false }) => {
    return (
        <Link href={to} passHref>
            <a
                className={`${fullWidth ? "w-full" : "w-auto"} w-full py-3 px-6 font-semibold rounded-full transition-colors duration-300 ${
                    disable ? "bg-gray-600 cursor-not-allowed bg-opacity-75" : "bg-main hover:bg-blue-800"
                }`}>
                {icon && <i className={`${icon} mr-2 text-white`} />}
                <span className="text-white">{text}</span>
            </a>
        </Link>
    );
};

export default MainButtonLink;
