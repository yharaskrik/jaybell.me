import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { FooterComponent } from './components/footer.component';
import { ParticlesComponent } from './components/particles.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <app-dashboard />
        @defer (on immediate) {
            <app-particles />
        }
    `,
    imports: [DashboardComponent, FooterComponent, ParticlesComponent],
})
export class AppComponent {}
