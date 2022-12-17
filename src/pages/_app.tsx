import type { AppProps } from 'next/app'

import ErrorBoundary from '@/components/ErrorBoundary'
import { GlobalCss } from '@/styles'

function App({ Component, pageProps }: AppProps) {
  GlobalCss()
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default App
