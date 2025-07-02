import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default () => {
  return defineConfig({
    plugins: [react()],
    server: {
      host: "127.0.0.1",
      port: 5000,
      strictPort: true
    }
  })
}