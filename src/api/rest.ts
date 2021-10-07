import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse
} from 'axios'
import { ApiResponse, PlainObject } from '@/types'
import { ApiErrorResponse } from '@/types'
import { LabelText } from '@/resources/LabelText'
import { ApiError } from '.'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const get = <T>(
  url: string,
  params: PlainObject = {}
): Promise<ApiResponse<T>> => {
  return handlePromise<T>(instance.get(url, { params }))
}

function handlePromise<T>(axiosPromise: AxiosPromise): Promise<ApiResponse<T>> {
  return new Promise<ApiResponse<T>>((resolve, reject) => {
    axiosPromise
      .then((response: AxiosResponse) => {
        resolve(response as ApiResponse<T>)
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch(({ request, message, response }: AxiosError<any>) => {
        if (request && !response) {
          return reject(new ApiError(LabelText.NO_CONNECTION))
        }

        if (response) {
          const apiResponse: ApiErrorResponse = {}

          if (response.status) {
            apiResponse.status = response.status
          }

          if (response.data.message) {
            message = response.data.message
          }

          apiResponse.body = response.data

          return reject(new ApiError(message, apiResponse))
        }

        return reject(new ApiError(message))
      })
  })
}
