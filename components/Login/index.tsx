import { NextPage } from "next";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
const LoginMain: NextPage = () => {
    return (
        <div className="flex flex-col flex-nowrap flex-shrink-0 ipad:flex-row justify-between h-full bg-main ipad:bg-white">
            <LoginLeft />
            <LoginRight />
        </div>
    );
};

export default LoginMain;
