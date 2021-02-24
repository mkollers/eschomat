import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticePageComponent } from './legal-notice-page.component';

describe('LegalNoticePageComponent', () => {
  let component: LegalNoticePageComponent;
  let fixture: ComponentFixture<LegalNoticePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalNoticePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalNoticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
