import { BrandsTypes } from "../../../../../shared/types";
import { NextPage } from "next";
import Checkbox from "../../../../common/inputs/Checkbox";

interface IProps {
    brand: BrandsTypes;
}

const BrandFilterItem: NextPage<IProps> = ({ brand }) => {
    return (
        <div className="flex justify-start space-x-4">
            <Checkbox />
            <p className="text-xl text-main">{brand.name}</p>
        </div>
    );
};

export default BrandFilterItem;
