import React from 'react'
import { mocked } from 'ts-jest/utils'
import { render } from '../testUtils'

import { userState } from '@/selectors'
import { User } from '@/containers/User'
import { useDispatch } from 'react-redux'

jest.mock('@/selectors')
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

const mockedUserState = mocked(userState, true)
const mockedUseDispatch = mocked(useDispatch, true)

describe('<User />', () => {
  it('should show avatar', async () => {
    mockedUserState.mockImplementation(() => {
      return {
        user: {
          login: 'soffanadam',
          id: 10701978,
          node_id: 'MDQ6VXNlcjEwNzAxOTc4',
          avatar_url: 'https://avatars.githubusercontent.com/u/10701978?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/soffanadam',
          html_url: 'https://github.com/soffanadam',
          followers_url: 'https://api.github.com/users/soffanadam/followers',
          following_url:
            'https://api.github.com/users/soffanadam/following{/other_user}',
          gists_url: 'https://api.github.com/users/soffanadam/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/soffanadam/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/soffanadam/subscriptions',
          organizations_url: 'https://api.github.com/users/soffanadam/orgs',
          repos_url: 'https://api.github.com/users/soffanadam/repos',
          events_url:
            'https://api.github.com/users/soffanadam/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/soffanadam/received_events',
          type: 'User',
          site_admin: false,
          name: null,
          company: null,
          blog: '',
          location: null,
          email: null,
          hireable: null,
          bio: null,
          twitter_username: null,
          public_repos: 6,
          public_gists: 0,
          followers: 0,
          following: 0,
          created_at: '2015-01-26T02:09:40Z',
          updated_at: '2021-09-30T09:55:47Z'
        },
        error: '',
        loading: false
      }
    })

    mockedUseDispatch.mockImplementation(() => jest.fn)

    const component = render(<User />)
    expect(await component.findByText(/soffanadam/i)).toBeInTheDocument()
  })
})
