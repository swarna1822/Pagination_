import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [react()],
      server: {
        allowedHosts: ['wx5q8v-5173.csb.app']
      }
  });
  