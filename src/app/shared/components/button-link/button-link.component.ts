import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { MainColors } from '@shared/types/colors';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLinkComponent {
  @Input({ required: true }) link!: string;
  @Input() height: number | null = null;
  @Input() width: number | null = null;
  @Input() color: MainColors = 'primary';

  getRouterLink() {
    return `/${this.link}`;
  }
}
