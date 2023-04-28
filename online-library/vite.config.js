import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import styleImport from 'vite-plugin-style-import'; // import the plugin

export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [{
        libraryName: 'bootstrap',
        esModule: true,
        resolveStyle: (name) => `bootstrap/dist/css/${name}.min.css`,
      }],
    }),
  ],
});
