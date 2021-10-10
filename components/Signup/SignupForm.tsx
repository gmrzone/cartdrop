import { NextPage } from "next";
import Input from "../common/inputs/Input";
import Password from "../common/inputs/Password";
import Button from "../common/buttons/MainButton";
import SecondaryButtonLink from "../common/buttons/SecondaryButtonLink";
import useIsMobile from "../hooks/useIsMobile";

const SignupForm: NextPage = () => {
    const isMobile = useIsMobile();
    return (
        <form className="space-y-4 px-3">
            <div className="space-y-8">
                <Input type="text" label="Username" />
                <Input type="text" label="Email" />
                <Password type="password" label="Password" />
                <Password type="password" label="Confirm Password" />
            </div>
            <div className="flex space-x-6">
                <Button text="Signup" fullWidth={true} type="submit" />
                {!isMobile && <SecondaryButtonLink text="Login" to="/login" fullWidth={true} />}
            </div>
        </form>
    );
};

export default SignupForm;
