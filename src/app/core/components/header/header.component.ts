import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderNavComponent } from '@core/components/header-nav/header-nav.component';
import { MainSearchComponent } from '@core/components/main-search/main-search.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatIcon,
        AsyncPipe,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MainSearchComponent,
        HeaderNavComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    @Input() drawer!: MatSidenav;
    @Input() isHandset$!: Observable<boolean>;
}
