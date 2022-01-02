import { NextPage } from "next";
import Checkbox from "../../../../common/inputs/Checkbox";

interface IProps {
    rating: number;
}

const BrandFilterItem: NextPage<IProps> = ({ rating }) => {
    return (
        <div className="flex justify-start space-x-4">
            <Checkbox />
            <p className="text-xl flex space-x-2">
                <span className="text-main">{rating}</span>
                <span className="text-main">
                    <i className="fas fa-star text-base" />
                </span>
                <span className="text-main">and above</span>
            </p>
        </div>
    );
};

export default BrandFilterItem;
