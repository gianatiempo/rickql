import { graphql } from 'msw'
import { describe, it } from 'vitest'
import App from '../../App'
import { CharacterInfoQuery, CharacterInfoQueryVariables } from '../../gql/graphql'
import server from '../../mocks/server'
import { render, screen, waitFor, waitForElementToBeRemoved, within } from '../../utils/testUtils'

describe('Characters Info Page', () => {
  it('Show Rick Sanchez Info Page', async () => {
    // ARRANGE
    const { user } = render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
    await user.click(screen.getByText('Rick Sanchez'))
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    // ACT
    // EXPECT
    expect(screen.getByText('Episodes showcasing Rick Sanchez:')).toBeInTheDocument()
  })

  it('Show Episodes', async () => {
    // ARRANGE
    const { user } = render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
    await user.click(screen.getByText('Rick Sanchez'))
    // await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    // ACT
    // EXPECT
    expect(screen.getByText('Pilot')).toBeInTheDocument()
    expect(screen.getByText('Close Rick-counters of the Rick Kind')).toBeInTheDocument()
  })

  it('Show Characters in Pilot Episode', async () => {
    // ARRANGE
    const { user } = render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
    await user.click(screen.getByText('Rick Sanchez'))

    expect(screen.getByText(/select an episode to see included characters/i)).toBeInTheDocument()
    // ACT
    const row = screen.getByRole('row', { name: /pilot december 2, 2013 19/i })
    await user.click(within(row).getByRole('radio'))

    // EXPECT

    expect(screen.getByRole('cell', { name: /canklanker thom/i })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: /hookah alien/i })).toBeInTheDocument()
  })

  it('Notifies User when backend fails', async () => {
    // ARRANGE
    server.use(
      graphql.query<CharacterInfoQuery, CharacterInfoQueryVariables>('CharacterInfo', (req, res, ctx) => {
        return res(ctx.status(500), ctx.errors([{ message: 'testErrorMessage', errorType: 'AuthenticationError' }]))
      }),
    )

    const { user } = render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
    await user.click(screen.getByText('Rick Sanchez'))

    // ACT
    // EXPECT
    await waitFor(() =>
      expect(screen.getByText('Response not successful: Received status code 500')).toBeInTheDocument(),
    )

    await user.click(screen.getByText('Reset and Try again'))
    await user.click(screen.getByText('Back to Login'))
    await user.click(screen.getByText('Rick & Morty Characters'))
  })
})
