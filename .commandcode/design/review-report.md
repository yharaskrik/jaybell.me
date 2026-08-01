# Design Review - jaybell.me

**Date:** 2026-08-01
**Mode:** `/design review`
**Score:** 25/50
**Verdict:** Competent execution of someone else's design. The site works, but it is a recolor of muratkirazkaya.com, not a portrait of Jay Bell.

## TL;DR

The site is clean, readable, fast, and ships a complete dark mode. It is also structurally identical to the reference site it was built from: same font stack, same CSS token names, same hero sentence grammar, same numbered-row work list, even the same secondary button label. The only authored decisions so far are a lavender accent and a dark mode. Nothing on the page could only be true of Jay Bell: no face, no numbers, no podcast artwork, no proof of the 10 years as CTO, the GDE, or ng-conf's official podcast. On top of the identity problem, the light-mode accent fails WCAG contrast (2.89:1) and the work rows advertise a clickability they do not have.

**Primary recommendation:** Run `/design voice` first. Decide what Jay's lane actually is (Angular red? Trellis? the podcast? the 40k workbench?) before touching anything else. Then `/design relayout` the homepage around proof only Jay could show, and `/design recolor` to fix the light-mode accent contrast.

## Heuristic Scores

| # | Heuristic | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | First impression | 4/10 | Reads as "clean developer portfolio template," not "Jay Bell." The 2-second sniff test returns no memorable color, shape, or claim. |
| 2 | Hierarchy | 6/10 | Kicker, headline, lede, CTAs, section rules all scan correctly. But the five "Things I'm up to" rows carry identical visual weight: a hobby app and a decade-long CTO role are peers. |
| 3 | Color voice | 5/10 | Disciplined whisper palette and a complete dark mode. But the accent fails light-mode contrast (2.89:1), and the lavender references nothing in Jay's actual brand world. It is a hue-rotation of the source site's orange. |
| 4 | Type voice | 5/10 | Measures, leading, and hierarchy are well executed. But Geist + Instrument Serif + DM Mono is the source site's exact stack, and Instrument Serif italic accent words are the most overused portfolio tell of the moment. |
| 5 | Interaction feel | 5/10 | No-flash dark mode bootstrap, full-card blog links, and a skip link are real. But focus rings are the 1px browser default, work rows fake a hover affordance, key links are 10px targets, and dead `group-hover` code ships in the bundle. |

## What I observed

Rendered the site locally (Eleventy dev server) at 1200px and 375px, in light and dark mode: home, about, blog index, blog post, podcast index. Pulled computed styles and CSS custom properties from both jaybell.me and muratkirazkaya.com. Walked the primary flow: arrive, read hero, scan work list, open blog, open post. Tested keyboard focus with Tab. Computed WCAG contrast ratios for all text-role color pairs.

## The clone, itemized (observed evidence)

| Element | muratkirazkaya.com | jaybell.me |
|---|---|---|
| Sans font | Geist | Geist |
| Serif font | Instrument Serif | Instrument Serif |
| Mono font | DM Mono | DM Mono |
| Token names | `--ink --ink2 --ink3 --surface --surface2 --surface3 --line` | `--color-ink --color-ink2 --color-ink3 --color-surface --color-surface2 --color-surface3 --color-line` |
| Canvas | `#f5f2eb` warm paper | `#f7f6f3` near-identical paper |
| Line token | `rgba(14,13,12,0.12)` | `rgba(22,21,29,0.12)` |
| Hero grammar | "I build systems that *actually run* businesses." | "I build software that *makes a difference*." |
| Hero device | serif with italic `<em>` accent phrase | serif with italic `<em>` accent phrase |
| Primary button | dark, mono, "See my work ↓" | dark, mono, "About me →" |
| Secondary button | outlined, mono, "GitHub / Open Source" | outlined, mono, "GitHub / Open Source" (verbatim) |
| Work list | numbered rows `01 - category`, serif title, description, gray tag pills, right mono meta column | numbered rows `01 - category`, serif title, description, gray tag pills, right mono meta column |
| Accent | `#c94a1e` burnt orange | `#9487d8` lavender (the only real departure) |

What Jay added on his own: dark mode with a no-flash bootstrap, section headers with rule lines, and the lavender accent. The dark mode is genuinely good work. It is also the only part of the page that is his.

## Priority issues

### P0 - The design answers "what does Murat's site look like" instead of "who is Jay Bell"

Every pattern on the page is inherited. If you swapped the names and links back, nothing about the design would break. The test from the brief: the hero proof object could be moved into an unrelated product without becoming wrong. "I build software that makes a difference" could belong to any developer on the internet. Murat's version is specific to him ("systems that actually run businesses" is a claim about self-hosted operational backends, which his work list then proves). Jay's claim is generic, and the rows below it do not prove it.

