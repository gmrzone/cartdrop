import { NextPage } from 'next';
import { Category } from '../../shared/types';
import Image from 'next/image'

type CategoryPanelProps = {
    categories: Category[]
}
const CategoryPanel: NextPage<CategoryPanelProps> = ({ categories }) => {
    const renderCategory = categories.map(x => {
        return (
            <li key={x.uuid} className="flex flex-col justify-center items-center py-1 px-6">
                <div className="relative w-10 h-10">
                    <Image src={x.category_images[0]?.image} layout="fill" alt="category_image"/>
                </div>
                <div className="text-white text-sm font-semibold">{x.name}</div>
            </li>
        )
    })
    return (
        <div className="absolute top-0 w-full bg-main bg-opacity-90 flex justify-center">
            <ul className="flex overflow-x-auto">
                <li className="flex flex-col justify-center items-center py-1 px-6">
                    <div className="relative w-10 h-10">
                        <Image src="/offers.png" layout="fill" alt="category_image"/>
                    </div>
                    <div className="text-white text-sm font-semibold">Offers</div>
                </li>
                {renderCategory}
            </ul>
        </div>
    )
}

export default CategoryPanel