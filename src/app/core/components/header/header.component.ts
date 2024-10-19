import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderNavComponent } from '@core/components/header/header-nav/header-nav.component';
import { HeaderProductsNavComponent } from '@core/components/header/header-products-nav/header-products-nav.component';
import { MainSearchComponent } from '@core/components/header/main-search/main-search.component';
import { ScrollEmitterService } from '@core/services/scroll-emitter/scroll-emitter.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

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
        HeaderProductsNavComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    @Input() drawer!: MatSidenav;
    @Input() isHandset$!: Observable<boolean>;

    private _scrollService = inject(ScrollEmitterService);
    isOnTop: Observable<boolean> | null = null;

    ngOnInit(): void {
        this.isOnTop = this._scrollService.isOnTop$().pipe(shareReplay());
    }
}
