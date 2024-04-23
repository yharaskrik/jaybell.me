import { Component } from '@angular/core';

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
                            Hello! I am Jay
                        </h1>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            I am an Entrepreneur, Open source contributor, Podcast host and speaker.
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            Born and raised in Canada, I have been involved in starting four startups over the
                            course of my career but have been working on
                            <a href="https://trellis.org" target="_blank" rel="noreferrer noopener">Trellis.org</a>
                            for over six years now.
                        </p>
                        <p class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]">
                            In 2018 I Co-Founded
                            <a href="https://trellis.org" target="_blank" rel="noreferrer noopener">Trellis.org</a>
                            with my friend Justin and have been working to empower global collective impact since.
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
                                Angular Plus Show
                            </a>
                            and
                            <a href="https://thisislearning.dev" target="_blank" rel="noreferrer noopener">
                                This Is Learning
                            </a>
                        </p>
                        <div class="mb-5">
                            <h1 class="mb-5 w-fit text-3xl font-bold underline" id="angular-plus-show">
                                <a
                                    href="https://open.spotify.com/show/1PrLErQHBqBhZsRV1KHhGM?si=9e07c59d5f454cb3"
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    The Angular Plus Show
                                </a>
                            </h1>
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
                        <div class="mb-5">
                            <h1 class="mb-2 w-fit text-3xl font-bold underline" id="this-is-tech-talks">
                                <a href="https://www.youtube.com/@ThisisTechTalks">This is Tech Talks</a>
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
export default class HomePage {}
