/// <reference path="../.astro/types.d.ts" />

declare module '*.webp' {
    export default value;
}

interface ImportMetaEnv {
    readonly RESEND_API_KEY: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
