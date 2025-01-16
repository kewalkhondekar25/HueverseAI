"use client"

import { useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  const { isLoaded, isSignedIn, user} = useUser();
  console.log(user);
  
  return (
    <div>
      <h3>Dashboard</h3>
      <p>{user?.firstName}</p>
      <p>{user?.fullName}</p>
      <p>{user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  )
}

export default page