import Avatar from '@/components/Avatar'
import { userState } from '@/selectors'
import { getUser } from '@/slices/user'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const User: React.FC = () => {
  // State
  const { user, loading, error } = useSelector(userState)

  // Handlers
  const dispatch = useDispatch()

  // Hooks
  useEffect(() => {
    if (!user && !loading) dispatch(getUser('soffanadam'))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <>{loading}...</>
  if (error) return <>{error}</>
  if (!user) return <></>

  return (
    <div className="flex justify-center items-center text-gray-500">
      <span className="mr-4">
        <Avatar size="large" src={user.avatar_url} />
      </span>
      {user.name || user.login}
    </div>
  )
}
