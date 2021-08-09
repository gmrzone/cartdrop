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
                        width={800}
                        height={506}
                        layout="responsive"
                        sizes="(min-width: 1199px) 33vw, (min-width: 992px) 33vw"
                    />
                </div>
                <div>
                    <p className="text-text text-xl sm:text-2xl desktop:text-3xl">{todaysDeal.name}</p>
                    <div>
                        <span>&#8377;{todaysDeal.price}</span>
                        <span>&#8377;{todaysDeal.mrp}</span>
                        <span>&#8377;{todaysDeal.off}</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TodaysDeal;
