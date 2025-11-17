import React from 'react'

function Philosophy() {
  return (
    <section id="varfor" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Syns du inte, finns du inte.</h2>
          <p className="mt-3 text-white/70">Syns Nu Media</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/50">
            <h3 className="text-white font-semibold">Strategier – Fler följare = fler gäster.</h3>
            <p className="mt-2 text-white/70">Vi bygger strategier som omvandlar följare till bokningar.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/50">
            <h3 className="text-white font-semibold">Influencers – Boostar din restaurang.</h3>
            <p className="mt-2 text-white/70">Rätt samarbeten ger räckvidd och trovärdighet.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-slate-900/50">
            <h3 className="text-white font-semibold">Konkurrenter – Restauranger konkurrerar om samma gäster.</h3>
            <p className="mt-2 text-white/70">Brist på närvaro online ger konkurrenterna övertaget. Vi ser till att du leder.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-8 bg-gradient-to-b from-slate-900 to-slate-950">
          <h3 className="text-white font-semibold text-xl">Dålig synlighet skadar din restaurang</h3>
          <p className="mt-2 text-white/70 max-w-3xl">Vi hjälper dig med digitala lösningar, vass design och aptitretande innehåll som gör att du syns där gästerna finns – och väljer just dig.</p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy