import { it } from 'vitest'
import App from './App'
import { render, screen, waitFor, waitForElementToBeRemoved } from './utils/testUtils'

it("The App It's Alive!", async () => {
  // ARRANGE
  render(<App />)
  // ACT
  // EXPECT
  await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 10000 })
  await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
})
