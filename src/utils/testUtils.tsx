import React, { ReactElement } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

function setup(ui: ReactElement, route: string[] | undefined = undefined, options?: Omit<RenderOptions, 'wrapper'>) {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql', cache: new InMemoryCache() })
    return (
      <MemoryRouter initialEntries={route || undefined}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </MemoryRouter>
    )
  }

  return { user: userEvent.setup(), ...render(ui, { wrapper: AllTheProviders, ...options }) }
}

export * from '@testing-library/react'
export { setup as render }
