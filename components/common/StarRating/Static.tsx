import { NextPage } from 'next';

type StarRatingStaticProps = {
    rating: number;
};

const StarRatingStatic: NextPage<StarRatingStaticProps> = ({ rating }) => {
    const renderStars = () => {
        // let float_part = rating % 1;
        // const int_part = Math.floor(rating - float_part);
        const rating_split = String(rating).split('.');
        const int_part = parseInt(rating_split[0]);
        let float_part = parseFloat('0.' + rating_split[1]);
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= int_part) {
                stars.push(
                    <span key={i}>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star text-secondary" title={`star-icon-${i}`}></label>
                    </span>,
                );
            } else if (i > int_part && float_part > 0.7) {
                stars.push(
                    <span key={i}>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star text-secondary" title={`star-icon-${i}`}></label>
                    </span>,
                );
                float_part = 0;
            } else if (i > int_part && float_part >= 0.3 && float_part <= 0.7) {
                stars.push(
                    <span key={i}>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="fas fa-star-half-alt text-secondary" title={`star-icon-${i}`}></label>
                    </span>,
                );
                float_part = 0;
            } else {
                stars.push(
                    <span key={i}>
                        <input type="radio" name="rate" id={`star-${i}`} className="hidden" />
                        <label htmlFor={`star-${i}`} className="far fa-star text-secondary" title={`star-icon-${i}`}></label>
                    </span>,
                );
            }
        }
        return stars;
    };
    return (
        <div className="" title="star-main">
            {renderStars()}
        </div>
    );
};

export default StarRatingStatic;
