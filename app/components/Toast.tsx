'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string
  emoji?: string
  onClose: () => void
  duration?: number
}

export default function Toast({ message, emoji = '🎉', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
        <span className="text-2xl">{emoji}</span>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  )
}
