"use client"

import React from "react"
// import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import Image from "next/image"

const Spotlight = dynamic(() => import("@/components/magicui/spotlight").then(mod => ({ default: mod.Spotlight })), { ssr: false })

export function SpotlightHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/[0.96] antialiased bg-white/[0.02]">
      <Spotlight
        className="left-0 top-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Newton School Coding Club <br /> VIT Chennai
          </h1>
          <p className="mt-4 max-w-lg text-base text-neutral-300">
            Welcome to the official website of the Newton School Coding Club at VIT Chennai. Join us to learn, code, and grow together.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="relative h-64 w-64 md:h-96 md:w-96">
            <Image
              src="https://w61l8n764j.ufs.sh/f/9QpvlA7ofhDmu4a4pysXqBcL5JZWSwTAVrjKlC8Px26vYk9f"
              alt="Spotlight Hero Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
