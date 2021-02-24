import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eschomat-footer, [eschomat-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'eschomat-footer'
  }
})
export class FooterComponent { }
