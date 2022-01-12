export type Image = {
    image: string;
};

export type coupon = {
    code: string;
    discount: number;
};
export type CategoryType = {
    name: string;
    slug: string;
    uuid: string;
    category_images: Image[];
    created: string;
};

export type SubcategoryType = {
    name: string;
    slug: string;
    uuid: string;
    subcategory_images: Image[];
    coupons: coupon[];
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
    id: number;
    image: string;
    primary: boolean;
};
export type ProductVariationType = {
    uuid: string;
    pid: string;
    product: ProductBaseType;
    full_name: string;
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

export type PaginatedProductVariationType = {
    links: {
        next: string | null;
        previous: string | null;
    };
    product_count: number;
    page_count: number;
    products: ProductVariationType[];
};
type SubcategoryImage = {
    image: string;
};
type CouponsBaseType = {
    code: string;
    discount: number;
};
export type SubcategoryOfferType = {
    name: string;
    slug: string;
    uuid: string;
    subcategory_images: SubcategoryImage[];
    coupons: CouponsBaseType[];
};

export type BrandsTypes = {
    name: string;
    photo: string;
    placeholder: string;
};

export type ProductListContextType = {
    brands: BrandsTypes[];
    subcategories: SubcategoryType[];
    paginatedProduct: PaginatedProductVariationType;
};
