---
title: From Paper to Pixels: Building My AI-Powered Journal App for Mood Tracking
summary: Converting handwritten journals into digital insights with AI
image: ./assets/journal-app-project-hero.png
imageAlt: Journal app design layout
createdAt: 2025-03-13T10:15:33.760-05:00
tags:
  - blog
  - Project
  - AI
  - Journaling
  - Mental Health
authors:
  - marie
draft: false
---

Hey all!

I've been working on my personal project: MoodScribe for a while to solve my personal problem but hopefully solve for someone else who has a similar problem as me. In this post, I'll share how I came up with the idea, tech stack that I used, core implementations and so on.

## What is MoodScribe?

MoodScribe is a journal app that extracts text data from handwritten journal images, analyzes emotions, and tracks records. It enables you to grasp your emotional trends: what makes you feel happy or feel down to better understand yourself.

## My personal motivation

Writing journals by hand has been my habit for a decade, helping me better understand myself. However, it was really hard to keep all the notebooks from the past to the present. Additionally, I was hoping to observe myself more objectively, similar to the CBT(Cognitive Behavioral Therapy) method. I tried using digital apps a few times, but completely replacing the handwritten experience was difficult for me. This is when I came up with the idea. Yes, I made it for myself and those who are in similar situations.

## Tech stack overview

For MoodScribe, I selected a stack that balanced my existing expertise with the app's unique requirements:

### 🚀 [Next.js](https://nextjs.org)

I leveraged Next.js for its server-side rendering capabilities and built-in API routes, eliminating the need for a separate backend while providing optimal performance for a content-focused journal app.

### 🧠 [OpenAI API](https://openai.com)

The OpenAI API serves dual purposes: converting handwritten journal images to text through GPT-4o-mini's vision capabilities and performing nuanced sentiment analysis for mood scoring. Using one API for both tasks simplified the architecture considerably.

### 🔐 [Supabase](https://supabase.com)

Supabase provides a complete backend solution with authentication, PostgreSQL database, and storage capabilities. Its row-level security ensures users can only access their own journal entries, while the familiar SQL foundation means I'm working with technology I already know.

These technologies work seamlessly: journal images flow from the Next.js frontend to backend API communicating with OpenAI for processing, with results stored and retrieved via Supabase.

## Core Technical Implementation

### Image to Text Conversion

The system allows users to upload handwritten journal images through a simple file select/drag-and-drop interface. Once uploaded, the image is processed by OpenAI's GPT-4o-mini model, which:

- Extracts text content from the journal image (OCR)
- Analyzes emotional tone/sentiment
- Generates an appropriate title
- Scores the overall mood on a scale of 1-10
- Returns the response in JSON format for easy client-side handling

## User Interface Design

I built the Figma design from scratch to ensure cohesive design throughout the entire app, guided by principles from ["Refactoring UI"]("https://www.refactoringui.com/") by the Tailwind CSS creators. The app supports both:

![Visualize how card/calendar view look](./assets/journal-app-view-style.png)

- Card view: Quickly grasp the content of journals
- Calendar view: Visualize mood trends at a glance

The upload feature, being core to the app's functionality, is always accessible, sticking to the bottom of the feed for intuitive user interaction.

## Key Challenges Overcome

### Architectural Challenges

- Mixed data fetching and presentation logic in client components
- Security risks with client-side database queries
- Code duplication violating DRY principle

### Solutions Implemented

- Separated concerns by moving data fetching to server components
- Server-only package to enforce server-side data operations
- Centralized database queries in one file for easier maintenance

## What's Next for MoodScribe?

As we continue developing MoodScribe, here are some exciting features on the horizon:

- Better onboarding process
- Improved performance with infinite scroll
- Graph view to grasp the major trend of emotions
- AI-based advice on your behavior trends to help improve your thinking patterns

## Interested in trying it out?

MoodScribe is currently in beta version. If you're interested in trying it out feel free to access to [the link](https://moodscribe.vercel.app/).

I look forward to hearing your feedback!
