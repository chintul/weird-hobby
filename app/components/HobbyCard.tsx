'use client'

interface Hobby {
  id: number
  name: string
  emoji: string
  shortDesc: string
  affiliateLink: string
}

interface HobbyCardProps {
  hobby: Hobby
  onTryAnother: () => void
}

export default function HobbyCard({ hobby, onTryAnother }: HobbyCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto animate-bounce-in">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-100">
        {/* Big Emoji */}
        <div className="text-center mb-6">
          <span className="text-8xl md:text-9xl inline-block transform hover:scale-110 transition-transform duration-300">
            {hobby.emoji}
          </span>
        </div>

        {/* Hobby Name */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {hobby.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center text-lg mb-8 leading-relaxed">
          {hobby.shortDesc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={hobby.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Explore <span className="text-xl">→</span>
          </a>

          <button
            onClick={onTryAnother}
            className="text-purple-600 hover:text-pink-600 font-medium underline underline-offset-4 transition-colors duration-200"
          >
            Try another hobby
          </button>
        </div>
      </div>
    </div>
  )
}
