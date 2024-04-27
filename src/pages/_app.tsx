import "regenerator-runtime/runtime";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
