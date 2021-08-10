import { NextPage } from "next";

type ExtraProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    loading?: boolean;
};

const ExtraButton: NextPage<ExtraProps> = ({ text, icon, loading, disable }) => {
    return (
        <button
            className={`w-auto py-2 px-3 ipad:py-3 ipad:px-5 font-semibold rounded transition-colors duration-300 ${
                disable ? "bg-gray-600 cursor-not-allowed bg-opacity-75" : "bg-secondary hover:bg-main"
            }`}>
            {icon && <i className={`${icon} mr-2 text-white`} />}
            {loading && !disable && <i className="fad fa-spinner-third mr-2 text-white animate-spin-button" />}
            <span className="text-white text-sm ipad:text-base desktop:text-lg">{text}</span>
        </button>
    );
};

export default ExtraButton;
