import { NextPage } from "next";
import { Category } from "../../shared/types";
import Image from "next/image";
import style from "../../styles/category.module.scss";
type CategoryPanelProps = {
    categories: Category[];
};
const CategoryPanel: NextPage<CategoryPanelProps> = ({ categories }) => {
    const renderCategory = categories.map((x) => {
        return (
            <li key={x.uuid} className={style["category-item"]}>
                <div className={style["image-container"]}>
                    <Image src={x.category_images[0]?.image} layout="fill" alt="category_image" />
                </div>
                <div className={style["category-text"]}>{x.name}</div>
            </li>
        );
    });
    return (
        <div className={style["outer-container"]}>
            <div className={style["inner-container"]}>
                <ul className={style["main-container"]}>
                    <li className={style["category-item"]}>
                        <div className={style["image-container"]}>
                            <Image src="/offers.png" layout="fill" alt="category_image" />
                        </div>
                        <div className={style["category-text"]}>Offers</div>
                    </li>
                    {renderCategory}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPanel;