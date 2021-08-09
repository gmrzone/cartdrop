import { NextPage } from "next";
import { todaysDeal } from "./data";
import Image from "next/image";
import Section from "../../common/Section";
const TodaysDeal: NextPage = () => {
    return (
        <Section title="TODAY'S DEAL">
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
                <div>
                    <p className="text-text text-xl font-semibold sm:text-2xl desktop:text-3xl desktop-big:text-4xl">{todaysDeal.name}</p>
                    <div className="space-x-3 font-roboto mt-4">
                        <span className="text-3xl">&#8377;{todaysDeal.price}</span>
                        <span className="text-xl line-through">&#8377;{todaysDeal.mrp}</span>
                        <span className="text-green-600 text-xl">&#8377;{todaysDeal.off}</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TodaysDeal;
