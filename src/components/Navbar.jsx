import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-lg shadow-blue-500/30" />
          <div className="text-white font-bold tracking-tight text-lg">Syns Nu Media</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#tjanster" className="text-white/80 hover:text-white transition">Tjänster</a>
          <a href="#case" className="text-white/80 hover:text-white transition">Case</a>
          <a href="#varfor" className="text-white/80 hover:text-white transition">Varför vi</a>
          <a href="#kontakt" className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">Kontakta oss</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar