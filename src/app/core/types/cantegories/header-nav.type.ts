import { SubMenuLinkContent } from '@core/types/sub-menu-link-content.interface';

export type HeaderNavNames = 'account' | 'help' | 'basket' | 'lists';

export type HeaderNavInfo = {
    [key in HeaderNavNames]: SubMenuLinkContent;
};

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
