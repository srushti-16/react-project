

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-project/',  // Replace 'your-repository-name' with the actual name of your repo
});

