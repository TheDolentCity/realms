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
      // components: {
      //   Sidebar: "./src/components/overrides/SidebarOverride.astro",
      // },
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/eb-garamond/index.css",
        "@fontsource-variable/crimson-pro/index.css",
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
          collapsed: true,
          items: [
            { label: "Overview", link: "/rules/overview" },
            { label: "Realm Actions", link: "/rules/realm-actions" },
            { label: "Realm Checks", link: "/rules/realm-checks" },
            { label: "Regent Checks", link: "/rules/regent-checks" },
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
          autogenerate: {
            directory: "realms",
          },
          // items: [
          //   {
          //     label: "Fairfield",
          //     autogenerate: { directory: "/realms/fairfield" },
          //   },
          //   {
          //     label: "The Flooded Vale",
          //     autogenerate: { directory: "/realms/the-flooded-vale" },
          //   },
          // ],
        },
        {
          label: "Great Houses",
          collapsed: true,
          autogenerate: {
            directory: "great-houses",
          },
        },
        {
          label: "Vassal Houses",
          collapsed: true,
          autogenerate: {
            directory: "vassal-houses",
          },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
