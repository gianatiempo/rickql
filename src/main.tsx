import { StrictMode } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

async function prepare() {
  if (import.meta.env.MODE === 'development') {
    const { default: worker } = await import('./mocks/browser')
    worker.start({
      onUnhandledRequest(request: { url: { href: string } }) {
        // avoid assets, fonts, images, or vite internal or auth middleware to be processed by mock server
        if (/(\/assets+)|(\/fonts+)|(\/images)|(\/__vite_ping)|(\/auth\/+)/.test(request.url.href)) {
          // eslint-disable-next-line no-useless-return
          return
        }
      },
    })
  }

  return Promise.resolve()
}

prepare().then(() => {
  const root = createRoot(document.getElementById('root') as HTMLInputElement)
  const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql', cache: new InMemoryCache() })
  root.render(
    <StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </StrictMode>,
  )
})
