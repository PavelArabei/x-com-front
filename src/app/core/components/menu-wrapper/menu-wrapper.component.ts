import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu-wrapper',
    standalone: true,
    imports: [
        NgClass,
        NgStyle
    ],
    templateUrl: './menu-wrapper.component.html',
    styleUrl: './menu-wrapper.component.scss'
})
export class MenuWrapperComponent {
    @Input({ required: true })isOnHover:boolean = false;
    @Input()rightDirection:boolean = false;
    @Input()width:number = 300;

    get widthInNecessaryFormat() {
        return `${this.width}px`;
    }
}
