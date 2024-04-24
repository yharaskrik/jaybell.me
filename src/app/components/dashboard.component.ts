import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFabMenu, MatFabMenuComponent } from '../fab/mat-fab-menu.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';

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
            <mat-fab-menu [fabButtons]="fabButtonsRandom" color="primary" icon="menu" />
        </main>
    `,
    imports: [RouterOutlet, NavbarComponent, FooterComponent, MatFabMenuComponent],
    host: {
        class: 'flex min-h-[100dvh] flex-col',
    },
})
export class DashboardComponent {
    protected readonly fabButtonsRandom: MatFabMenu[] = [
        {
            id: 'chat-mtg',
            imgUrl: '/assets/chat-mtg.png',
            fragment: 'chat-mtg',
        },
        {
            id: 'this-is-tech-talks',
            imgUrl: '/assets/this-is-tech-talks.png',
            fragment: 'this-is-tech-talks',
        },
        {
            id: 'angular-plus-show',
            imgUrl: '/assets/the-angular-plus-show.png',
            fragment: 'angular-plus-show',
        },
    ];
}
