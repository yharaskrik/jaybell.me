import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    template: `
        <main class="z-10 flex w-full flex-auto flex-col pt-6">
            <app-navbar />
            <div class="relative flex flex-auto">
                <router-outlet />
            </div>
            <app-footer />
            <!-- Animated circles container -->
            <div class="circle-container fixed">
                <ul class="circles">
                    @for (number of numbers; track $index) {
                        <li></li>
                    }
                </ul>
            </div>
        </main>
    `,
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    host: {
        class: 'flex min-h-[100dvh] flex-col',
    },
})
export class DashboardComponent {
    protected readonly numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
