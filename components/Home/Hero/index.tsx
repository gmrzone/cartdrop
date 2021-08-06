import { NextPage } from 'next'

const Hero: NextPage = () => {
    return (
        <div className="bg-hero-image w-full h-hero bg-no-repeat bg-cover bg-clip-content bg-center flex justify-center items-center">
            <div className="bg-white py-8 px-10 skew-x-hero-outer bg-opacity-50 w-10/12 max-w-7xl">
                <h1 className="skew-x-hero-inner text-text text-center"><span className="text-red-600">25%</span> OFF ON FIRST ORDER USE COUPON <span className="text-main">FIRST25</span></h1>
            </div>
        </div>
    )
}

export default Hero

// py-10 px-14