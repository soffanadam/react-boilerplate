import React from 'react'
import Avatar from './components/Avatar'
import { LabelText } from './resources/LabelText'
import { TestID } from './resources/TestID'

function App() {
  return (
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
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
