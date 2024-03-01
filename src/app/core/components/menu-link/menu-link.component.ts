import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-menu-link',
    standalone: true,
    imports: [
        MatIcon
    ],
    templateUrl: './menu-link.component.html',
    styleUrl: './menu-link.component.scss'
})
export class MenuLinkComponent {
    @Input()svgName:string | null = null;
    @Input()IsNested:boolean = false;
}
