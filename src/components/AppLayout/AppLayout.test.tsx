import { graphql } from 'msw'
import { describe, it } from 'vitest'
import App from '../../App'
import { CharactersQuery, CharactersQueryVariables } from '../../gql/graphql'
import server from '../../mocks/server'
import { render, screen, waitFor } from '../../utils/testUtils'

describe('App Layout', () => {
  it('Renders App Layout', async () => {
    // ARRANGE
    render(<App />)
    // ACT
    // EXPECT
    await waitFor(() => expect(screen.getByText('RickQL')).toBeInTheDocument())
  })

  it('Allows Navigation to Home Using Logo', async () => {
    // ARRANGE
    const { user } = render(<App />)
    // ACT
    await user.click(screen.getByTestId('enso-logo'))
    // EXPECT
    await waitFor(() => expect(screen.getByRole('menuitem', { name: /Characters/i })).toBeInTheDocument())
  })

  it('Notifies User when backend fails', async () => {
    // ARRANGE
    server.use(
      graphql.query<CharactersQuery, CharactersQueryVariables>('Characters', (req, res, ctx) => {
        return res(ctx.status(500), ctx.errors([{ message: 'testErrorMessage', errorType: 'AuthenticationError' }]))
      }),
    )

    render(<App />)
    // ACT
    // EXPECT
    await waitFor(() =>
      expect(screen.getByText('Response not successful: Received status code 500')).toBeInTheDocument(),
    )
  })
})
