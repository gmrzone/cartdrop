import { NextPage } from 'next'
import Link from 'next/link'

interface SocialLoginP {
    type: string
}
const SocialLoginMobile: NextPage<SocialLoginP> = ({ type }) => {
    return (
        <div>
            <ul>
                <li className="cursor-pointer">
                    <i className="fab fa-github" />
                </li>
                <li className="cursor-pointer">
                    <i className="fab fa-facebook" />
                </li>
                <li className="cursor-pointer">
                    <i className="fab fa-google" />
                </li>
            </ul>
            <p>
                {type === "login" ? "Don't have a account? " : "Already have a account? "}
                <Link href={type === "login" ? "/signup" : "/login"}>
                    {type === "login" ? "Sign up" : "Login"}
                </Link>
            </p>
        </div>
    )
}

export default SocialLoginMobile