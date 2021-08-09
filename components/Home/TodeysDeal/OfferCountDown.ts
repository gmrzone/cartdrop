import { MutableRefObject } from 'react'


class OfferCountDown{
    private offerEndDate;
    private dayRef;
    private hourRef;
    private minRef;
    private secRef;

    constructor(offerEndDate: Date, dayRef: MutableRefObject<HTMLDivElement>, hourRef: MutableRefObject<HTMLDivElement>, minRef: MutableRefObject<HTMLDivElement>, secRef: MutableRefObject<HTMLDivElement>){
        this.offerEndDate = offerEndDate;
        this.dayRef = dayRef;
        this.hourRef = hourRef;
        this.minRef = minRef;
        this.secRef = secRef
        this.counter();
        
    }

    counter(){
        const countDownTime = this.offerEndDate.getTime()
        const currentDate = new Date()
        const currentTime = currentDate.getTime()

        const difference = countDownTime - currentTime
        if (difference < 0){
            // Increase month by one from current date if offerEndDate is greater less then current date
            this.offerEndDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())
        }

        // calculation for days hour min and seconds
        const day = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hour = Math.floor((difference / (1000 * 60 *  60 *24)) / (1000 * 60 * 60));
        const min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((difference % (1000 * 60)) / 1000);
        if (this.dayRef && this.hourRef && this.minRef && this.secRef){
            this.dayRef.current.innerHTML = day.toString()
            this.hourRef.current.innerHTML = hour.toString()
            this.minRef.current.innerHTML = min.toString()
            this.secRef.current.innerHTML = sec.toString()
        }
        setTimeout(() => this.counter(), 1000)
    }
}

export default OfferCountDown