import { NextPage } from 'next';
import { CategoryType } from '../../shared/types';
import Image from 'next/legacy/image';
import style from '../../styles/category.module.scss';
import Link from 'next/link';

type CategoryPanelProps = {
    categories: CategoryType[];
    activeCategory: string | null;
};
const CategoryPanel: NextPage<CategoryPanelProps> = ({ activeCategory, categories }) => {
    const renderCategory = categories.map((x) => {
        return (
            <li key={x.uuid}>
                <Link href={`/${x.slug}`} passHref legacyBehavior>
                    <a
                        className={`${style['category-item']} ${activeCategory === x.slug ? style['category-active'] : ''}`}
                        title={`category-${x.slug}`}
                    >
                        <div className={style['image-container']}>
                            <Image src={x.category_images[0]?.image} alt={x.slug} layout="fill" objectFit="cover" />
                            {/* <img src={x.category_images[0]?.image} alt="testing"/> */}
                        </div>
                        <div className={style['category-text']}>{x.name}</div>
                    </a>
                </Link>
            </li>
        );
    });
    return (
        <div className={style['outer-container']}>
            <div className={style['inner-container']}>
                <ul className={style['main-container']}>
                    <li>
                        <Link href="/offers" title="category-offers">
                            <div className={style['category-item']}>
                                <div className={style['image-container']}>
                                    <Image src="/offers.png" layout="fill" alt="category_image" />
                                </div>
                                <div className={style['category-text']}>Offers</div>
                            </div>
                        </Link>
                    </li>
                    {renderCategory}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPanel;
