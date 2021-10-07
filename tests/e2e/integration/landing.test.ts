// landing.test.ts

import { defaultInit } from '../utils/testHelperUtils'
import { assertWelcomeTextSeen } from '../utils/testAppUtils'

describe('Landing', () => {
  defaultInit()

  it('should see welcome text', () => {
    assertWelcomeTextSeen()
  })
})
