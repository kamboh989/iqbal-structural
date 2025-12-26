"use client"

import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function LetsWorkTogether() {
  const router = useRouter()

  return (
    <section className="flex  items-center justify-center px-6">
      <div className="flex flex-col items-center gap-8 text-center">

        {/* Availability */}
        <div className="flex items-center gap-3">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-600 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
          </span>
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Available for projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl">
          Let’s work <span className="text-muted-foreground">together</span>
        </h2>

        {/* Arrow Button → Contact */}
        <button
          onClick={() => router.push("/contact")}
          className="group flex items-center justify-center size-16 rounded-full border border-gray-400 transition-all duration-300 hover:bg-foreground hover:scale-110 hover:text-gray-200"
        >
          <ArrowUpRight
            className="size-6 transition-all text-orange-600  duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

        {/* Sub text */}
        <p className="max-w-md text-sm text-muted-foreground">
          Have a steel construction project in mind?  
          Let’s discuss how we can build something strong and reliable together.
        </p>

      </div>
    </section>
  )
}
