import { NextPage } from 'next'

const Hero: NextPage = () => {
    return (
        <div className="bg-hero-image w-full h-hero bg-no-repeat bg-cover bg-clip-content bg-center flex justify-center items-center">
            <div className="bg-white py-10 px-14 skew-x-hero-outer bg-opacity-60">
                <h1 className="skew-x-hero-inner text-text">25% OFF ON FIRST ORDER USE COUPON FIRST25</h1>
            </div>
        </div>
    )
}

export default Hero