export type Image = {
    image: string
}
export type Category = {
    "name": string,
    "slug": string,
    "uuid": string,
    "category_images": Image[],
    "created": string
}