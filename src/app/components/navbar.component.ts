import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    host: {
        class: 'z-[100]',
    },
    template: `
        <nav class="navbar max-h-20 bg-primary">
            <div class="navbar-start lg:justify-start">
                <ul class="menu menu-horizontal hidden px-1 text-base lg:flex xl:gap-4">
                    @for (link of links; track link.name) {
                        <li>
                            <a
                                class="text-black hover:outline-none hover:[&:not(.active)]:bg-transparent"
                                [routerLinkActiveOptions]="{ exact: true }"
                                [fragment]="link.path"
                                routerLink="."
                                routerLinkActive="active">
                                {{ link.name }}
                            </a>
                        </li>
                    }
                </ul>
            </div>
            <div class="navbar-center ml-4 mr-4 font-semibold text-primary-content sm:text-4xl">Jay Bell</div>
            <div class="navbar-end">
                <div class="avatar">
                    <div
                        class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 hover:h-auto hover:w-28 hover:ring-secondary-focus hover:transition-all">
                        <a routerLink="/home">
                            <img
                                src="https://pbs.twimg.com/profile_images/1658160987466526725/G2giqNzR_400x400.jpg"
                                width="80"
                                height="80"
                                alt="Jay Cooper Bell logo"
                                aria-label="Jay Cooper Bell logo" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `,
    imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
    protected readonly router = inject(Router);

    protected readonly links = [
        { name: 'Home', path: '' },
        { name: 'The Angular Plus Show', path: 'angular-plus-show' },
        { name: 'This is Tech Talks', path: 'this-is-tech-talks' },
        { name: 'ChatMTG', path: 'chat-mtg' },
    ];

    protected toggleDropdown(button: HTMLDivElement) {
        button.classList.toggle('dropdown-open');
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }

    protected linkClick(event: Event, parent: HTMLDivElement, route: string) {
        event.preventDefault();
        this.toggleDropdown(parent);
        this.router.navigate([route]);
    }
}
