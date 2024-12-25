import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [
    MatIcon,
    FormsModule,
    MatFormFieldModule,
    MatInput,
    MatIconButton,
    MatFabButton,
  ],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss',
})
export class MainSearchComponent {
  searchText = '';
}
