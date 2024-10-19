import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ScrollEmitterService {
    private _isOnTop$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    public isOnTop$() {
        return this._isOnTop$.asObservable();
    }

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const getWindowScrollPosition = () =>
                window.scrollY || this.document.documentElement.scrollTop;
            const windowPosition = getWindowScrollPosition();
            if (windowPosition !== 0) this._isOnTop$.next(false);

            fromEvent(window, 'scroll')
                .pipe(
                    map(() => getWindowScrollPosition()),
                    debounceTime(20)
                )
                .subscribe((scrollPosition) => {
                    const previousIsOnTopValue = this._isOnTop$.value;

                    if (scrollPosition === 0 && !previousIsOnTopValue)
                        this._isOnTop$.next(true);
                    if (scrollPosition !== 0 && previousIsOnTopValue)
                        this._isOnTop$.next(false);
                });
        }
    }
}
