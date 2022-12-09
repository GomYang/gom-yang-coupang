import type { AppProps } from 'next/app'

import { GlobalCss } from "@/styles/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  GlobalCss()
  return <Component {...pageProps} />
}
