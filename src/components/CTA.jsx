import React from 'react'

function CTA() {
  return (
    <section id="kontakt" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 p-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Är du redo att ta plats i rampljuset? Kontakta oss.</h2>
              <p className="mt-4 text-white/70">Syns Nu Media</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:0708880198" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:opacity-90 transition">070-888 01 98</a>
                <a href="mailto:info@synsnumedia.se" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">info@synsnumedia.se</a>
              </div>
            </div>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10" />
                <div>
                  <p className="font-semibold text-white">Sociala Medier</p>
                  <p className="text-white/70 text-sm">Strategi, innehåll och annonser</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10" />
                <div>
                  <p className="font-semibold text-white">Webbdesign</p>
                  <p className="text-white/70 text-sm">Snabba, säljande sajter</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10" />
                <div>
                  <p className="font-semibold text-white">Marknadsföring</p>
                  <p className="text-white/70 text-sm">Kampanjer som driver bokningar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA