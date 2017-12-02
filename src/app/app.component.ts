import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    constructor(private analytics: AnalyticsService) {
    }
  
    ngOnInit(): void {
      this.analytics.trackPageViews();
    }
}
