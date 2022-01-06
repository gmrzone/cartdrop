import { NextPage } from "next";

type StarRatingStaticProps = {
    rating: number;
};

const StarRatingStatic: NextPage<StarRatingStaticProps> = ({ rating }) => {
    const renderStars = () => {
        let float_part = rating % 1;
        const int_part = Math.floor(rating - float_part);
        console.log(int_part, " ", float_part);
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= int_part) {
                stars.push(
                    <>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star text-secondary"></label>
                    </>,
                );
            } else if (i > int_part && float_part > 0.5) {
                stars.push(
                    <>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star text-secondary"></label>
                    </>,
                );
                float_part = 0;
            } else if (i > int_part && float_part >= 0.1 && float_part <= 0.5) {
                stars.push(
                    <>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star-half-alt text-secondary"></label>
                    </>,
                );
                float_part = 0;
            } else {
                stars.push(
                    <>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="far fa-star text-secondary"></label>
                    </>,
                );
            }
        }
        return stars;
    };
    return <div className="">{renderStars()}</div>;
};

export default StarRatingStatic;
