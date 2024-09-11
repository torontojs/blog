---
title: "TorontoJS TL;DR Issue #13"
createdAt: 2023-12-21T20:05:00
authors:
  - evert
summary: 🍾 This year, wrapped 🍾
tags:
  - TLDR
  - Newsletter
  - Community
---
_"I love deadlines. I love the whooshing noise they make as they go by." ― Douglas Adams_

Well, we've reached the last issue of TL;DR of the year, and the _first_ that's a week late! Oops! But we made it to 13 issues. Not bad! Perhaps we can double it next year.

Also, wow… what a wild year for our industry.

After years of growth, we've had the highest layoffs since the dotcom bubble in 2001. Many of which due to macro-economic trends, but of course also many companies taking advantage the downturn to get rid of people at a time everyone else does.

Many of us have felt the effects, either by being laid off and trying to find land the next gig or in our network. I wasn't spared myself! Certainly a humbling experience.

So here's hoping for a better year! We're not out of the woods yet.

## Upcoming events

We have one last [JS Code Club: Online](https://guild.host/events/js-code-club-online-gdr9gl) this year, happening this Saturday, the 23rd. Do you have a fun holiday project? This might be a great place to kick it off.

In the next year our first event will be a new [Code Buddy](https://guild.host/events/torontojs-code-buddy-kq8vnp) event on Discord. Code Buddy is like a book club, but instead of books the group will study tutorials and courses together. This is happening January 16th. Read all about it on [Guild](https://en.wikipedia.org/wiki/Metropolitan_Opera#Origins).

## The year in JS (by Marco Campos)

2023 went so fast, it seems like January 1st was yesterday! Lots of things happened on the web recently, so here are some reviews and highlights:

Let's start with this very thorough review from Kevin Powell on the new things happening in CSS in 2023:

<iframe src="https://www.youtube-nocookie.com/embed/LGRogkgRrOs" width="300" height="400" frameborder="no" scrolling="no" loading="lazy" allowtransparency="true" allowfullscreen="true" credentialless="true" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin" allow="accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; battery 'none'; browsing-topics 'none'; camera 'none'; display-capture 'none'; domain-agent 'none'; document-domain 'none'; encrypted-media 'none'; execution-while-not-rendered 'none'; execution-while-out-of-viewport ''; gamepad 'none'; geolocation 'none'; gyroscope 'none'; hid 'none'; identity-credentials-get 'none'; idle-detection 'none'; local-fonts 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; otp-credentials 'none'; payment 'none'; picture-in-picture 'none'; publickey-credentials-create 'none'; publickey-credentials-get 'none'; screen-wake-lock 'none'; serial 'none'; speaker-selection 'none'; usb 'none'; window-management 'none'; xr-spatial-tracking 'none'", csp="sandbox allow-scripts allow-same-origin"></iframe>

Safari (and in turn every browser on iOS) are getting even better support for PWAs, making them [almost usable in iOS](https://firt.dev/notes/pwa-ios/).

Here is a overview from WWDC 2023: [https://developer.apple.com/videos/play/wwdc2023/10120](https://developer.apple.com/videos/play/wwdc2023/10120)

On JS land, here is another video with a bit of irony on the changes in Javascript this year:

<iframe src="https://www.youtube-nocookie.com/embed/ANCm3oG7htM" width="300" height="400" frameborder="no" scrolling="no" loading="lazy" allowtransparency="true" allowfullscreen="true" credentialless="true" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin" allow="accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; battery 'none'; browsing-topics 'none'; camera 'none'; display-capture 'none'; domain-agent 'none'; document-domain 'none'; encrypted-media 'none'; execution-while-not-rendered 'none'; execution-while-out-of-viewport ''; gamepad 'none'; geolocation 'none'; gyroscope 'none'; hid 'none'; identity-credentials-get 'none'; idle-detection 'none'; local-fonts 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; otp-credentials 'none'; payment 'none'; picture-in-picture 'none'; publickey-credentials-create 'none'; publickey-credentials-get 'none'; screen-wake-lock 'none'; serial 'none'; speaker-selection 'none'; usb 'none'; window-management 'none'; xr-spatial-tracking 'none'", csp="sandbox allow-scripts allow-same-origin"></iframe>

On a more serious note, for all of you working with node and typescript: update to the latest LTS (version 20), set `type: module` on your `package.json`, and set `module: nodenext` and `target: es2022` on your `tsconfig.json`.

This will ensure you will have native ES modules running on node with the least amount of compilation from typescript. It will save you a lot of headaches with edge cases and quirks on module resolution and async code… ask me how I know! 🙃

## Happy holidays!

Hope you all get the rest you deserve and an excellent 2024, from Drey, Marco & Evert and all of the TorontoJS volunteer team!
