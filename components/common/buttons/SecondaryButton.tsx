import { NextPage } from "next";

type SecondaryProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    loading?: boolean;
};

const SecondaryButton: NextPage<SecondaryProps> = ({ text, icon, loading, disable }) => {
    return (
        <button
            className={`w-auto py-3 px-6 font-semibold rounded-full border-2 transition-colors duration-300 ${
                disable ? "bg-gray-400 border-none cursor-not-allowed bg-opacity-75" : "border-main"
            }`}>
            {icon && <i className={`${icon} mr-2 text-main`} />}
            {loading && !disable && <i className="fad fa-spinner-third mr-2 text-main animate-spin-button" />}
            <span className={`${disable ? "text-gray-700" : "text-main"}`}>{text}</span>
        </button>
    );
};

export default SecondaryButton;
