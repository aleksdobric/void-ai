import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  'Home','Projects','AI Chat','Website Builder','App Builder','AI Agents','Automations','Templates','Explore','Settings'
]

export default function Sidebar(){
  return (
    <aside className="w-72 p-4 card h-screen sticky top-0">
      <div className="mb-6">
        <div className="text-sm text-secondaryText">VOID AI</div>
      </div>
      <nav className="flex flex-col gap-2">
        {items.map(i=> (
          <NavLink key={i} to={`/${i.toLowerCase().replace(/ /g,'-')}`} className="px-3 py-2 rounded hover:bg-[#0d0d0d] text-secondaryText">{i}</NavLink>
        ))}
      </nav>
      <div className="mt-auto pt-6 text-sm text-secondaryText">Pro • Free plan</div>
    </aside>
  )
}
