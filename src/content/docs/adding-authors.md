# Adding an Author to the Blog

To add a new author to the blog, you need to create a new markdown file on the [`src/content/authors`](../authors/) directory.

The file should be named with a slug to reference the author, meaning, it should be named with the author's name in lowercase and separated by hyphens. For example, if the author's name is "Jay Doe", the file should be named `jay-doe.md`.

The file should then have the following structure:

```markdown
---
name: Jay Doe
avatar: ./assets/jay-doe.jpg
avatarAlt: An alt text description of Jay Doe's avatar, this is used for accessibility purposes.
email: jay-doe@example.com
website: https://jay-doe.example.com/
socialMedia:
  Mastodon: https://mastodon.example.com/@jay-doe
---

A short bio about Jay Doe. This will be displayed on the author's page and on the footer for blog posts authored by them.

The bio is **markdown** content and will be processed before displaying.
```

The `avatar` field should point to an image file relative to the author's markdown file.

The `email` and `website` fields are _optional_. The `socialMedia` field is also _optional_ and should be a dictionary with the social media platforms the author wants to share, where the key is the social media name and the value is the URL for that platform.

## Referencing the author in a blog post

To reference the author in a blog post, you need to add the `author` field to the frontmatter of the markdown file. The value should be the slug of the author's markdown file.

For example, if the author's markdown file is named `jay-doe.md`, the frontmatter of the blog post should look like this:

```markdown
---
title: "Example blog post"
createdAt: 2020-01-01
author: jay-doe
---

...
```
