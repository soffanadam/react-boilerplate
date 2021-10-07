import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserRequest } from '@/api'
import { getUser, getUserSuccess, getUserError } from '@/slices/user'
import { PayloadAction } from '@reduxjs/toolkit'
import { ApiResponse, User } from '@/types'

function* getUserHandler({ payload: userName }: PayloadAction<string>) {
  try {
    const { data: user }: ApiResponse<User> = yield call(
      getUserRequest,
      userName
    )

    yield put(getUserSuccess(user))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const message: string = error.message
    yield put(getUserError(message))
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* userSaga() {
  yield takeLatest(getUser.type, getUserHandler)
}

export default userSaga
