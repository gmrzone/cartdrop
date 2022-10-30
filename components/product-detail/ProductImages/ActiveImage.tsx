import { NextPage } from 'next';
import Image from 'next/legacy/image';

type ActiveImageProps = {
    image: string;
};
const ActiveImage: NextPage<ActiveImageProps> = ({ image }) => {
    return (
        <div className="relative w-[300px] h-[320px] mobile-lg:w-[360px] mobile-lg:h-[380px] ipad:w-[380px] ipad:h-[400px] desktop:w-[400px] desktop:h-[420px] desktop-big:w-[450px] desktop-big:h-[470px] mb-6 ipad:mb-0">
            <Image src={image} alt="main-product-image" layout="fill" objectFit="contain" />
        </div>
    );
};

export default ActiveImage;
