import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rolldownOptions: {
            input: {
                ['case.events']: './src/main.tsx'
            }
        }
    }
});
