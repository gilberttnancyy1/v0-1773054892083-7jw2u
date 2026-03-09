'use client'
import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="font-bold text-lg">Nexus</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'About', 'Blog'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-3">
            <button className="text-zinc-400 hover:text-white text-sm transition-colors">Sign in</button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
              Get started
            </button>
          </div>
          
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4">
          {['Features', 'Pricing', 'About', 'Blog'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-zinc-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="mt-3 w-full bg-emerald-500 text-zinc-950 font-semibold py-2 rounded-lg">
            Get started
          </button>
        </div>
      )}
    </header>
  )
}