import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercelAdapter from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

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
      title: "Realms",
      components: {
        Sidebar: "./src/components/overrides/SidebarOverride.astro",
      },
      customCss: [
        "./src/styles/global.css",
        "@fontsource/im-fell-dw-pica/400.css",
        "@fontsource/averia-serif-libre/400.css",
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
          autogenerate: {
            directory: "rules",
          },
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
          autogenerate: {
            directory: "realms",
          },
        },
        {
          label: "Regents",
          collapsed: true,
          autogenerate: {
            directory: "regents",
          },
        },
        {
          label: "Stewards",
          collapsed: true,
          autogenerate: {
            directory: "stewards",
          },
        },
        {
          label: "Great Houses",
          collapsed: true,
          autogenerate: {
            directory: "great-houses",
          },
        },
        {
          label: "Minor Houses",
          collapsed: true,
          autogenerate: {
            directory: "minor-houses",
          },
        },
        {
          label: "Seats of Power",
          collapsed: true,
          autogenerate: {
            directory: "seats-of-power",
          },
        },
        {
          label: "Burgs",
          collapsed: true,
          autogenerate: {
            directory: "burgs",
          },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
