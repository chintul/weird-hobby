'use client'

import { useState } from 'react'
import HobbyCard from './components/HobbyCard'
import Toast from './components/Toast'
import Confetti from './components/Confetti'
import AdBox from './components/AdBox'
import hobbiesData from '../public/hobbies.json'

interface Hobby {
  id: number
  name: string
  emoji: string
  shortDesc: string
  affiliateLink: string
}

export default function Home() {
  const [currentHobby, setCurrentHobby] = useState<Hobby | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const pickRandomHobby = () => {
    const randomIndex = Math.floor(Math.random() * hobbiesData.length)
    const hobby = hobbiesData[randomIndex]

    setCurrentHobby(hobby)
    setShowToast(true)
    setShowConfetti(true)

    // Reset confetti after animation
    setTimeout(() => setShowConfetti(false), 4000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8 px-4">
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="You unlocked a new hobby!"
          emoji="🎉"
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Confetti Animation */}
      {showConfetti && <Confetti />}

      <div className="container mx-auto max-w-6xl">
        {/* Top Ad */}
        <AdBox position="top" />

        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Weird Hobby Picker 🎲
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Discover unusual hobbies you never knew existed.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          {currentHobby ? (
            <HobbyCard hobby={currentHobby} onTryAnother={pickRandomHobby} />
          ) : (
            <div className="text-center">
              <button
                onClick={pickRandomHobby}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-12 py-6 rounded-full font-bold text-2xl md:text-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95"
              >
                🎉 Pick a Hobby
              </button>
              <p className="mt-8 text-gray-500 text-lg">
                Click the button to discover your next weird hobby!
              </p>
            </div>
          )}
        </div>

        {/* Bottom Ad */}
        <AdBox position="bottom" />

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>
            Over 1000 weird hobbies waiting to be discovered.
            <br />
            Made with ❤️ for the curious minds.
          </p>
        </footer>
      </div>
    </main>
  )
}
