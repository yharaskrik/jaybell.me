import { afterNextRender, Component, inject } from '@angular/core';
import {
    NavigationEnd,
    Router,
    RouterLink,
    RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-navbar',
    standalone: true,
    host: {
        class: 'z-[100]',
    },
    template: `
        <nav class="navbar max-h-20 bg-primary text-primary-content">
            <div class="navbar-start mr-3 lg:justify-start">
                <div #dropdownButton class="dropdown lg:hidden">
                    <label
                        (click)="toggleDropdown(dropdownButton)"
                        tabindex="0"
                        class="btn btn-circle btn-ghost"
                        aria-haspopup="true"
                        aria-label="Open menu"
                        aria-expanded="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu dropdown-content rounded-box menu-sm z-[99] mt-1 w-52 bg-white p-2 shadow"
                        role="menu"
                    >
                        @for (link of links; track link.name) {
                            <li>
                                <a
                                    href="{{ link.path }}"
                                    [class.active]="activeLink === link.path"
                                    (click)="
                                        linkClick(
                                            $event,
                                            dropdownButton,
                                            link.path
                                        )
                                    "
                                    >{{ link.name }}</a
                                >
                            </li>
                        }
                    </ul>
                </div>
                <ul
                    class="menu menu-horizontal hidden px-1 text-base lg:flex xl:gap-8"
                >
                    @for (link of links; track link.name) {
                        <li
                            class="relative block w-fit text-xl after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:[&:not(&:has(a.active))]:scale-x-100"
                        >
                            <a
                                routerLink="{{ link.path }}"
                                routerLinkActive="active"
                                [routerLinkActiveOptions]="{ exact: true }"
                                class="hover:outline-none hover:[&:not(.active)]:bg-transparent"
                                >{{ link.name }}</a
                            >
                        </li>
                    }
                </ul>
            </div>
            <div
                class="navbar-center ml-4 mr-4 font-semibold text-primary-content sm:text-3xl"
            >
                Jay Cooper Bell
            </div>
            <div class="navbar-end">
                <div class="avatar">
                    <div
                        class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 hover:h-auto hover:w-28 hover:ring-secondary-focus hover:transition-all"
                    >
                        <a routerLink="/home"
                            ><img
                                src="https://pbs.twimg.com/profile_images/1658160987466526725/G2giqNzR_400x400.jpg"
                                width="80"
                                height="80"
                                alt="Jay Cooper Bell logo"
                                aria-label="Jay Cooper Bell logo"
                        /></a>
                    </div>
                </div>
            </div>
        </nav>
    `,
    imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
    protected readonly router = inject(Router);

    protected readonly links = [{ name: 'Home', path: '/home' }];

    protected activeLink = '';

    constructor() {
        afterNextRender(() => {
            this.router.events
                .pipe(
                    filter(
                        (event): event is NavigationEnd =>
                            event instanceof NavigationEnd
                    )
                )
                .subscribe((event: NavigationEnd) => {
                    this.activeLink = event.urlAfterRedirects;
                });
        });
    }

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
