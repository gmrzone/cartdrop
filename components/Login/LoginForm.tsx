import { NextPage } from "next";
import Input from "../common/inputs/Input";
import Password from "../common/inputs/Password";
import Button from "../common/buttons/MainButton";
import SecondaryButtonLink from "../common/buttons/SecondaryButtonLink";
import Link from "next/link";
import useIsMobile from "../hooks/useIsMobile";

const LoginForm: NextPage = () => {
    const isMobile = useIsMobile();
    return (
        <form className="space-y-4 px-3">
            <div className="space-y-8">
                <Input type="text" label="Username or Email" />
                <Password type="password" label="Password" />
            </div>
            <div className="text-lg ml-1 font-semibold">
                <Link href="/reset-password">Forgot password?</Link>
            </div>
            <div className="flex space-x-6">
                <Button text="Login" fullWidth={true} type="submit" />
                {!isMobile && <SecondaryButtonLink text="Signup" to="/signup" fullWidth={true} />}
            </div>
        </form>
    );
};

export default LoginForm;
