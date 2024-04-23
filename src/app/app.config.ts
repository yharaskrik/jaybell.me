import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { analogIcon } from './svg/analog';
import { githubIcon } from './svg/github';
import { linkedinIcon } from './svg/linkedin';
import { logoRegIcon } from './svg/logo_reg';
import { twitterIcon } from './svg/twitter';

const svgIcons = [analogIcon, githubIcon, linkedinIcon, logoRegIcon, twitterIcon];

export const appConfig: ApplicationConfig = {
    providers: [
        provideFileRouter(
            withViewTransitions(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
            })
        ),
        provideHttpClient(withFetch()),
        provideClientHydration(),
        provideContent(withMarkdownRenderer()),
        provideSvgIcons([...svgIcons]),
    ],
};
