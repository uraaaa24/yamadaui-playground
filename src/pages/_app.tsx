import type { AppProps } from 'next/app'
import { Container, UIProvider } from '@yamada-ui/react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </UIProvider>
  )
}
