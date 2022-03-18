import { NextPage } from 'next';
import { useRef, useEffect } from 'react';
import offerCountdown from './OfferCountDown';

type OfferCounterProps = {
    offerEndDate: Date;
};
const OfferCounter: NextPage<OfferCounterProps> = ({ offerEndDate }) => {
    const dayRef = useRef<HTMLDivElement | null>(null);
    const hourRef = useRef<HTMLDivElement | null>(null);
    const minRef = useRef<HTMLDivElement | null>(null);
    const secRef = useRef<HTMLDivElement | null>(null);
    const countDownRef = useRef<offerCountdown | null>(null);
    useEffect(() => {
        if (!countDownRef.current && dayRef.current && hourRef.current && minRef.current && secRef.current) {
            countDownRef.current = new offerCountdown(offerEndDate, dayRef, hourRef, minRef, secRef);
        }
    }, [offerEndDate]);
    // TODO : Add s next to Day, Hour, min and sec if their values are greater then 1
    return (
        <div className="flex flex-nowrap space-x-2 text-white" title="offer-counter">
            <div
                className="flex flex-col justify-center items-center bg-text w-11 px-1 py-1 ipad:py-1 ipad:px-3 rounded-lg ipad:w-14"
                title="offer-counter-day">
                <div ref={dayRef} className="text-md" title="counter-day-main"></div>
                <div className="text-xs">Day</div>
            </div>
            <div title="afzal"></div>
            <div
                className="flex flex-col justify-center items-center bg-text w-11 px-1 py-1 ipad:py-1 ipad:px-3 rounded-lg ipad:w-14"
                title="offer-counter-hour">
                <div ref={hourRef} className="text-md" title="counter-hour-main"></div>
                <div className="text-xs">Hour</div>
            </div>
            <div
                className="flex flex-col justify-center items-center bg-text w-11 px-1 py-1 ipad:py-1 ipad:px-3 rounded-lg ipad:w-14"
                title="offer-counter-min">
                <div ref={minRef} title="counter-min-main"></div>
                <div className="text-xs">min</div>
            </div>
            <div
                className="flex flex-col justify-center items-center bg-text w-11 px-1 py-1 ipad:py-1 ipad:px-3 rounded-lg ipad:w-14"
                title="offer-counter-sec">
                <div ref={secRef} title="counter-sec-main"></div>
                <div className="text-xs">sec</div>
            </div>
        </div>
    );
};

export default OfferCounter;
