---
layout: post.njk
title: I am a deepseek billionaire
description: Kidding I only spent somewhere between $6 and $8.
date: 2026-08-04
tags:
    - ai
    - deepseek
    - tokens
---

I spent the weekend working on my Warhammer 40K application [The Animus](https://theanimus.app/), using mostly the
new `DeepSeek-V4-Flash-0731` to make a lot of small changes (and a few large ones). I am very very impressed with the
quality, speed and cost. Sure, it may not be quite as good at really large complex tasks as something like Fable, but wow,
it really got the job done.

I used somewhere between 1.1 billion and 1.4 billion tokens, for a total cost of $6-$8 coming in at around
$0.005–0.006 per million tokens. Pretty hard to beat that price, all through [Command Code](https://commandcode.ai/)

And no, these tasks weren't just: "go change this copy" or "add a button here"

I actually gave it long tasks that it would have to continue to work on for tens of minutes (and in some cases hours).
I think I even left it overnight one day...

I was particularly impressed when using it with Matt Pocock's [Wayfinder skill](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md).
I didn't even stop it, I don't know what Command Code/Deepseeks compaction is like (or if there is any), but I used Wayfinder
to do a big application wide refactor and I completed the entire multistep plan in a single chat session without ever explicitly compacting the context.

With the right guidance it was able to help me completely rebuild and bring up to standards my Angular tests thanks to

1. The [Angular Testing Cookbook](https://cookbook.marmicode.io/angular/testing)
2. High quality articles on testing best practices thanks to Artem Zakharchenko's [EpicWeb articles](https://www.epicweb.dev/contributors/artem-zakharchenko) on testing
3. Official [Playwright Best Practices](https://playwright.dev/docs/best-practices)
4. and, the [RxDB Angular Signals](https://rxdb.info/articles/angular-database.html) integration guide

If you haven't tried it yet, I would highly recommend it. Unfortunately, due to the overwhelming demand for the model due
to seemingly how good of a job Deepseek did re-post training the flash model, there are currently capacity issues. But if you can
use it, I suggest it! It is a great model, especially when you consider the price!

See it on Hugging Face [here](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)
