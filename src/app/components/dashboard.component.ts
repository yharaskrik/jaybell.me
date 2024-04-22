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
        </main>
    `,
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    host: {
        class: 'flex min-h-[100dvh] flex-col',
    },
})
export class DashboardComponent {}
