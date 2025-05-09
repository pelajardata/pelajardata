/// <reference types="vite/client" />


declare module 'vite' {
  export function defineConfig(config: any): any;
}

declare module '@vitejs/plugin-react' {
  const plugin: any;
  export default plugin;
}
