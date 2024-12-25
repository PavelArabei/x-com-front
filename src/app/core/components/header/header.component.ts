import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { toggleAnimation } from '@animations/toggle.animation';
import { HeaderNavComponent } from '@core/components/header/header-nav/header-nav.component';
import { HeaderProductsNavComponent } from '@core/components/header/header-products-nav/header-products-nav.component';
import { MainSearchComponent } from '@core/components/header/main-search/main-search.component';
import { ScrollEmitterService } from '@core/services/scroll-emitter/scroll-emitter.service';
import { combineLatest, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [toggleAnimation],
})
export class HeaderComponent implements OnInit {
  @Input() drawer!: MatSidenav;
  @Input() isHandset$: Observable<boolean> = of(true);
  protected shouldShowMenu$: Observable<boolean> = of(false);

  protected isOnTop$ = inject(ScrollEmitterService)
    .isOnTop$()
    .pipe(shareReplay());

  ngOnInit(): void {
    this.shouldShowMenu$ = combineLatest([this.isOnTop$, this.isHandset$]).pipe(
      map(([isOnTop, isHandset]) => {
        return isHandset || !isOnTop;
      }),
      shareReplay()
    );
  }
}