FIX: `/design voice` to pick Jay's actual lane, then rewrite the hero claim around something only he can say. Candidates with real evidence behind them: "ng-conf's official podcast," "10 years as CTO of a platform charities run on," "Angular GDE and Nx Champion." The claim must be provable by the rows beneath it.

### P0 - The most differentiated facts of Jay's career are flattened into identical list rows

ng-conf's official podcast, a Warhammer 40k companion app, the GDE/Nx Champion community role, a decade as CTO of a fundraising platform, and a YouTube show all get the same 5-line row, the same 3 gray pills, the same 10px link. Equal weight means no weight. There is also zero proof anywhere: no episode count, no donation volume, no talk count, no face, no artwork. A first-time visitor leaves knowing Jay's job titles and nothing about Jay.

FIX: `/design relayout` the homepage. Give the hero one piece of evidence (a number, a face, or the podcast mark). Break the five-row monotony: let the one or two things that matter most (Trellis, the podcast) be visually bigger than the rest. Bring real artifacts in: podcast artwork, episode counts, years, a photo.

### P1 - Light-mode accent fails WCAG contrast everywhere it is used as text

`#9487d8` on `#f7f6f3` computes to 2.89:1. It is used for the 11px kicker, 10px blog dates, inline links in the lede, and the hero's italic emphasis phrase. All fail AA (4.5:1 normal, 3:1 large). `ink3` (`#7d7a8a`, 3.87:1) fails AA on the 10-13px meta text it styles. Dark mode is fine (accent 8.74:1, ink3 5.00:1), which means light mode was never checked. For comparison, the source site's orange passes at 4.19:1.

FIX: `/design recolor`. Keep the lavender family if it is the chosen lane, but split roles: a darker accent for text-on-paper (~`#6a5aae` gets past 4.5:1) and the light lavender reserved for fills and dark mode. Bump `ink3` darker in light mode.

### P1 - Work rows advertise clickability they do not have

Each "Things I'm up to" row animates `background` and `padding-left` on hover, the universal signal for "this row is a link." Only the 10px "→" text at the far right is actually a link. Clicking the row does nothing. The affordance lies. The real links are also ~10px tall, far under the 44px touch-target floor.

FIX: `/design interaction`. Either make the whole row navigate (to the podcast page, the app, the GDE profile) or remove the hover theater. If rows stay inert, they should look inert. Link targets need real hit areas.

### P2 - Focus visibility is the browser default

Tabbing through the page shows Chrome's stock 1px blue outline (`rgb(0,95,204)`) on every control. It clashes with the lavender palette and sits below the 2-3px / 3:1 bar. There is no `:focus-visible` styling anywhere in `main.css`. The skip link exists and works, which makes the omission everywhere else more conspicuous.

FIX: `/design interaction`. Add a `:focus-visible` ring in the accent (2px, offset 2-3px) so keyboard users get a ring that belongs to this design system.

### P2 - Dead and sloppy interaction code ships in the page

The blog card's "Read →" span carries `group-hover:translate-x-1`, but the anchor has no `group` class, so that rule can never fire. `scroll-behavior: smooth` is set globally with no `prefers-reduced-motion` guard. The `<meta name="theme-color">` is hard-coded to `#9487d8` regardless of active theme. Small, but this is exactly the kind of residue a review exists to catch.

FIX: `/design finish`. Add `group` or delete the class, gate smooth scrolling behind a reduced-motion media query, and set theme-color per scheme.

## What's working

- **Dark mode done properly.** Class-based tokens, localStorage persistence, and a no-flash inline bootstrap before first paint. Contrast in dark mode passes across the board. This is the most authored thing on the site.
- **The skeleton is genuinely readable.** 860px measure, 15px base, 1.6 leading, restrained type scale. Nothing fights for attention. The section-rule headers are a good addition over the source.
- **Real data flows through it.** The blog and podcast pages merge on-site posts with Advocu/GDE activity. The podcast page renders a real, dated stream. That infrastructure is a differentiator the design currently wastes.
- **Responsive holds at 375px.** Rows stack, nav fits, nothing overflows. Mobile was not an afterthought.

## Recommended next moves, in order

1. `/design voice` - decide the lane: what color, what type, what artifact says "Jay Bell" and nobody else. This unlocks every other decision.
2. `/design relayout` - rebuild the homepage around proof: hero with one piece of evidence, weighted work section, podcast with real artwork.
3. `/design recolor` - fix light-mode accent contrast (2.89:1) and ink3 (3.87:1); tie the accent to something real.
4. `/design interaction` - focus rings, truthful row affordances, 44px targets.
5. `/design finish` - dead `group-hover`, reduced-motion guard, theme-color per scheme.

---
Generated with CommandCode - 2026-08-01
