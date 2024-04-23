import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <footer class="footer footer-center bg-primary p-10 text-primary-content">
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                        <img
                            src="https://pbs.twimg.com/profile_images/1658160987466526725/G2giqNzR_400x400.jpg"
                            width="80"
                            height="80"
                            aria-label="logo" />
                    </div>
                </div>
                <p class="font-bold">
                    Jay Cooper Bell.
                    <br />
                </p>
                <p>
                    Website structure and inspiration from:
                    <a href="https://mrrobot.dev/">https://mrrobot.dev/</a>
                </p>
            </div>
            <div>
                <ul class="grid grid-flow-col text-base xl:gap-8">
                    <li class="w-16 hover:text-base-100 hover:transition-all">
                        <a
                            href="https://twitter.com/JayCooperBell"
                            target="_blank"
                            rel="noreferrer noopener"
                            attr.aria-label="Jay Cooper Bell's Twitter">
                            <svg-icon key="twitter" fontSize="30px" height="30px" />
                        </a>
                    </li>
                    <li class="w-16 hover:text-base-100 hover:transition-all">
                        <a
                            href="https://github.com/yharaskrik"
                            target="_blank"
                            rel="noreferrer noopener"
                            attr.aria-label="Jay Cooper Bell's GitHub">
                            <svg-icon key="github" fontSize="30px" height="30px" />
                        </a>
                    </li>
                    <li class="w-16 hover:text-base-100 hover:transition-all">
                        <a
                            href="https://www.linkedin.com/in/jay-bell-b7017681/"
                            target="_blank"
                            rel="noreferrer noopener"
                            attr.aria-label="Jay Cooper Bell's LinkedIn">
                            <svg-icon key="linkedin" fontSize="30px" height="30px" />
                        </a>
                    </li>
                    <li class="w-16 hover:text-base-100 hover:transition-all">
                        <a
                            href="https://www.youtube.com/channel/UCNSNsSjigIpbMwof4BjKmNA"
                            target="_blank"
                            rel="noreferrer noopener"
                            attr.aria-label="Jay Cooper Bell's YouTube channel">
                            <svg-icon key="youtube" fontSize="30px" height="30px" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="https://analogjs.org/" target="_blank" rel="noreferrer noopener">
                    <img ngSrc="assets/powered_by_analog.webp" width="119" height="34.5" alt="Powered by Analog" />
                </a>
            </div>
        </footer>
    `,
    imports: [SvgIconComponent, NgOptimizedImage],
    host: {
        class: 'z-[99]',
    },
})
export class FooterComponent {
    protected readonly year = new Date().getFullYear();
}
