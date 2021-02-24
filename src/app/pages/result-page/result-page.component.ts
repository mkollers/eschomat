import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { CalculationGrid } from 'src/app/shared/helper/constants/calculation-grid';
import { STORAGE } from 'src/app/shared/helper/injection-tokens/storage.injection-token';
import { Answer } from 'src/app/shared/helper/models/answer';
import { CONFIG, Config } from 'src/config';

@Component({
  selector: 'eschomat-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultPageComponent implements OnInit {
  result: { [party: string]: number } = {};
  possible: number = 0;

  constructor(
    @Inject(CONFIG) public config: Config,
    @Inject(INJECTOR) private _injector: Injector,
    @Inject(PLATFORM_ID) private _platformId: string
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._calculateResult();
    }
  }

  private _calculateResult() {
    const storage = this._injector.get(STORAGE);
    const result: { [party: string]: number } = this._initResult();

    for (let i = 1; i <= this.config.theses.length; i++) {
      const thesis = this.config.theses[i - 1];
      const answer = storage.getItem(i.toString());

      if (answer != Answer.SKIP && answer != null) this.possible += 2;

      for (const party in this.config.parties) {
        const position = thesis.evaluation[party];
        result[party] += CalculationGrid[answer || 'skip'][position.position];
      }
    }

    this.result = result;
  }

  private _initResult() {
    const result: { [party: string]: number } = {};

    for (const party of Object.keys(this.config.parties)) {
      result[party] = 0;
    }

    return result;
  }
}
