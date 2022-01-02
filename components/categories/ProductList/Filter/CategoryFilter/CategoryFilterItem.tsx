import { SubcategoryType } from "../../../../../shared/types";
import { NextPage } from "next";
import Checkbox from "../../../../common/inputs/Checkbox";

interface IProps {
    subcategory: SubcategoryType;
}

const CategoryFilterItem: NextPage<IProps> = ({ subcategory }) => {
    return (
        <div className="flex justify-start space-x-4">
            <Checkbox />
            <p className="text-xl text-main">{subcategory.name}</p>
        </div>
    );
};

export default CategoryFilterItem;
