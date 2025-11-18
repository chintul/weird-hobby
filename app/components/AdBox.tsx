'use client'

interface AdBoxProps {
  position?: 'top' | 'bottom'
}

export default function AdBox({ position = 'top' }: AdBoxProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${position === 'top' ? 'mb-8' : 'mt-8'}`}>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
        <p className="text-xs text-gray-400 font-medium tracking-wide">Advertisement</p>
        <div className="mt-2 h-20 flex items-center justify-center">
          <p className="text-sm text-gray-300">Ad space available</p>
        </div>
      </div>
    </div>
  )
}
