"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimate } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"
// import { cn } from "@/lib/utils"

interface TeamMemberProps {
  imageUrl: string
  name: string
  role: string
  linkedinUrl?: string
  githubUrl?: string
}

const Sparkles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
            left: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
            opacity: Math.random(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-blue-400 dark:bg-blue-600"
        />
      ))}
    </div>
  )
}

export const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageUrl, name, role, linkedinUrl, githubUrl }) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 })
  }, [animate, scope])

  return (
    <motion.div ref={scope} className="opacity-0">
      <div className="max-w-sm w-full mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
        <Sparkles />
        <div className="h-48 md:h-64 rounded-xl z-40 overflow-hidden mb-4 relative">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{name}</h3>
        <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 mb-4">{role}</p>
        <div className="flex space-x-4">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <FaLinkedin size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors duration-300">
              <FaGithub size={24} className="transform group-hover:scale-110 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}