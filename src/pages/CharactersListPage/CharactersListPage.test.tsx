import { describe, it } from 'vitest'
import App from '../../App'
import { render, screen, waitFor, waitForElementToBeRemoved } from '../../utils/testUtils'

describe('Characters Page', () => {
  it('Show 20 initial characters', async () => {
    // ARRANGE
    render(<App />)
    // ACT
    // EXPECT
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 3000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Ants in my Eyes Johnson')).toBeInTheDocument()
  })

  it('Allows Navigation', async () => {
    // ARRANGE
    const { user } = render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'), { timeout: 3000 })
    await waitFor(() => expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument())
    // ACT
    await user.click(screen.getByText('2'))

    // EXPECT
    expect(screen.getByText('21-40 of 826 Characters')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('Aqua Morty')).toBeInTheDocument()
    expect(screen.getByText("Beth's Mytholog")).toBeInTheDocument()
  })
})
