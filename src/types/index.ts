// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PlainObject<T = any> {
  [key: string]: T
}

//==============================================================================
// Model
//==============================================================================

export interface User {
  login: string
  name: string | null
  html_url: string
  avatar_url: string
  public_repos: number
}

//==============================================================================
// State
//==============================================================================

export interface UserState {
  user: User | null
  error: string
  loading: boolean
}

export interface RootState {
  userState: UserState
}

//==============================================================================
// API
//==============================================================================

export interface ApiResponse<T> {
  data: T
}

export interface ApiErrorResponse {
  status?: number
  body?: unknown
}
