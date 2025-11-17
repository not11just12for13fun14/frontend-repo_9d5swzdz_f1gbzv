import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500" />
              <span className="text-white font-semibold">Syns Nu Media</span>
            </div>
            <p className="text-white/70 max-w-md">Vi är en specialiserad byrå för restauranger. Vi skapar synlighet som blir till gäster.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Tjänster</p>
            <ul className="space-y-2 text-white/70">
              <li>Sociala Medier</li>
              <li>Webbdesign</li>
              <li>Marknadsföring</li>
              <li>Menyfotografering</li>
              <li>Print/blad & digitalt</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Kontakt</p>
            <ul className="space-y-2 text-white/70">
              <li>Telefon: 070-888 01 98</li>
              <li>E-post: info@synsnumedia.se</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/60">© Syns Nu AB 2025</p>
          <p className="text-white/60">Sociala Medier · Webbdesign · Marknadsföring</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer