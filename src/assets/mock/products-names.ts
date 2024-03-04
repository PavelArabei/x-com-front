import { SubMenuLinkContent } from '@assets/mock/category-names';

export type HeaderCategoryNames =
    | 'computers'
    | 'smartphones'
    | 'gaming'
    | 'components'
    | 'peripherals'
    | 'tvAudio'
    | 'smartHome'
    | 'accessories'
    | 'trends';

export type HeaderCategoryInfo = {
    [key in HeaderCategoryNames]: SubMenuLinkContent;
};

const productCategoryNames: HeaderCategoryInfo = {
    computers: {
        categoryName: 'Laptops and computers',
        categoryIcon: 'computer',
        categoryRoutePath: 'computers',
        nestedSubMenu: [],
    },
    smartphones: {
        categoryName: 'Smartphones and smartwatches',
        categoryIcon: 'smartphone',
        categoryRoutePath: 'smartphones',
        nestedSubMenu: [],
    },
    gaming: {
        categoryName: 'Gaming and streaming',
        categoryIcon: 'gaming',
        categoryRoutePath: 'gaming',
        nestedSubMenu: [],
    },
    components: {
        categoryName: 'Computer components',
        categoryIcon: 'components',
        categoryRoutePath: 'components',
        nestedSubMenu: [],
    },
    peripherals: {
        categoryName: 'Peripherals',
        categoryIcon: 'peripherals',
        categoryRoutePath: 'peripherals',
        nestedSubMenu: [],
    },
    tvAudio: {
        categoryName: 'TV and audio',
        categoryIcon: 'tv-audio',
        categoryRoutePath: 'tv-audio',
        nestedSubMenu: [],
    },
    smartHome: {
        categoryName: 'Smart Home and lifestyle',
        categoryIcon: 'smart-home',
        categoryRoutePath: 'smart-home',
        nestedSubMenu: [],
    },
    accessories: {
        categoryName: 'Accessories',
        categoryIcon: 'accessories',
        categoryRoutePath: 'accessories',
        nestedSubMenu: [],
    },
    trends: {
        categoryName: 'Trends, promotions and news',
        categoryIcon: 'promotions',
        categoryRoutePath: 'trends',
        nestedSubMenu: [],
    },
};

export default productCategoryNames;
