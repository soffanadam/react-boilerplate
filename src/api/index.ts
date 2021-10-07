import { ApiErrorResponse, User } from '@/types'
import { get } from './rest'

export const getUserRequest = (userName: string) =>
  get<User>(`users/${userName}`)

export class ApiError extends Error {
  response: ApiErrorResponse | null

  constructor(message: string, response: ApiErrorResponse | null = null) {
    super(message)
    this.response = response
  }
}
