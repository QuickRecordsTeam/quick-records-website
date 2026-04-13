interface ImportMetaEnv {
  readonly VITE_ON_BOARDING_URL: string;
  readonly VITE_LOGIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}