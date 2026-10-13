import React from 'react'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight">Create. Automate. Build with AI.</h1>
        <p className="mt-6 text-secondaryText max-w-lg">Turn your ideas into websites, apps, agents and automations — in seconds.</p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full">Start for free</button>
          <button className="px-6 py-3 border border-border rounded-full text-secondaryText">Watch demo</button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-secondaryText">
          <div className="card p-4">Websites — Generate modern websites</div>
          <div className="card p-4">Apps — Build real applications</div>
          <div className="card p-4">AI Agents — Create assistants</div>
          <div className="card p-4">Automations — Connect your tools</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-72 h-72 rounded-full border border-border flex items-center justify-center">
          <svg viewBox="0 0 120 120" className="w-56 h-56 text-white">
            <circle cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.15" />
            <path d="M10 60h100" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </section>
  )
}
