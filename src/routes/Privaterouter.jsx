import React from 'react'
import { Navigate } from 'react-router-dom'

export const Privaterouter = ({Component,fallBackPath,isAllowed}) => {
    if (!!isAllowed) {
        return (
            <Navigate to={fallBackPath}/>
          )
    }
 
  return Component
}
