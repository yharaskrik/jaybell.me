import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    styles: [
        `
            .hero {
                place-items: start center;
            }
        `,
    ],
    template: `
        <section class="z-10 flex w-full flex-1 flex-col">
            <div class="hero flex-1">
                <div class="bg-opacity-60"></div>
                <div class="hero-content text-white">
                    <div class="max-w-md md:max-w-[80%]">
                        <h1
                            class="relative mb-5 w-fit text-3xl font-bold before:absolute before:left-[98%]
                     before:top-[70%] before:-z-10 before:h-5 before:w-5 before:translate-y-0
                     before:bg-primary before:transition-all before:duration-500 after:absolute after:left-[-15px]
                     after:top-[70%] after:-z-10 after:h-5 after:w-5 after:translate-y-0 after:bg-primary after:transition-all
                     after:duration-500 hover:before:translate-y-[-20px] hover:after:translate-y-[-20px] md:text-5xl">
                            Hi there! I'm Jay Bell, CTO/Co-Founder of
                            <a href="https://trellis.org/" target="_blank" rel="noreferrer noopener">
                                Trellis.org
                            </a>
                        </h1>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            With over 10 years of experience, I've been steering the technical direction of Trellis
                            since its inception in 2018 alongside my friend Justin. Our mission is to Empower
                            Global Collective Impact. Learn how we are doing that from our
                            <a href="https://trellis.org/blog/" target="_blank" rel="noreferrer noopener">
                                main blog
                            </a>
                            and our more
                            <a href="https://tech.trellis.org/" target="_blank" rel="noreferrer noopener">
                                technical focused blog
                            </a>
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            Born and raised in Canada, I've dabbled in various entrepreneurial ventures, from
                            drones to software and mobile apps. My passion for technology and innovation led me to
                            co-found Trellis.org.
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            I specialize in a range of technologies and domains, including Nx, Angular, Nest,
                            DevOps, CI/CD, startups, entrepreneurship, TypeScript, GraphQL, and NgRx.
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            I'm an active open-source contributor (checkout my contributions on my
                            <a href="https://github.com/yharaskrik" target="_blank" rel="noreferrer noopener">
                                Github
                            </a>
                            !), an
                            <a
                                href="https://developers.google.com/profile/u/jaycooperbell"
                                target="_blank"
                                rel="noreferrer noopener">
                                Angular GDE
                            </a>
                            , and an
                            <a href="https://nx.dev/community" target="_blank" rel="noreferrer noopener">
                                Nx Champion
                            </a>
                            . You can catch me co-hosting
                            <a href="https://twitter.com/AngularShow" target="_blank" rel="noreferrer noopener">
                                The Angular Plus Show
                            </a>
                            and
                            <a
                                href="https://www.youtube.com/@ThisisTechTalks"
                                target="_blank"
                                rel="noreferrer noopener">
                                This is Tech Talks
                            </a>
                            .
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            I am an
                            <a
                                href="https://developers.google.com/profile/u/jaycooperbell"
                                target="_blank"
                                rel="noreferrer noopener">
                                Angular GDE
                            </a>
                            ,
                            <a href="https://nx.dev/community" target="_blank" rel="noreferrer noopener">
                                Nx Champion
                            </a>
                            , Host of The
                            <a href="https://twitter.com/AngularShow" target="_blank" rel="noreferrer noopener">
                                The Angular Plus Show
                            </a>
                            and
                            <a href="https://thisislearning.dev" target="_blank" rel="noreferrer noopener">
                                This Is Learning
                            </a>
                            . Occasionally I stream on Twitch/YouTube, you can find my previous streams
                            <a
                                href="https://www.youtube.com/channel/UCNSNsSjigIpbMwof4BjKmNA"
                                target="_blank"
                                rel="noreferrer noopener">
                                here
                            </a>
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            I'm deeply involved in fostering communities. I've facilitated and planned numerous
                            Startup Weekends and FuckUp nights, fostering innovation and learning among aspiring
                            entrepreneurs and other community members.
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            My academic journey includes a Diploma in Computer Systems: Operations and Management
                            from
                            <a href="https://www.tru.ca/">Thompson Rivers University</a>
                            and a Bachelor of Science, Major in Computer Science, Minor in Data Science from the
                            <a href="https://www.ubc.ca/">University of British Columbia</a>
                            .
                        </p>
                        <hr class="my-5" />
                        <div class="mb-5">
                            <h1 class="mb-5 w-fit text-3xl font-bold underline" id="angular-plus-show">
                                <a
                                    href="https://open.spotify.com/show/1PrLErQHBqBhZsRV1KHhGM?si=9e07c59d5f454cb3"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    The Angular Plus Show
                                </a>
                            </h1>
                            <img
                                class="my-5 w-full"
                                src="https://pbs.twimg.com/profile_banners/3863308092/1694019270/1500x500" />
                            <p class="mb-5 w-fit text-2xl font-bold">
                                The Angular Plus Show is the home of ng-conf's official all-Angular podcast. Come
                                here to stay up to date on the latest changes in the Angular community. Expect to
                                laugh and cry with us as we talk about our experiences as Angular developers. Come
                                join us to talk about all things Angular and Angular adjacent! With bonus episodes
                                from The Dev Life podcast!
                            </p>
                            <iframe
                                style="border-radius:12px"
                                src="https://open.spotify.com/embed/show/1PrLErQHBqBhZsRV1KHhGM?utm_source=generator&theme=0&t=0"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"></iframe>
                        </div>
                        <hr class="my-5" />
                        <div class="mb-5">
                            <h1 class="mb-5 w-fit text-3xl font-bold underline" id="chat-mtg">
                                <a href="https://chatmtg.app" target="_blank" rel="noreferrer noopener">ChatMTG</a>
                            </h1>
                            <p
                                class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]"
                                style="white-space: pre-wrap">
                                {{ chatMtgHelp() }}
                            </p>
                            <p class="mb-5 w-fit text-2xl font-bold underline">
                                <a href="https://chatmtg.app" target="_blank" rel="noreferrer noopener">
                                    Try ChatMTG out now by joining our Discord!
                                </a>
                            </p>
                        </div>
                        <hr class="my-5" />
                        <div class="mb-5">
                            <h1 class="mb-2 w-fit text-3xl font-bold underline" id="this-is-tech-talks">
                                <a
                                    href="https://www.youtube.com/@ThisisTechTalks"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    This is Tech Talks
                                </a>
                            </h1>
                            <p class="mb-2 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                                Check out the YouTube playlist below to watch the streams I have been a part of for
                                the This is Tech Talks show!
                            </p>
                            <div style="position:relative; padding-top:56.25%;">
                                <iframe
                                    src="https://www.youtube.com/embed/videoseries?si=jZZurannzfWyxp8v&amp;list=PL1L5nvJCnxRkJGztZDRUDl-XT4Lo96QqG"
                                    title="YouTube video player"
                                    frameborder="0"
                                    style="position:absolute; top:0; left:0; width:100%; height:100%;"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
})
export default class HomePage {
    protected readonly chatMtgHelp = toSignal<string>(
        inject(HttpClient)
            .get<{ text: string }>(`https://chat-mtg-backend.fly.dev/beacon/help`)
            .pipe(map((value) => value.text)),
        { initialValue: null }
    );
}
