import React from 'react'
import { Link } from 'react-router-dom'

function Logo({ small=false }:{small?:boolean}){
  return (
    <div className={`flex items-center gap-3 ${small? 'text-sm': 'text-lg'}`}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center border border-border">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" />
          <path d="M4 12h16" />
        </svg>
      </div>
      <div className="font-semibold">VOID AI</div>
    </div>
  )
}

export default function Header(){
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between card">
      <Link to="/" className="flex items-center gap-4">
        <Logo />
      </Link>
      <nav className="flex items-center gap-4 text-secondaryText">
        <Link to="#" className="hover:text-white">Home</Link>
        <Link to="#" className="hover:text-white">Features</Link>
        <Link to="#" className="hover:text-white">Pricing</Link>
        <Link to="/login" className="px-4 py-2 border border-border rounded-full">Login</Link>
        <Link to="/dashboard" className="px-4 py-2 bg-white text-black rounded-full">Get Started</Link>
      </nav>
    </header>
  )
}
