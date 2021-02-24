import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CONFIG, Config } from 'src/config';

@Component({
  selector: 'eschomat-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  constructor(@Inject(CONFIG) public config: Config) { }
}
