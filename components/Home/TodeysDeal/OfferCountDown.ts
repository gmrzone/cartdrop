import { MutableRefObject, LegacyRef } from "react";

class OfferCountDown {
    private offerEndDate;
    private dayRef;
    private hourRef;
    private minRef;
    private secRef;

    constructor(
        offerEndDate: Date,
        dayRef: MutableRefObject<HTMLDivElement | null>,
        hourRef: MutableRefObject<HTMLDivElement | null>,
        minRef: MutableRefObject<HTMLDivElement | null>,
        secRef: MutableRefObject<HTMLDivElement | null>,
    ) {
        this.offerEndDate = offerEndDate;
        this.dayRef = dayRef;
        this.hourRef = hourRef;
        this.minRef = minRef;
        this.secRef = secRef;
        this.counter();
    }

    counter() {
        const countDownTime = this.offerEndDate.getTime();
        const currentDate = new Date();
        const currentTime = currentDate.getTime();

        const difference = countDownTime - currentTime;
        if (difference < 0) {
            // Increase day by one from current date if offerEndDate is greater  then current date
            this.offerEndDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        }

        // calculation for days hour min and seconds
        const day = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((difference % (1000 * 60)) / 1000);
        if (this.dayRef && this.hourRef && this.minRef && this.secRef) {
            if (this.dayRef.current && this.hourRef.current && this.minRef.current && this.secRef.current) {
                this.dayRef.current.innerHTML = day.toString();
                this.hourRef.current.innerHTML = hour.toString();
                this.minRef.current.innerHTML = min.toString();
                this.secRef.current.innerHTML = sec.toString();
            }
        }
        setTimeout(() => this.counter(), 1000);
    }
}

export default OfferCountDown;
