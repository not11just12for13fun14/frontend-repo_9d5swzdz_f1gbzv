import React from 'react'

function Testimonials() {
  return (
    <section id="case" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Kundcase & Utlåtanden</h2>
          <p className="mt-3 text-white/70">Syns Nu Media</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 p-8 bg-gradient-to-b from-slate-900 to-slate-950">
            <h3 className="text-white font-semibold">Östermalmsgrillen by Garo</h3>
            <p className="mt-2 text-white/80">Vi har ökat dagsskassan med närmare 50% genom målgruppsanpassade kampanjer, UGC och kreativa erbjudanden.</p>
            <ul className="mt-4 text-white/70 list-disc list-inside space-y-1">
              <li>+41% gäster på 90 dagar via TikTok Ads & UGC</li>
              <li>Pre-launch: 1 200 föranmälningar och kö vid öppning</li>
              <li>Omdömen & CRM: 4.6★ på 60 dagar med autosvar + SMS</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-slate-900/60">
            <blockquote className="text-white/90 italic">“Att jobba med Syns Nu Media var en game-changer – strukturen, idéerna och kampanjerna gav oss direkt effekt.”</blockquote>
            <p className="mt-4 text-white/70">— Noah Mitchell, VD Whereabouts Decor</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials