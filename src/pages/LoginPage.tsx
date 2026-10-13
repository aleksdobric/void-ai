import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage(){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md card p-8">
        <h2 className="text-2xl font-semibold">Sign in to VOID AI</h2>
        <p className="text-sm text-secondaryText mt-2">Use your email to continue.</p>
        <form className="mt-6 flex flex-col gap-4">
          <input className="p-3 bg-transparent border border-border rounded" placeholder="Email" />
          <input className="p-3 bg-transparent border border-border rounded" placeholder="Password" type="password" />
          <div className="flex items-center justify-between">
            <label className="text-sm text-secondaryText"><input type="checkbox" className="mr-2"/> Remember me</label>
            <Link className="text-sm text-secondaryText">Forgot password?</Link>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white text-black rounded">Sign in</button>
            <Link to="/" className="px-4 py-2 border border-border rounded text-secondaryText">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
