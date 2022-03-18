import { NextPage } from 'next';

type MainProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    loading?: boolean;
    type: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
};

const MainButton: NextPage<MainProps> = ({ text, icon, loading, disable, type, fullWidth = false }) => {
    return (
        <button
            className={`${
                fullWidth ? 'w-full min-w-min' : 'w-auto'
            } w-full py-3 px-6 font-semibold rounded-full transition-colors duration-300 ${
                disable ? 'bg-gray-600 cursor-not-allowed bg-opacity-75' : 'bg-main hover:bg-blue-800'
            }`}
            type={type}>
            {icon && <i className={`${icon} mr-2 text-white`} title="button-icon" />}
            {loading && !disable && <i className="fad fa-spinner-third mr-2 text-white animate-spin-button" title="loading-icon" />}
            <span className="text-white">{text}</span>
        </button>
    );
};

export default MainButton;
