import { defineConfig } from "astro/config";
import icon from "astro-icon";
import image from '@astrojs/image';

export default defineConfig({
  integrations: [icon()],
});
