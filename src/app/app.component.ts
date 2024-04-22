import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { FooterComponent } from './components/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <app-dashboard />
        <!-- Animated circles container -->
        <div class="circles h-full w-full">
            @for (number of numbers; track $index) {
                <div></div>
            }
        </div>
    `,
    imports: [DashboardComponent, FooterComponent],
})
export class AppComponent {
    protected readonly numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
