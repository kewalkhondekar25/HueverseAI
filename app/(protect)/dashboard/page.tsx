"use client"

import { Button } from '@/components/ui/button';
import { useClerk, useUser } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  const { isLoaded, isSignedIn, user} = useUser();
  const { signOut } = useClerk();
  console.log(user);
  
  return (
    <div>
      <h3>Dashboard</h3>
      <p>{user?.firstName}</p>
      <p>{user?.fullName}</p>
      <p>{user?.primaryEmailAddress?.emailAddress}</p>
      <Button onClick={() => signOut()}>Sign Out</Button>

    </div>
  )
}

export default page