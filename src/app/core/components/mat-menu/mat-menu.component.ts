import { Component, input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { SubMenuLinkContent } from '@core/types/sub-menu-link-content.interface';

@Component({
  selector: 'app-mat-menu',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatFabButton,
    MatMenuItem,
    RouterLink,
  ],
  templateUrl: './mat-menu.component.html',
  styleUrl: './mat-menu.component.scss',
})
export class MatMenuComponent {
  info = input.required<SubMenuLinkContent>();
}
