// example.test.ts
// Just an ordinary sample test

import { defaultInit } from '../utils/testHelperUtils'
import { assertWelcomeTextSeen } from '../utils/testLandingUtils'

describe('Landing', () => {
  defaultInit()

  it('should see welcome text', () => {
    assertWelcomeTextSeen()
  })
})
