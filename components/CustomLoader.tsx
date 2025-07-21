import React from "react"

export default function CustomLoader({ message = "Gearing up your journey..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-blue-100 backdrop-blur-sm">
      {/* Spinning circle with emoji */}
      <div className="relative w-20 h-20 mb-4">
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">✈️</div>
      </div>

      {/* Main loading message */}
      <p className="text-center text-lg font-semibold text-gray-700 animate-pulse">
        {message}
      </p>

      {/* Fun travel quote */}
      <p className="mt-2 text-sm text-gray-500 italic animate-fade-in">
        "Good trips take time... ✨"
      </p>
    </div>
  )
}
