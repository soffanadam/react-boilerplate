import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { LabelText } from '@/resources/LabelText'
import { Route } from 'react-router'
import { TestID } from '@/resources/TestID'
import { User } from './User'

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{LabelText.APP}</title>
      </Helmet>
      <div className="bg-white">
        <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
          <div className="text-center">
            <h2
              data-testid={TestID.WELCOME_TO_TEXT}
              className="text-base font-semibold tracking-wide text-blue-600 uppercase"
            >
              {LabelText.WELCOME_TO}
            </h2>
            <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
              {LabelText.APP}
            </p>
            <p className="text-xl text-gray-400">Start building for free.</p>
            <p className="mt-5">
              <Route path="/">
                <User />
              </Route>
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}
