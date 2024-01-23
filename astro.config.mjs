import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
    imageService: true,
    speedInsights: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      title: 'Realms',
      components: {
        Sidebar: './src/components/overrides/SidebarOverride.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
      social: {
        github: 'https://github.com/TheDolentCity/realms',
      },
      sidebar: [
        {
          label: 'Home',
          collapsed: false,
          items: [
            { label: 'Introduction', link: '/home/introduction' },
            { label: 'Realm Map', link: '/home/realm-map' },
            { label: 'Realm Updates', link: '/home/realm-updates' },
            { label: 'Game Setup', link: '/home/game-setup' },
          ],
        },
        {
          label: 'Rules',
          autogenerate: {
            directory: 'rules',
          },
        },
        {
          label: 'Setting',
          collapsed: true,
          autogenerate: {
            directory: 'setting',
          },
        },
        {
          label: 'Realms',
          collapsed: true,
          autogenerate: {
            directory: 'realms',
          },
        },
        {
          label: 'Regents',
          collapsed: true,
          autogenerate: {
            directory: 'regents',
          },
        },
        {
          label: 'Stewards',
          collapsed: true,
          autogenerate: {
            directory: 'stewards',
          },
        },
        {
          label: 'Great Houses',
          collapsed: true,
          autogenerate: {
            directory: 'great-houses',
          },
        },
        {
          label: 'Minor Houses',
          collapsed: true,
          autogenerate: {
            directory: 'minor-houses',
          },
        },
        {
          label: 'Seats of Power',
          collapsed: true,
          autogenerate: {
            directory: 'seats-of-power',
          },
        },
        {
          label: 'Burgs',
          collapsed: true,
          autogenerate: {
            directory: 'burgs',
          },
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
