import { NextPage } from "next";

const LoginRight: NextPage = () => {
    return (
        <div className="w-full ipad:w-1/2 h-full relative">
            {/* <div className="right-float-content w-full h-full bg-white absolute -top-20 mx-2 p-6">
                <h1>Right</h1>
            </div> */}
            <style>{`
                .right-float-content {
                    border-radius: 50px;
                }
            
            `}</style>
        </div>
    );
};

export default LoginRight;
