import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TraficComponent } from './dashboard/trafic/trafic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[DashboardItemComponent,HeaderComponent,TraficComponent,ServerStatusComponent,TicketsComponent]
})
export class AppComponent {
}
