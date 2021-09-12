import { NextPage } from "next";
import LoginForm from "./LoginForm";
const LoginRight: NextPage = () => {
    return (
        <div className="w-full ipad:w-1/2 h-full relative flex right-main ipad:items-center bg-white">
            <div className="w-full ipad:static p-3 ipad:w-2/3 max-w-lg  mx-auto space-y-8">
                <h1 className="text-main text-center">LOGIN</h1>
                <LoginForm />
            </div>
            <style>{`
                .right-main {
                    border-top-left-radius: 60px;
                }
            
            
            `}</style>
        </div>
    );
};

export default LoginRight;
