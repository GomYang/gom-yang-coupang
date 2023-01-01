import Head from 'next/head'

import { SampleButton } from '@/components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta content="Gomyang Home" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          height: '100vh',
          justifyContent: 'center',
          width: '100vw',
        }}
      >
        <div>🐻 Welcome to Gomyang Coupang Home 🐑</div>
        <SampleButton
          designType={{
            '@initial': 'alert',
            '@tablette': 'primary',
          }}
        >
          Enjoy Coding
        </SampleButton>
      </main>
    </div>
  )
}
