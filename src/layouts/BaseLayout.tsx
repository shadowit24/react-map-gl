import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

export const BaseLayout = (props: Props) => {
  return (
   <Outlet />
  )
}
