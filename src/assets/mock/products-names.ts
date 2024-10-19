import { computersCategoryNames } from '@assets/mock/products-categories/computers-category';
import { HeaderCategoryInfo } from '@core/types/cantegories/header-nav.type';

export const productCategoryNames: HeaderCategoryInfo = {
    computers: {
        categoryName: 'Laptops and computers',
        categoryIcon: 'computer',
        categoryRoutePath: 'computers',
        nestedSubMenu: computersCategoryNames,
    },
    smartphones: {
        categoryName: 'Smartphones and smartwatches',
        categoryIcon: 'smartphone',
        categoryRoutePath: 'smartphones',
        nestedSubMenu: null,
    },
    gaming: {
        categoryName: 'Gaming and streaming',
        categoryIcon: 'gaming',
        categoryRoutePath: 'gaming',
        nestedSubMenu: null,
    },
    components: {
        categoryName: 'Computer components',
        categoryIcon: 'components',
        categoryRoutePath: 'components',
        nestedSubMenu: null,
    },
    peripherals: {
        categoryName: 'Peripherals',
        categoryIcon: 'peripherals',
        categoryRoutePath: 'peripherals',
        nestedSubMenu: null,
    },
    tvAudio: {
        categoryName: 'TV and audio',
        categoryIcon: 'tv-audio',
        categoryRoutePath: 'tv-audio',
        nestedSubMenu: null,
    },
    smartHome: {
        categoryName: 'Smart Home and lifestyle',
        categoryIcon: 'smart-home',
        categoryRoutePath: 'smart-home',
        nestedSubMenu: null,
    },
    accessories: {
        categoryName: 'Accessories',
        categoryIcon: 'accessories',
        categoryRoutePath: 'accessories',
        nestedSubMenu: null,
    },
    trends: {
        categoryName: 'Trends, promotions and news',
        categoryIcon: 'promotions',
        categoryRoutePath: 'trends',
        nestedSubMenu: null,
    },
};
