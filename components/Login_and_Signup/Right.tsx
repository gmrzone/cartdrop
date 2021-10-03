import { NextPage } from "next";
import useIsMobile from "../hooks/useIsMobile";
import SocialLogin from "./SocialLogin";

interface LoginRightProps {
    Form: NextPage<{}, {}>;
    type: string;
}

const RightSection: NextPage<LoginRightProps> = ({ Form, type }) => {
    const isMobile = useIsMobile();
    return (
        <div className="w-full ipad:w-1/2 h-full relative flex flex-col ipad:flex-row right-main ipad:items-center bg-white space-y-4 ipad:space-x-0">
            <div className="w-full ipad:static py-5 ipad:w-2/3 max-w-lg  mx-auto space-y-8">
                <h1 className="text-main text-center">{type === "login" ? "LOGIN" : "SIGNUP"}</h1>
                <Form />
            </div>
            {isMobile && <SocialLogin type={type} />}
            <style>{`
                .right-main {
                    border-top-left-radius: 60px;
                }
            
            `}</style>
        </div>
    );
};

export default RightSection;
