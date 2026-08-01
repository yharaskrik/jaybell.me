import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import { DateTime } from 'luxon';
import sitemapPlugin from '@quasibit/eleventy-plugin-sitemap';

export default function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // RSS Feed
    eleventyConfig.addPlugin(feedPlugin, {
        type: 'atom',
        outputPath: '/feed.xml',
        collection: {
            name: 'posts',
            limit: 10,
        },
        metadata: {
            language: 'en',
            title: 'Jay Bell',
            subtitle: 'Angular, Nx, open source, startups, and more from Jay Bell.',
            base: 'https://jaybell.me/',
            author: {
                name: 'Jay Bell',
                email: 'jay@jaybell.me',
            },
        },
    });

    // Sitemap
    eleventyConfig.addPlugin(sitemapPlugin, {
        sitemap: {
            hostname: 'https://jaybell.me',
        },
    });

    // Static files
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('CNAME');

    // Compiled CSS (gitignored intermediate output from the `css` script)
    eleventyConfig.addPassthroughCopy({ gen: 'css' });

    // Collections
    eleventyConfig.addCollection('posts', function (collectionApi) {
        return collectionApi
            .getFilteredByGlob('blog/*.md')
            .filter((item) => !item.data.draft)
            .reverse();
    });

    // Date filters (accept JS Date or ISO string)
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        if (!dateObj) return '';
        const dt = DateTime.isDateTime(dateObj)
            ? dateObj
            : dateObj instanceof Date
              ? DateTime.fromJSDate(dateObj, { zone: 'utc' })
              : DateTime.fromISO(dateObj, { zone: 'utc' });
        return dt.isValid ? dt.toFormat('dd LLL yyyy') : '';
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        if (!dateObj) return '';
        const dt = DateTime.isDateTime(dateObj)
            ? dateObj
            : dateObj instanceof Date
              ? DateTime.fromJSDate(dateObj, { zone: 'utc' })
              : DateTime.fromISO(dateObj, { zone: 'utc' });
        return dt.isValid ? dt.toFormat('yyyy-LL-dd') : '';
    });

    // Format an ISO date string from JSON data (episodes) without JS Date parsing quirks
    eleventyConfig.addFilter('formatDate', (isoString, fmt = 'dd LLL yyyy') => {
        if (!isoString) return '';
        const dt = DateTime.fromISO(isoString, { zone: 'utc' });
        return dt.isValid ? dt.toFormat(fmt) : isoString;
    });

    // Excerpt filter (reads up to the <!--more--> marker, falls back to a length cap)
    eleventyConfig.addFilter('excerpt', (content) => {
        const markerIndex = content.indexOf('<!--more-->');
        const excerpt = markerIndex >= 0 ? content.slice(0, markerIndex) : content;
        return excerpt.length > 200 ? excerpt.substring(0, 200) + '...' : excerpt;
    });

    // Utility filters
    eleventyConfig.addFilter('head', (array, n) => {
        if (!Array.isArray(array) || array.length === 0) return [];
        if (n < 0) return array.slice(n);
        return array.slice(0, n);
    });

    // True for external URLs (used to decide target/rel on links)
    eleventyConfig.addFilter('isExternal', (href) => {
        return typeof href === 'string' && href.startsWith('http');
    });

    // Merge internal posts and external posts into a single date-sorted stream.
    // Each internal item is normalized to { date, title, url, description, type, site, isExternal }.
    eleventyConfig.addFilter('mergeStream', (internalPosts, externalPosts) => {
        const internal = (internalPosts || []).map((post) => ({
            date: DateTime.isDateTime(post.date)
                ? post.date
                : post.date instanceof Date
                  ? DateTime.fromJSDate(post.date, { zone: 'utc' })
                  : DateTime.fromISO(post.date, { zone: 'utc' }),
            title: post.data.title,
            url: post.url,
            description: post.data.description || '',
            type: 'post',
            site: 'jaybell.me',
            isExternal: false,
        }));

        const external = (externalPosts || []).map((post) => ({
            date: DateTime.fromISO(post.publishDate || post.date || post.submittedDate, { zone: 'utc' }),
            title: post.title,
            url: post.link || post.url,
            description: post.description || '',
            type: 'post',
            site: post.platform || post.site || 'External',
            siteUrl: post.siteUrl || '',
            isExternal: true,
        }));

        return internal
            .concat(external)
            .filter((item) => item.date.isValid)
            .sort((a, b) => b.date - a.date);
    });

    // Posts from the GDE (Advocu) scraped data: items of type "Articles"
    eleventyConfig.addFilter('gdePosts', (activities) => {
        return (activities || [])
            .filter((a) => a.type === 'Articles')
            .map((a) => ({
                title: a.title,
                url: a.link,
                date: a.publishDate || a.submittedDate,
                description: a.description || '',
                tags: a.tags || [],
                platform: a.platform || 'Trellis Tech Blog',
                viewers: a.viewers,
                isExternal: true,
            }));
    });

    // Videos from the GDE (Advocu) scraped data: Podcasts, Videos, Public speaking
    eleventyConfig.addFilter('gdeVideos', (activities) => {
        return (activities || [])
            .filter((a) => ['Podcasts', 'Videos', 'Public speaking'].includes(a.type))
            .map((a) => ({
                title: a.title,
                url: a.link,
                date: a.publishDate || a.submittedDate,
                description: a.description || '',
                tags: a.tags || [],
                platform: a.platform || '',
                viewers: a.viewers,
                type: a.type,
                isExternal: true,
            }));
    });

    eleventyConfig.addFilter('filterTagList', function filterTagList(tags) {
        return (tags || []).filter((tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1);
    });

    return {
        dir: {
            input: '.',
            includes: '_includes',
            data: '_data',
            layouts: '_layouts',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    };
}
