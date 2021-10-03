import { NextPage } from "next";
import LoginLeft from "../Login_and_Signup/Left";
import LoginRight from "../Login_and_Signup/Right";
import LoginForm from "./LoginForm";
const LoginMain: NextPage = () => {
    return (
        <div className="flex flex-col flex-nowrap flex-shrink-0 ipad:flex-row justify-between h-full bg-main ipad:bg-white">
            <LoginLeft type="login" />
            <LoginRight Form={LoginForm} type="login" />
        </div>
    );
};

export default LoginMain;
