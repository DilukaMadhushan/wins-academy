import React, { useEffect } from 'react'

export default function Logout() {
    useEffect(async() => {
        await localStorage.removeItem("isloggedin")
        window.location.href = "/login"
    }, [])
    
  return (
    <div>Logout</div>
  )
}
