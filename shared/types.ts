export type Image = {
    image: string;
};
export type CategoryType = {
    name: string;
    slug: string;
    uuid: string;
    category_images: Image[];
    created: string;
};

export type ProductColorType = {
    name: string;
    slug: string;
};

export type MobileVariantType = {
    name: string;
};
export type LaptopVariantType = {
    name: string;
};
export type TVVariantType = {
    display_size: string;
};
export type ACCapacityVariantType = {
    capacity: string;
};

export type ACStarVariantType = {
    star: string;
};

export type BookVariantType = {
    name: string;
};

export type FashionSizeVariantType = {
    name: string;
    code: string;
};
export type SubcategoryBaseType = {
    name: string;
    slug: string;
};
export type ProductBaseType = {
    uuid: string;
    subcategory: SubcategoryBaseType;
    name: string;
    slug: string;
    overall_rating: string;
};

export type ProductVariationImageType = {
    image: string;
    primary: boolean;
};
export type FeaturedProductType = {
    uuid: string;
    pid: string;
    product: ProductBaseType;
    retail_price: string;
    discount: number;
    price: string;
    color: ProductColorType;
    available_stock: number;
    mobile_variant: MobileVariantType | null;
    laptop_variant: LaptopVariantType | null;
    tv_variant: TVVariantType | null;
    ac_capacity_variant: ACCapacityVariantType | null;
    refrigerator_capacity: string;
    ac_star_variant: ACStarVariantType | null;
    book_variation: BookVariantType | null;
    juices_quantity: string;
    size: FashionSizeVariantType | null;
    images: ProductVariationImageType[];
};
