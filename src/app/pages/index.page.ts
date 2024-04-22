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
                <div class="hero-content text-primary-content">
                    <div class="max-w-md md:max-w-[80%]">
                        <h1
                            class="relative mb-5 w-fit text-3xl font-bold before:absolute before:left-[98%]
                     before:top-[70%] before:-z-10 before:h-5 before:w-5 before:translate-y-0
                     before:bg-primary before:transition-all before:duration-500 after:absolute after:left-[-15px]
                     after:top-[70%] after:-z-10 after:h-5 after:w-5 after:translate-y-0 after:bg-primary after:transition-all
                     after:duration-500 hover:before:translate-y-[-20px] hover:after:translate-y-[-20px] md:text-5xl"
                        >
                            Hello! I am Jay
                        </h1>
                        <p
                            class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]"
                        >
                            I am an Entrepreneur, Open source contributor,
                            Podcast host and speaker.
                        </p>
                        <p
                            class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]"
                        >
                            Born and raised in Canada, I have been involved in
                            starting four startups over the course of my career
                            but have been working on
                            <a href="https://trellis.org">Trellis.org</a> for
                            over six years now.
                        </p>
                        <p
                            class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]"
                        >
                            In 2018 I Co-Founded
                            <a href="https://trellis.org">Trellis.org</a> with
                            my friend Justin and have been working to empower
                            global collective impact since.
                        </p>
                        <p
                            class="mb-5 text-lg md:text-2xl md:leading-8 lg:leading-[3rem]"
                        >
                            I am an Angular GDE,
                            <a href="https://nx.dev/community">Nx Champion</a>,
                            Host of The
                            <a href="https://twitter.com/AngularShow"
                                >Angular Plus Show</a
                            >
                            and
                            <a href="https://thisislearning.dev">
                                This Is Learning
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,
})
export default class HomePage {}
