import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/goit-react-hw-01/', 
  plugins: [react()],
});
