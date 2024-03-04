export interface SubMenuLinkContent {
    categoryName: string;
    categoryRoutePath: string;
    categoryIcon: string | null;
    nestedSubMenu: SubMenuLinkContent[] | null;
}
export type HeaderNavNames = 'account' | 'help' | 'basket' | 'lists';

export type HeaderNavInfo = {
    [key in HeaderNavNames]: SubMenuLinkContent;
};
const categoryNames: HeaderNavInfo = {
    help: {
        categoryName: 'Help and contacts',
        categoryIcon: 'info',
        categoryRoutePath: 'info',
        nestedSubMenu: [
            {
                categoryName: 'Shipment status',
                categoryRoutePath: 'shipment-status',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Delivery',
                categoryRoutePath: 'delivery',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Installment',
                categoryRoutePath: 'installment',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Leasing',
                categoryRoutePath: 'leasing',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Equipment insurance',
                categoryRoutePath: 'insurance',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Returns and complaints',
                categoryRoutePath: 'returns',
                categoryIcon: null,
                nestedSubMenu: null,
            },
            {
                categoryName: 'Frequently Asked Questions',
                categoryRoutePath: 'questions',
                categoryIcon: null,
                nestedSubMenu: null,
            },
        ],
    },
    account: {
        categoryName: 'Accaunt',
        categoryIcon: 'account',
        categoryRoutePath: 'account',
        nestedSubMenu: [
            {
                categoryName: 'Your account',
                categoryRoutePath: 'account',
                categoryIcon: 'account',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Orders',
                categoryRoutePath: 'orders',
                categoryIcon: 'orders',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Returns and complaints',
                categoryRoutePath: 'returns',
                categoryIcon: 'returns',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Shopping lists',
                categoryRoutePath: 'like',
                categoryIcon: 'like',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Opinions',
                categoryRoutePath: 'opinion',
                categoryIcon: 'opinion',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Ordering data',
                categoryRoutePath: 'ordering',
                categoryIcon: 'ordering',
                nestedSubMenu: null,
            },
            {
                categoryName: 'Account settings',
                categoryRoutePath: 'settings',
                categoryIcon: 'settings',
                nestedSubMenu: null,
            },
        ],
    },
    basket: {
        categoryName: 'Basket',
        categoryIcon: 'basket',
        categoryRoutePath: 'basket',
        nestedSubMenu: [],
    },
    lists: {
        categoryName: 'Your lists',
        categoryIcon: 'like',
        categoryRoutePath: 'lists',
        nestedSubMenu: [],
    },
};
export default categoryNames;
