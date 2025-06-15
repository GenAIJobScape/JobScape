import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/JobScape/', // GitHub Pages 배포를 위한 base 경로 설정
  plugins: [react(), tailwindcss()],
});
