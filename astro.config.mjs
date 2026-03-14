import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercelAdapter from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";

export default defineConfig({
  output: "static",
  adapter: vercelAdapter({
    imageService: true,
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      title: "Realms of Westmark",
      plugins: [starlightThemeRapide()],
      components: {
        // Sidebar: "./src/components/overrides/SidebarOverride.astro",
      },
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/crimson-pro/index.css",
        "@fontsource/monaspace-xenon/400.css",
        "@fontsource/monaspace-xenon/600.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TheDolentCity/realms",
        },
      ],
      sidebar: [
        {
          label: "Home",
          collapsed: false,
          items: [
            { label: "Introduction", link: "/home/introduction" },
            { label: "Realm Map", link: "/home/realm-map" },
            { label: "Realm Updates", link: "/home/realm-updates" },
            { label: "Game Setup", link: "/home/game-setup" },
          ],
        },
        {
          label: "Rules",
          collapsed: false,
          items: [
            { label: "Overview", link: "/rules/overview" },
            { label: "Actions", link: "/rules/actions" },
            { label: "Captions", link: "/rules/captions" },
            { label: "Writing Letters", link: "/rules/writing-letters" },
          ],
        },
        {
          label: "Setting",
          collapsed: true,
          autogenerate: {
            directory: "setting",
          },
        },
        {
          label: "Realms",
          collapsed: true,
          items: [
            // {
            //   label: "Fairfield",
            //   autogenerate: { directory: "/realms/fairfield" },
            // },
            {
              label: "Frostwatch",
              autogenerate: { directory: "/realms/frostwatch" },
            },
            // {
            //   label: "The Flooded Vale",
            //   autogenerate: { directory: "/realms/the-flooded-vale" },
            // },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
