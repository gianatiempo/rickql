import '@testing-library/jest-dom/extend-expect'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import fetch from 'isomorphic-fetch'
import { expect, beforeAll, afterEach, afterAll, vi } from 'vitest'
import server from './mocks/server'

// this is for jest-canvas-mock (we need to mock canvas for QRCode to work in tests)
// @ts-expect-error: Global type missing
global.jest = vi
global.fetch = fetch
global.window = window

expect.extend(matchers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => {
  server.resetHandlers()
  cleanup()
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
