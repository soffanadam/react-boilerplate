// testHelperUtils.ts
// Utility functions used by all test specs

import { LabelText } from '@/resources/LabelText'
import { TestID } from '@/resources/TestID'
import { entryPoint } from './testHelperEnums'

const defaultInit = () => {
  before(() => {
    cy.visit(entryPoint)

    // wait for things to settle .. like waiting for Welcome Note to resolve
    // increasing due to occasional flaky starts
    cy.wait(200)
  })
}

const clickDynamicTestID = (dynamicTestID: string) => {
  cy.get(wrapWithTestIDTag(dynamicTestID)).click()
}

const clickTestID = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).click()
}

const getDynamicTestID = (testID: string) => {
  return cy.get(wrapWithTestIDTag(testID))
}

const getTestID = (testIDEnum: TestID) => {
  return cy.get(wrapWithTestIDTag(testIDEnum))
}

const testIDShouldContain = (testIDEnum: TestID, textEnum: LabelText) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('contain', textEnum)
}

const testIDShouldExist = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('exist')
}

const testIDShouldNotExist = (testIDEnum: TestID) => {
  cy.get(wrapWithTestIDTag(testIDEnum)).should('not.exist')
}

const wrapWithTestIDTag = (testIDEnum: TestID | string) => {
  return '[data-testid="' + testIDEnum + '"]'
}

export {
  clickDynamicTestID,
  clickTestID,
  getDynamicTestID,
  getTestID,
  testIDShouldContain,
  testIDShouldExist,
  testIDShouldNotExist,
  defaultInit,
  wrapWithTestIDTag
}
