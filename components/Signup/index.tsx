import { NextPage } from "next";
import SignupLeft from "../Login_and_Signup/Left";
import SignupRight from "../Login_and_Signup/Right";
import LoginForm from "./SignupForm";
const SignupMain: NextPage = () => {
    return (
        <div className="flex flex-col flex-nowrap flex-shrink-0 ipad:flex-row justify-between h-full bg-main ipad:bg-white">
            <SignupLeft type="signup" />
            <SignupRight Form={LoginForm} type="signup" />
        </div>
    );
};

export default SignupMain;
