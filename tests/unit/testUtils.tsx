import React, { JSXElementConstructor, ReactElement } from 'react'
import { render as baseRender } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootSaga from '@/sagas'
import rootReducer from '@/slices'
import createSagaMiddleware from '@redux-saga/core'
import { MemoryRouter } from 'react-router-dom'

interface RenderWithRouterOptions {
  route: string
  history: MemoryHistory
}

function render(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  }: RenderWithRouterOptions = {} as RenderWithRouterOptions
) {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
  })

  sagaMiddleware.run(rootSaga)

  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    )
  }

  return {
    ...baseRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history
  }
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
