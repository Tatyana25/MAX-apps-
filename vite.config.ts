import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// GitHub Pages for this repo:
// https://<GH_USERNAME>.github.io/MAX-apps-/ -> base: '/MAX-apps-/'
export default defineConfig({
  plugins: [react()],
  base: '/MAX-apps-/'
=======
export default defineConfig({
  plugins: [react()]

});
