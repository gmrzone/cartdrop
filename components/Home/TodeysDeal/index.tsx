import { NextPage } from 'next';
import { todaysDeal } from './data';
import Image from 'next/legacy/image';
import Section from '../../common/Section';
import OfferCounter from './OfferCounter';
import ExtraButton from '../../common/buttons/ExtraButton';

const TodaysDeal: NextPage = () => {
    return (
        <Section title="TODAY'S DEAL" first={true}>
            <div className="flex flex-col space-y-0 sm:space-y-4 ipad:flex-row ipad:space-y-0 ipad:space-x-6">
                <div className="w-full h-full">
                    <Image
                        src={todaysDeal.image}
                        alt="todays_deal"
                        placeholder="blur"
                        width={750}
                        height={474}
                        layout="responsive"
                        sizes="(min-width: 1199px) 40vw, (min-width: 992px) 50vw, 90vw"
                    />
                </div>
                <div className="">
                    <p className="text-text text-xl font-semibold sm:text-2xl desktop:text-3xl desktop-big:text-4xl">{todaysDeal.name}</p>
                    <div className="space-x-3 font-roboto mt-2 ipad:mt-4">
                        <span className="text-xl desktop:2xl: desktop-big:text-3xl" title="offer-price">
                            &#8377;{todaysDeal.price}
                        </span>
                        <span className="text-md desktop-big:text-xl line-through" title="offer-mrp">
                            &#8377;{todaysDeal.mrp}
                        </span>
                        <span className="text-green-600 text-md desktop-big:text-xl" title="offer-discount">
                            &#8377;{todaysDeal.off}
                        </span>
                    </div>
                    <p className="text-red-500 text-xs desktop:text-sm font-semibold mt-2 ipad:mt-4">Offer Ends in</p>
                    <div className="flex flex-row items-center space-x-3 ipad:space-x-0 ipad:items-start ipad:flex-col">
                        <div className="">
                            <OfferCounter offerEndDate={todaysDeal.offer_ends} />
                        </div>
                        <div className="ipad:mt-10">
                            <ExtraButton text="Buy now" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TodaysDeal;
