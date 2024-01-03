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
        discord:
          'https://discord.com/channels/827358451113787402/1082374621782872155/1082375723815276694',
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
          label: 'Realms',
          autogenerate: {
            directory: 'realms',
          },
        },
        {
          label: 'Regents',
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
        {
          label: 'Setting',
          collapsed: true,
          autogenerate: {
            directory: 'setting',
          },
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
