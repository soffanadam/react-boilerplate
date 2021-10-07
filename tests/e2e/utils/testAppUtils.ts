// testLandingEnums.ts
// Utility functions to use in landing tests

import { LabelText } from '@/resources/LabelText'
import { TestID } from '@/resources/TestID'
import { testIDShouldContain } from './testHelperUtils'

const assertWelcomeTextSeen = () => {
  testIDShouldContain(TestID.WELCOME_TO_TEXT, LabelText.WELCOME_TO)
}

export { assertWelcomeTextSeen }
