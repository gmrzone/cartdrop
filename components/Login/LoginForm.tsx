import { NextPage } from "next";
import Input from "../common/inputs/Input";
import Password from '../common/inputs/Password'
import Button from '../common/buttons/MainButton'
import SecondaryButton from "../common/buttons/SecondaryButton";
import Link from 'next/link';

const LoginForm: NextPage = () => {
    return (
        <form className="space-y-4 pb-16">
            <div className="space-y-8">
                <Input type="text" label="Username/Email"/>
                <Password type="password" label="Password"/>
            </div>
            <div className="text-lg ml-1 font-semibold">
                <Link href="/reset-password">Forgot password?</Link>
            </div>
            <div className="flex space-x-6">
                <Button text="Login" fullWidth={true} />
                <SecondaryButton text="Signup" fullWidth={true} />
            </div>
        </form>
    )
};

export default LoginForm;
