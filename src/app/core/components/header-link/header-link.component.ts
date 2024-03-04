import { AsyncPipe, TitleCasePipe } from '@angular/common';
import {
    Component, inject, Input, OnInit
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MenuWrapperComponent } from '@core/components/menu-wrapper/menu-wrapper.component';
import { ScrollEmitterService } from '@core/services/scroll-emitter/scroll-emitter.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-header-link',
    standalone: true,
    imports: [
        MatIcon,
        TitleCasePipe,
        AsyncPipe,
        MenuWrapperComponent,
        RouterLink,
    ],
    templateUrl: './header-link.component.html',
    styleUrl: './header-link.component.scss',
})
export class HeaderLinkComponent implements OnInit {
    @Input({ required: true }) svgName: string | null = null;
    @Input({ required: true }) svgText!: string;
    @Input({ required: true }) link!: string;
    @Input() rightDirection: boolean = false;

    private _scrollService = inject(ScrollEmitterService);
    isOnTop: Observable<boolean> | null = null;
    isOnHover: boolean = false;

    ngOnInit(): void {
        this.isOnTop = this._scrollService.isOnTop$().pipe(shareReplay());
    }
}
