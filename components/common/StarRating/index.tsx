import { NextPage } from 'next'
import style from '../../../styles/starRating.module.scss'
const StarRating: NextPage = () => {
    return (
        <div className={style["star-rating"]}>
            <input type='radio' name="rate" id="star-5" className={style["input"]}/>
            <label htmlFor='star-5' className={style["star-main"] + " fas fa-star"}></label>
            <input type='radio' name="rate" id="star-4" className={style["input"]}/>
            <label htmlFor='star-4' className={style["star-main"] + " fas fa-star"}></label>
            <input type='radio' name="rate" id="star-3" className={style["input"]}/>
            <label htmlFor='star-3' className={style["star-main"] + " fas fa-star"}></label>
            <input type='radio' name="rate" id="star-2" className={style["input"]}/>
            <label htmlFor='star-2' className={style["star-main"] + " fas fa-star"}></label>
            <input type='radio' name="rate" id="star-1" className={style["input"]}/>
            <label htmlFor='star-1' className={style["star-main"] + " fas fa-star"}></label>
        </div>
    )
}

export default StarRating