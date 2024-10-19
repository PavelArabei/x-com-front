import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-main-search',
    standalone: true,
    imports: [MatIcon, FormsModule],
    templateUrl: './main-search.component.html',
    styleUrl: './main-search.component.scss',
})
export class MainSearchComponent {}
