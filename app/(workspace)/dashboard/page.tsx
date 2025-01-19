"use client"
import { useAuth } from '@clerk/nextjs';
import React, { useEffect } from 'react'

const page = () => {
  const { getToken} = useAuth();

  const getSessionToken = async () => {
    const token = await getToken();
    // console.log("token", token);
  };

  useEffect(() => {
    getSessionToken();
  })
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
  )
}

export default page
