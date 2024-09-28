---
title: "TorontoJS TL;DR Issue #5"
createdAt: 2023-08-23T11:11:00
authors:
  - drey
summary: This is a blog post about the JavaScript programming language. Like it, love it, hate it, it's here to stay.
tags:
  - TLDR
  - Newsletter
  - Community
---

How quickly time goes by!! We hope you had a great summer, filled with joy, expansion, learning more along your coding journey, as well as meeting new people through in person or online events. It was definitely an interesting summer with the up and down weathers. With fall on the way, the changing of weathers and leaves on the trees, this doesn't mean an end to in person or virtual events!

If you have anything to share for the next edition, find us on the [TorontoJS slack](https://torontojs.slack.com/).

# Contest!!!!

Daniel Stoianov from TorontoJS has built [a frontend quiz](https://frontend-safe-quiz.vercel.app/)!! so cool!! The first three people that solve the quiz by end of Friday at 11:59pm EST will receive a prize! Message Daniel on slack to verify the correct code!

![](./assets/7580c47a-9eb6-4aaf-8bd4-bab18d688420_2872x1334.png)

# Upcoming events

- August 30th is our monthly [JS Social: Online](https://guild.host/events/js-social-online-mrmfftyfclbnc). A great place to meet like minded individuals and chat about what you are currently working on or anything you have found fascinating as of late on your journey in tech!

Please look at our events calendar on [Guild](https://guild.host/torontojs/events) or [Meetup](https://www.meetup.com/torontojs/events/) for other upcoming events!

Also happening in Toronto:

- [Toronto MongoDB User Group at Microsoft Canadian Headquarters (In person) - September 5, 2023](https://www.meetup.com/toronto-mongodb-usergroup/events/295305674/)
- [Embracing Continuous Learning: Navigating Skill Development in Tech hosted by Tech Tank (Online) - September 6, 2023](https://www.linkedin.com/posts/chris-ty-kim_techtankembracingcontinuouslearningposter-activity-7099736998160056320-nPqu/)
- [[TechTalks] Loading...A deep dive into website and web app performance hosted by React Toronto (In person) - September 28, 2023](https://www.meetup.com/toronto-react-native/events/295575218/)

# Happening in the community

Lazar Nikolov writes and talks about [CSS Nesting](https://www.youtube.com/watch?v=dr6UAQUAiu4)! A new feature coming to modern browsers August 29th. CSS Nesting allows selectors to be nested inside other selectors. This helps with reducing code repetition, file size, organization and giving easier options to refactor.

Let's see an example without nesting:

```css
/* No nesting */
article.card {
	border: 1px solid lightgrey;
	border-radius: 6px;
	overflow: hidden;
}

article.card header {
	background: #f1f3f4;
	border-bottom: 1px solid lightgrey;
	padding: 16px;
}
```

This example can be written with nesting like this:

```css
/* With nesting */
article.card {
	border: 1px solid lightgrey;
	border-radius: 6px;
	overflow: hidden;

	& header {
		background: #f1f3f4;
		border-bottom: 1px solid lightgrey;
		padding: 16px;
	}
}
```

Check out the article on CSS Nesting [here](https://creatures.dev/blog/getting-started-with-css-nesting/)!

A few of folks in TorontoJS have started building a public TorontoJS member website, where people in the community can create public profiles and show off their projects. It's early in the building process, but there's a [Github Repo](https://github.com/torontojs/members). Join the Code Club if wanting to contribute!

# Industry News

React brings on documentation for [TypeScript](https://react.dev/learn/typescript)!!! How exciting!! It includes a walkthrough of how to add typescript to an existing React project as well as a walk through of learning [TypeScript with React Components](https://react.dev/learn/typescript#typescript-with-react-components), [examples of typing hooks](https://react.dev/learn/typescript#example-hooks), [common types from @types/react](https://react.dev/learn/typescript#useful-types), as well as [resources](https://react.dev/learn/typescript#further-learning) for further learning.

# Poll

Wow! With a total of 35 votes, 63% of folks choose to use Visual Studio Code as their main editor! Vim with 14% of voters! Finally, Sublime and WebStorm tied for 11% of votes!

What are commands, shortcuts or extensions that you use that are necessary for your day to day coding? We would love to know! Let us know in the comments :)

# Terminal Tip

If you want to quickly search for a command you've typed before, try `CTRL-R` to do a search over all previous commands in your history.

zsh (currently the default shell on mac, but highly recommended on other operating systems too) does a better job maintaining this list and tends to have better defaults if you're stuck on bash, you might at the very least want to increase how many entries are saved by setting the `HISTSIZE` environment variable to a much higher setting. This can be done in your ~/.bash_profile file.

# Jobs

If you have an open Job Posting relevant to the members of our community, please send an email to [events@torontojs.com](mailto:events@torontojs.com).

We'd love to link it in our next newsletter at no cost.
