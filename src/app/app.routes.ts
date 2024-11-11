import { Routes } from '@angular/router';

export enum AppRoutes {
  HOME = 'home',
  CATEGORY = 'category',
  SUBCATEGORY = 'subcategory',
}
export const routes: Routes = [
  { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' },
  {
    path: AppRoutes.HOME,
    loadComponent: () =>
      import('./home/page/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: `${AppRoutes.CATEGORY}/:id`,
    loadComponent: () =>
      import('./category/page/category-page/category-page.component').then(
        (m) => m.CategoryPageComponent
      ),
  },
  {
    path: `${AppRoutes.SUBCATEGORY}/:id`,
    loadComponent: () =>
      import('./sub-category/page/sub-category/sub-category.component').then(
        (m) => m.SubCategoryComponent
      ),
  },
];
