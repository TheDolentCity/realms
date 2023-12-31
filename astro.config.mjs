import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Realms",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/TheDolentCity/realms",
        discord: "https://discord.com/channels/827358451113787402/1082374621782872155/1082375723815276694",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Great Houses",
          autogenerate: {
            directory: "great houses",
          },
        },
      ],
    }),
    tailwind(),
  ],
});
