# List of commands to run the project

## `npm install`

Installs all dependencies. You need to run it before starting the project.

## `npm run dev`

Starts the local development server at [`https://localhost:3000/`](https://localhost:3000/).
The command sets the site to be local so it overrides the `siteUrl` in the `astro.config.ts` file for the dev build. That is so you don't have to change configuration between local and production builds.

## `npm start`

Alias for `npm run dev`.

## `npm run build`

Builds your production site and outputs it to `./dist/`. This is the command ran on GitHub actions.

## `npm run preview`

Preview your build locally, it will serve the production build at [`https://localhost:3000/`](https://localhost:3000/).
This is usefull to test things that don't normally run during development, like service workers.

## `npm run astro ...`

Wrapper for the `astro` CLI commands. You can run `astro add`, `astro check`, and other commands using this.

## `npm run lint`

Checks the project for errors and fix most of them. This includes linting the TypeScript code with ESLint, the HTML/Astro code with Markuplint, and the CSS with Stylelint.

This is a sequence of the following commands:
  - `npm run typecheck` - Checks the TypeScript code
  - `npm run lint:js` - Lints the TypeScript code
  - `npm run lint:css` - Lints the CSS code
  - `npm run lint:md` - Checks markdown files using astro
  - `npm run lint:html` - Lints the HTML/Astro code

## `npm version`

Bumps the version of the project. This is used to generate the changelog and tag the release.

## `npm run build-assets`

Builds the PWA assets for the projects, like icons and images.
