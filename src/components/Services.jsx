import React from 'react'

const services = [
  {
    title: 'Webbdesign',
    desc: 'Hemsidor skräddarsydda till restauranger',
    cta: 'Börja',
  },
  {
    title: 'Sociala Medier',
    desc: 'Bästa sättet att synas online för restauranger',
    cta: 'Läs mer',
  },
  {
    title: 'Marknadsföring',
    desc: 'Kampanjer som driver bokningar och beställningar',
    cta: 'Läs mer',
  },
  {
    title: 'Menyfotografering',
    desc: 'Fotografering av hela din meny för onlinebeställningar',
    cta: 'Börja',
  },
  {
    title: 'Print/blad & digitalt',
    desc: 'Allt från tryckta blad till digitala versioner för SoMe och nyhetsbrev',
    cta: 'Läs mer',
  },
]

function Services() {
  return (
    <section id="tjanster" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Tjänster</h2>
          <p className="mt-3 text-white/70">Syns Nu Media</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-white/20 transition relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/5 group-hover:bg-white/10 transition" />
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-6">
                <a href="#kontakt" className="inline-flex items-center px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">{s.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services