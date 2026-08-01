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
                email: 'jay@trellis.org',
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

    // Date filters
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(new Date(dateObj), { zone: 'utc' }).toFormat('dd LLL yyyy');
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(new Date(dateObj), { zone: 'utc' }).toFormat('yyyy-LL-dd');
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
