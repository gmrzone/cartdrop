import { NextPage } from "next";
import { Category } from "../../shared/types";
import Image from "next/image";

type CategoryPanelProps = {
    categories: Category[];
};
const CategoryPanel: NextPage<CategoryPanelProps> = ({ categories }) => {
    const renderCategory = categories.map((x) => {
        return (
            <li
                key={x.uuid}
                className="flex flex-col justify-center items-center py-1 px-4 hover:bg-white hover:bg-opacity-20 w-28 rounded-md">
                <div className="relative w-10 h-10">
                    <Image src={x.category_images[0]?.image} layout="fill" alt="category_image" />
                </div>
                <div className="text-white text-xs font-semibold">{x.name}</div>
            </li>
        );
    });
    return (
        <div className="absolute top-0 w-full bg-main bg-opacity-90 overflow-x-hidden h-20 ipad:h-20 pb-2">
            <div className="w-full h-full flex justify-center overflow-hidden">
                <ul className="flex overflow-x-auto overflow-y-hidden h-full mt-2 pb-2">
                    <li className="flex flex-col justify-center items-center py-1 px-7 w-28 hover:bg-white hover:bg-opacity-20 rounded-md">
                        <div className="relative w-10 h-10">
                            <Image src="/offers.png" layout="fill" alt="category_image" />
                        </div>
                        <div className="text-white text-sm font-semibold">Offers</div>
                    </li>
                    {renderCategory}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPanel;
