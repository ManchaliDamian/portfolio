import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
})

