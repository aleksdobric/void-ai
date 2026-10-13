import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function LandingPage(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-6 py-8">
        <Hero />
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6">Product preview (dashboard screenshot)</div>
          <div className="card p-6">Pricing cards</div>
          <div className="card p-6">FAQ</div>
        </section>
      </main>
      <footer className="px-6 py-8 text-secondaryText">© {new Date().getFullYear()} VOID AI — Create beyond limits.</footer>
    </div>
  )
}
