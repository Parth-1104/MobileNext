import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


// interface NavbarProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (isOpen: boolean) => void;
// }
