'use client'

import React from 'react'

export default function DisponibleParaTrabajar() {
  return (
    <button className="flex items-center space-x-2 rounded-full border border-green-200 bg-white px-4 py-2 text-green-600 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
      <span className="text-xs font-medium">Disponible para trabajar</span>
    </button>
  )
}
