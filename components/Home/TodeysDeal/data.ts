import TVImage from '../../../public/TV.jpg';

// TODO: Remove this when nexj js fixes type error on StaticImageData
type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};

type TodaysDealT = {
    name: string;
    mrp: string;
    off: string;
    price: string;
    offer_ends: Date;
    image: StaticImageData;
};

export const todaysDeal: TodaysDealT = {
    name: 'Samsung 125cm (50 Inches) Crystal 4K series Ultra HD Smart LET TV',
    mrp: '55,999',
    off: '28% off',
    price: '45,999',
    offer_ends: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),
    image: TVImage,
};
