"use client"

import Image from "next/image"

import { brand } from "@/lib/site-config"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/dancesport/chisiamo.jpg"
              alt={brand.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">FORMIAMO DANZATORI, ISPIRIAMO PERSONE</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Chi Siamo
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>
                Una scuola di danza dove ogni percorso nasce per aiutare ogni allievo a esprimere il proprio potenziale con energia, tecnica e personalita.
              </p>
              <p>
                {brand.name} accoglie bambini, ragazzi e adulti in un ambiente dedicato alla crescita tecnica, artistica e al piacere del movimento.
              </p>
              <p>
                {brand.tagline} e propone percorsi di ballo sportivo e danza di coppia pensati per accompagnare ogni allievo con attenzione, ascolto e continuita.
              </p>
              <p>
                Lavoriamo su tecnica, coordinazione, postura e interpretazione, adattando il percorso al livello e agli obiettivi di ciascuno.
              </p>
              <p>
                Che si tratti dei primi passi nel mondo della danza o di un percorso piu avanzato, il nostro obiettivo resta lo stesso: trasformare la passione in esperienza, emozione e crescita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
