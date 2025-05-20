import React from 'react'
import { useRouteError } from 'react-router'

type Props = {}

export const ErrorPage = (props: Props) => {
  const error = useRouteError()
  return (
    <div>{error?.stack}</div>
  )
}

