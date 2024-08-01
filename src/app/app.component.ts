import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { SeverStatusComponent } from './dashboard/sever-status/sever-status.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SeverStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
