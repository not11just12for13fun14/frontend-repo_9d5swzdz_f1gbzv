import React from 'react'

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize:'24px 24px'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-cyan-300/90 font-medium mb-3">Syns Nu Media</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Sveriges Största Marknadsföringsbyrå för Restauranger
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Vi hjälper restauranger att fylla borden – med strategi, innehåll och design som syns och säljer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tjanster" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:opacity-90 transition">Börja</a>
              <a href="#varfor" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Läs mer</a>
            </div>

            {/* Marquee */}
            <div className="mt-10">
              <p className="text-white/70 text-sm mb-2">Loggor – Snurrande Marquee</p>
              <div className="relative overflow-hidden py-4">
                <div className="animate-[marquee_18s_linear_infinite] flex gap-12 will-change-transform" style={{animationDirection:'normal'}}>
                  {Array.from({length:10}).map((_,i)=> (
                    <div key={i} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition">
                      <div className="w-8 h-8 rounded-full bg-white/90" />
                      <span className="text-white/70 text-sm">Partner {i+1}</span>
                    </div>
                  ))}
                </div>
                <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1470&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/0 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero