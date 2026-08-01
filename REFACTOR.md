# 0. Upgrade a packages

1. Update Nx using `nx migrate latest` and continue through with the steps.
2. Remove any unused packages
3. Update all other packages that remain

# 1. Cleanup repo

Remove anything cloudflare/wrangler

# 2. Convert site from Angular to 11ty

Remove Angular and rebuild entire site using 11ty

https://www.11ty.dev/docs/

To see how a site with 11ty is build right now view: `/Users/jaybell/WebstormProjects/trellisorg.github.io`

Tailwind setup: `/Users/jaybell/WebstormProjects/warhammer-horde`

# 3. Write my new site

1. It will mainly be a personal blog
2. Should have some info about me on an about page
3. my links/socials

Functionality:

1. Blogging
2. Spotify podcast player/something querying their API showing my The Angular Plus Show podcasts (https://open.spotify.com/show/1PrLErQHBqBhZsRV1KHhGM)
3. About/Info about me

The only info I want on their right now is:

1. The Angular Plus Show
2. Horde 40k app (../warhammer-horde)
3. Angular GDE/Nx Champion
4. Trellis
5. This is Tech Talks

# 4. Update theme and style

Refactor the tailwind setup to ensure its correct for 11ty

I want a new font and color scheme. Something modern, and techy, but clean and readable. I want the site to be relatively plain, and have dark and light modes available (https://tailwindcss.com/docs/dark-mode).

Inspiration site: https://muratkirazkaya.com/blogs/cluster-and-worker-threads-on-express
I really like how it is clean, simple, not flashy, has nice accents and colors.

Keep the lavender we have currently and use that for thr accent alongside the standard black and white, and whatever grey for subdued colors would look good.

# 5. Deployment to GitHub pages

Since we removed cloudflare, we will just want to set the repo up for gh pages (like `/Users/jaybell/WebstormProjects/trellisorg.github.io` is).

Do as much as you can (you have access to the `gh` cli for this blog repo) and then give me a guide for what I need to do manually
