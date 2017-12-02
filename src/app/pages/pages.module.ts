import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { StudentComponent } from './student/student.component';

const PAGES_COMPONENTS = [
  PagesComponent, DashboardComponent,StudentComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,   
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
