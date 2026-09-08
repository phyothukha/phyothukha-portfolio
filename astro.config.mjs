import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://phyothukha-portfolio.vercel.app",
  output: "static",
  integrations: [sitemap()],
});
