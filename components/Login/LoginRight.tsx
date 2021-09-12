import { NextPage } from "next";
import LoginForm from "./LoginForm";
const LoginRight: NextPage = () => {
    return (
        <div className="w-full ipad:w-1/2 h-full relative flex items-center">
            <div className="w-2/3 max-w-md mx-auto space-y-8">
                <h1 className="text-main text-center">LOGIN</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginRight;
