import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'thesen/:index', loadChildren: () => import('./pages/thesis-page/thesis-page.module').then(m => m.ThesisPageModule) },
  { path: 'ergebnis', loadChildren: () => import('./pages/result-page/result-page.module').then(m => m.ResultPageModule) },
  { path: 'impressum', loadChildren: () => import('./pages/legal-notice-page/legal-notice-page.module').then(m => m.LegalNoticePageModule) },
  { path: 'datenschutz', loadChildren: () => import('./pages/privacy-page/privacy-page.module').then(m => m.PrivacyPageModule) },
  { path: 'faq', loadChildren: () => import('./pages/faq-page/faq-page.module').then(m => m.FaqPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
