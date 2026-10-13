import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Home(){
  return (
    <div className="p-6">
      <h2 className="text-2xl">Good evening, Alex</h2>
      <p className="text-secondaryText mt-2">What would you like to create today?</p>
      <div className="mt-6 card p-4">Prompt input component (AI)</div>
      <div className="mt-6">Recent projects</div>
    </div>
  )
}

export default function DashboardPage(){
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 bg-background p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<div>Projects</div>} />
        </Routes>
      </div>
    </div>
  )
}
