export interface SubMenuLinkContent {
    categoryName: string;
    categoryRoutePath: string;
    categoryIcon: string | null;
    nestedSubMenu: SubMenuLinkContent[] | null;
}
