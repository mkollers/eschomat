import { NgZone, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoadChildrenCallback, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FaqPageModule } from '@pages/faq-page/faq-page.module';
import { LegalNoticePageModule } from '@pages/legal-notice-page/legal-notice-page.module';
import { PrivacyPageModule } from '@pages/privacy-page/privacy-page.module';
import { ResultPageModule } from '@pages/result-page/result-page.module';
import { ThesisPageModule } from '@pages/thesis-page/thesis-page.module';

import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
    it('should create', () => {
        // Act
        const app = new AppRoutingModule();

        // Assert
        expect(app).toBeTruthy();
    });

    describe('routes', () => {
        let routes: Routes;
        let ngZone: NgZone;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    AppRoutingModule
                ]
            });

            const router = TestBed.inject(Router);
            ngZone = TestBed.inject(NgZone);
            routes = router.config;

            // Required to avoid console warning 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
            ngZone.run(() => {
                router.initialNavigation();
            });
        });

        const cases: { path: string, module: Type<any> }[] = [
            { path: 'thesen/:index', module: ThesisPageModule },
            { path: 'ergebnis', module: ResultPageModule },
            { path: 'impressum', module: LegalNoticePageModule },
            { path: 'datenschutz', module: PrivacyPageModule },
            { path: 'faq', module: FaqPageModule },
        ];
        for (const c of cases) {
            it(`should load ${c.module.name}`, async () => {
                // Arrange
                const route = routes.find(r => r.path === c.path);

                // Act
                const childs = await (route?.loadChildren as LoadChildrenCallback)();

                // Assert
                expect(childs).toBe(c.module);
            });
        }
    });
});