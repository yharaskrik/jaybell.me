import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { analogIcon } from './svg/analog';
import { githubIcon } from './svg/github';
import { linkedinIcon } from './svg/linkedin';
import { logoRegIcon } from './svg/logo_reg';
import { twitterIcon } from './svg/twitter';
import { youtubeIcon } from './svg/youtube';

const svgIcons = [analogIcon, githubIcon, linkedinIcon, logoRegIcon, twitterIcon, youtubeIcon];

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
        provideAnimationsAsync(),
    ],
};
