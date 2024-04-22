import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: ` <app-dashboard />`,
    imports: [DashboardComponent],
})
export class AppComponent {}
