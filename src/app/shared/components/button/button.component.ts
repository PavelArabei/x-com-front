import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainColors } from '@shared/types/colors';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: MainColors = 'primary';
  @Input() width: number | null = null;
  @Input() height: number | null = null;

  getWidth() {
    return this.width ? `${this.width}px` : '100%';
  }

  getHeight() {
    return this.height ? `${this.height}px` : 'auto';
  }
}
