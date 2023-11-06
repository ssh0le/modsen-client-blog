import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1440,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    video: false,
  },
});
