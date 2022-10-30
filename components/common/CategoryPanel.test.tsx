import { render, screen } from '@testing-library/react';
import CategoryPanel from './CategoryPanel';

jest.mock('../../styles/category.module.scss', () => ({
    __esModule: true,
    default: {},
}));

describe('CategoryPanelTest', () => {
    const data = [
        {
            name: 'Mobiles',
            slug: 'mobiles',
            uuid: '309cb533-5052-4153-8e0a-e98fecff7ea4',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/mobiles/mobile_2-nobg.png',
                },
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/mobiles/mobile_1-bg_removed.png',
                },
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/mobiles/mobile_4-nobg.png',
                },
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/mobiles/mobile_3-nobg_adj.png',
                },
            ],
            created: '2021-08-07T14:49:13.580000Z',
        },
        {
            name: 'Electronics',
            slug: 'electronics',
            uuid: '5ca7c042-d999-456f-9db9-2f5cddb6b23f',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/electronics/laptop_1_nobg.png',
                },
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/electronics/laptop_3-nobg.png',
                },
            ],
            created: '2021-08-07T14:53:17.854000Z',
        },
        {
            name: 'Accessories',
            slug: 'accessories',
            uuid: '1a456117-bcab-45c0-bd5d-6c79e2d2fb8e',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/accessories/accessories_1-nobg.png',
                },
            ],
            created: '2021-08-07T14:54:52.367000Z',
        },
        {
            name: 'Fashion',
            slug: 'fashion',
            uuid: 'de7c101c-dea9-4ef2-ac0c-9b81820754ed',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/fashion/fashion_nobg.png.png',
                },
            ],
            created: '2021-08-07T14:55:07.173000Z',
        },
        {
            name: 'Appliances',
            slug: 'appliances',
            uuid: '742f31e7-a929-4988-912f-2772b950ca12',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/appliances/appliances_nobg.png',
                },
            ],
            created: '2021-08-07T14:55:19.761000Z',
        },
        {
            name: 'Groceries',
            slug: 'groceries',
            uuid: 'c2c8a48c-207a-4f25-834e-c13ed83cdb23',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/groceries/groceries_nogb.png',
                },
            ],
            created: '2021-08-07T14:55:47.292000Z',
        },
        {
            name: 'Books',
            slug: 'books',
            uuid: '96e93704-8482-4d51-96d5-2a0ca884fe29',
            category_images: [
                {
                    image: 'https://cartdrop.herokuapp.com/media/Category_Media/books/books_2-nobg.png',
                },
            ],
            created: '2021-08-07T14:55:57.429000Z',
        },
    ];

    it('RenderCheck', () => {
        render(<CategoryPanel categories={data} activeCategory="mobile" />);
        // expect(screen.getByTitle("category-offers")).toBeInTheDocument();
        data.forEach((x) => {
            const categoryItem = screen.getByTitle(`category-${x.slug}`);
            expect(categoryItem).toBeInTheDocument();
            expect(categoryItem).toHaveAttribute('href', `/${x.slug}`);
        });
    });
});
