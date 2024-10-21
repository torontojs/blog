---
title: How to contribute to a large codebase?
summary: A step-by-step guide on contributing to open-source projects with thousands of lines of code
createdAt: 2024-10-18T12:33:00.000Z
tags:
  - open-source
  - Community
  - blog
authors:
  - zin
canonicalUrl: https://dev.to/zin_kg/how-to-contribute-to-a-large-codebase-2ho0
---

_A step-by-step guide on contributing to open-source projects with thousands of lines of code_

---

## Some background...

As a budding open-source contributor, I was at a loss when I found a lack of resources on how to get started. Other than a few good guides, most of the advice is general and, often, shallow. **I felt like the concrete steps were brushed off and left to the readers to figure out for themselves.** Which, in a sense, makes for a great learning experience. At the same time, I felt overwhelmed by the number of projects on GitHub, by the number of issues in major projects.

> Even for a developer with years of experience, approaching a new codebase takes domain-specific knowledge and patience. On top of that, errors thrown when navigating through the code maze may not even be due to a lack of skills - **poorly documented build guides, platform incompatibility**, etc., may explain why the repository you just cloned doesn’t work.

With that said, a pre-requisite before diving into a large codebase is to get familiar with contributing to small-to-medium-sized repositories. The best projects to contribute to are ones you’re most knowledgeable about, ones that you’re most familiar with.

> **But here’s the catch.** A lot of what we use daily may not be a simple library that solves one thing. It may well be a full-blown framework or a full-stack application. That’s why it’s important to have honed in on the foundational concepts and the semantics of your language. I don’t mean mastery - which is a continuous pursuit, rather than an accomplishment - I’m referring to an **attempt**.

**Your attempt at trying to master something.** For example, I wrote a few [npm modules](https://www.npmjs.com/settings/zin_kg/packages) to better familiarize myself with the native Node.js APIs. Why Node.js? Because my goal was/is contribute and learn from other web technologies built on the Javascript ecosystem. I’ll talk more about writing utilities in another guide.

For now, here’s my approach when dealing with a large open-source repository:

### 1. Use the tool so you understand, what some call, the business problem.

_How is it helping customers or developers?_

The ideal project to contribute to is one whose API you’ve been using regularly. Whose functions and classes you know well enough to integrate it into your applications and other projects. 

Familiarity with the public implementations lend itself to understanding the internal code better. If it’s a project you’re completely new to but are willing to dig into, the “Getting Started” guide from the official docs is a great starting point.

### 2. Start with the _what_.

Reading a codebase in general terms (the main functions, the entry point, the layers, etc.) is a good practice. But what’s even more effective? A targeted approach.

Trying to solve an issue and following the code trail that the problem leads to, may not cover as many lines of code as passively reading, but it puts to test your understanding of a small subset of the repository. Here's a task for you: open an issue you’ve run into (ideal) or pick up a manageable issue. This approach, **compounded over time, issues, and PRs**, can lead to deeper understanding.

It’s tricky to define ‘manageable’ because not every project owner assigns ‘good-first-issue’ or ‘up-for-grabs’ labels. And depending on the project, even issues with those beginner-friendly tags may still seem daunting. Which brings us to the next step.

### 3. Analyze how existing modules and tests are set up.

Take those as reference in laying out the structure of your code and tests. For example, when adding a new plugin, study how other integrations are written and copy the outline of the corresponding tests.

Doing so ensures that you’re following best practices that are **specific** to the repository at hand and staying in sync with other contributors’ code style.

### 4. Write down the build and test process.

Note-taking doesn’t get the credit it deserves especially in the software development circle. That’s because note-taking is a skill many haven’t mastered yet, or not willing to try at all.

Instead of looking for **patterns**, some mark everything down, quickly leading to burnout. Building and testing are processes at the core of most projects. They are the steps you take after making any sort of change. If you’re dealing with a repository more than once (not a [YOLO contribution](https://opensauced.pizza/blog/yolo-coder)), it’s worth the time to jot down exactly how a change in the code is tested.

Likewise, in a mono-repo, you don’t want to waste time trying to build and test every package when the changes you’ve made only affect one or a few. But wait, can’t the compiling and testing for one package be done via a script each? Probably yes. But when you’re fiddling with more than a single package and their workspace dependencies, the processes tend to involve a couple of steps.

_The practice is beneficial in 2 main ways:_

>**A)** When you return to an issue after taking a break, all the steps you’d taken last time are right before you. So, **you can focus on the problem-solving part immediately**, instead of trying to recall what you did the last time for building/testing/modifying configs.

>**B)** When tackling a similar issue, you can follow the same process, instead of figuring out the steps from scratch. This saves time! Which matters a lot when your goal is to ship quality features/fixes as quick as possible.


### 5. Apply forensics on the commit history of a particular block of code.

When figuring out why a piece of code is implemented, reviewing not only the related PRs, but also the surrounding discussion (comments, reviews, linked issues/PRs) leaves clues - **often outright solutions**. 

This step helps you learn about the thought process and the decisions that were formed by other contributors before you arrived. For example, you can check why the author introduced a new utility function or how a bug was fixed.

### 6. Take feedback from maintainers/major contributors to heart.

No one’s more familiar with the codebase than those who’ve spent months and years working on it. Try to fix the pain points that they’ve brought up, especially in a code review.

On the other hand, don’t be too sorry to point out their misunderstanding of the intent of your code or to state your doubt on their arguments. Open-minded senior devs are willing to elaborate and are, well, open to feedback themselves.

---

## Summary with Actions

**1. Use the product/library/framework.**

_Action: If it’s not a tool you’re already familiar with, try it out to get the hang of it. Start from the official docs._

**2. Follow a bottom-up approach.**

_Action: Open or pick up an issue. Analyze the necessary code files and functions as you try to solve the issue._

**3. Look at the structure of existing modules and tests.**

_Action: Analyze and apply a similar (or sometimes the same) structure to your code._

**4. Write down the build and test process.**

_Action: Record how exactly you compile and test the code involved in your PR._

**5. Learn from the past.**

_Action: Review the commit history and the related conversations, code reviews, and comments._

**6. Accept constructive feedback.**

_Action: Review and try to resolve the code reviews from senior contributors. Don’t hesitate to explain any misunderstanding._

Happy contributing!
