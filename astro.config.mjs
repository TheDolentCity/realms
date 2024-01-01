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
          label: 'Introduction',
          link: '/introduction',
        },
        {
          label: 'Map',
          link: '/map',
        },
        {
          label: 'Realm Updates',
          link: '/realm-updates',
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
          label: 'Great Houses',
          autogenerate: {
            directory: 'great-houses',
          },
        },
        {
          label: 'Minor Houses',
          autogenerate: {
            directory: 'minor-houses',
          },
        },
        {
          label: 'Stewards',
          autogenerate: {
            directory: 'stewards',
          },
        },
        {
          label: 'Seats of Power',
          autogenerate: {
            directory: 'seats-of-power',
          },
        },
        {
          label: 'Setting',
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
