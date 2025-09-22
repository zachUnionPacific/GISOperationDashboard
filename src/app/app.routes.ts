import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationStatusComponent } from './pages/application-status/application-status.component';
import { FeatureLayerMappingComponent } from './pages/feature-layer-mapping/feature-layer-mapping.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },            // root goes to Dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'application-status', component: ApplicationStatusComponent },
  { path: 'feature-layer-mapping', component: FeatureLayerMappingComponent },
  { path: '**', redirectTo: '' },