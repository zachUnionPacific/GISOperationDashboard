import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/application-status/dashboard.component';
import { ApplicationStatusComponent } from './pages/application-status/application-status.component';
import { FeatureLayerMappingComponent } from './pages/feature-layer-mapping/feature-layer-mapping.component';

export const routes: Routes = [
  { path: '', component: Dashboard },            // root goes to Dashboard
  { path: 'dashboard', component: Dashboard },
  { path: 'application-status', component: ApplicationStatusComponent },
  { path: 'feature-layer-mapping', component: FeatureLayerMappingComponent },
  { path: '**', redirectTo: '' },
];