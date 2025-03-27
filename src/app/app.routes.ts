import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
  // Main content on the home route (for example):
  { path: '', component: MainContentComponent },
  // Privacy policy on its own route:
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  // ... other routes ...

  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: '**', redirectTo: '' } 
];