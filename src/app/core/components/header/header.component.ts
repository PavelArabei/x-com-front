import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatIcon, AsyncPipe, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    @Input() drawer!: MatSidenav;
    @Input() isHandset$!: Observable<boolean>;
}
