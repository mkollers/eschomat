import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CONFIG, Config } from 'src/config';

@Component({
  selector: 'eschomat-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqPageComponent {

  constructor(
    @Inject(CONFIG) public config: Config
  ) { }

}
