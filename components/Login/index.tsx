import { NextPage } from 'next'
import LoginLeft from './LoginLeft'
import LoginRight from './LoginRight'
const LoginMain: NextPage = () => {
    return (
        <div className="flex flex-col ipad:flex-row justify-between h-full">
            <LoginLeft />
            <LoginRight />
        </div>
    )
}

export default LoginMain