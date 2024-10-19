import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { IconRegisterService } from '@core/services/icon-register.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private readonly iconRegisterService: IconRegisterService =
        inject(IconRegisterService);

    public ngOnInit(): void {
        this.iconRegisterService.registerIcons();
    }
}
