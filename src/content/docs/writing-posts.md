# Authoring Posts

This guide will help you with all the steps needed to write a post for the blog.

## Blog structure

The blog is located in the `src/content/blog` directory. Each post is a markdown file. The post name should only contain lowercase letters, numbers, and dashes. The post name should be descriptive and should not contain any special characters or spaces. That is because the names will be used to generate the post slug, and the slugs will be in the final URL when the post is published.

The posts are orgnized in sub-directories by year, and then by month.
Note that the post date is derived from the file metadata (more on that below). So the date does not _necessarily_ have to match the directory name, this is done to keep the posts more organized instead of using a flat hierarchy.

Putting that all together, the path to a post should look like this: `src/content/blog/2020/01/my-post.md`. Which will generate a post URL like this: `https://torontojs.com/blog/2020/01/my-post`.

## Post medatata

Each markdown file should start with a metadata block. This block is written in yaml, using [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/).

In short, it is a fenced block at the top of the file, with key-value pairs. The markdown file should look like this (optional fields are noted):

```markdown
---
### Required fields ###

# The post title as it will be displayed on the blog, social media and on search engines.
title: My Post Title

# A short sumamry of the post, used for social media previews and SEO.
summary: A short summary of the post.

# The date the post was created. It must be in a format parseable by JavaScript's Date object. It is advised to include the time and timezone to avoid ambiguity.
createdAt: 2020-01-01T00:00:00.000Z

# The slug for the author of the post. Please look at the docs about adding authors.
author: author-name

### Optional fields ###

# The hero image for the post, used on the post page, on social media and by search engines. It should be a relative path to the image from the post file.
image: ./relative/path/to/hero/image.jpg

# The alt text for the hero image. This is used for accessibility.
imageAlt: Description for the image.

# A flag marking if the post is still a draft. If true, the post will not be published on the blog.
draft: true

# The tags for the post. These are used to categorize the posts and to help users find related content. It should be a list of strings.
tags:
  - tag1
  - tag2

# The date the post was last updated. It must be in a format parseable by JavaScript's Date object. It is advised to include the time and timezone to avoid ambiguity.
updatedAt: 2020-12-310T00:00:00.000Z

# A list of changes made to the post. This is used to inform the readers of updates to the post. Should include both the "date" and "changes" fields.
updates:
  - date: 2020-01-02T00:00:00.000Z
    changes: A short description of the update.
  - date: 2020-06-12T00:00:00.000Z
    changes: Another update.
  - date: 2020-09-23T00:00:00.000Z
    changes: Yet another update.
---
The post text itself in _markdown_ format.
```

You can find more about the schema and validation used on the [post validation schema](../../schemas/blog.ts) file.

### A note about dates

The `createdAt`, `updatedAt`, and `updated.date` fields accept any date that can be parsed by JavaScript's `Date` object. That means your date can be only the date (like `2020-01-01`), or it can include the time (like `2020-01-01 00:00:00`), or even the timezone (like `2020-01-01T00:00:00.000-05:00`).

Keep in mind that due to how javascript works, the dates are always parsed using the timezone of the machine building the blog, so to avoid ambiguity, it is advised to include the timezone in the date.

Another importan thing to note is that the dates are parsed _automatically_ so you **should not** quote the dates.

## Writing the post

The post itself should be written in markdown. You can find a guide on how to write markdown [here](https://www.markdownguide.org/).
It may include images, code snippets and embedded iframes.

Please be mindful of the content you are writing. The blog is a public space and should be welcoming to everyone. Avoid using offensive language, and be respectful of others.

Avoid using copyrighted material without permission, and always give credit to the original authors.

Always include descriptive alt text for images and other media. This is used for accessibility and is important for users with disabilities.

## (Optional) Using Obsidian for writing

You can use whatever text editor you feel more confortable using, but we recommend using [Obsidian](https://obsidian.md/) for writing posts.

There is an Obsidian configuration already set up in the repository, you just need to open the `src/content` folder in Obsidian and start writing.

The only two thing to note are:

1. When referencing images on Obsidian, add the relative path to the images from the post file using `./` or `../` in the start of the file path. By default, Obsidian uses the relative path without these prefixes and it will break the blog build from astro's side.
2. Obsidian uses URL encoding on the image paths, so image names with spaces and other special characters will be encoded. This causes issues with the blog build.

So, for example, if you have an image in the same folder as the post file, you should reference it like this: `./image with space in the name.jpg`. If the image is in a folder above the post file, you should reference it like this: `../image with space in the name.jpg`.
