import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ryofu1210.github.io',
  integrations: [react(), tailwind({config: {path: './tailwind.config.cjs', applyBaseStyles: false} })]
});