import { useState, useEffect } from 'react'
import { DEFAULT_MOTTOS } from '../../lib/constants'

const MottoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % DEFAULT_MOTTOS.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="rounded-2xl overflow-hidden animate-fade-in"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.08), rgba(88, 86, 214, 0.08))',
        border: '1px solid rgba(0, 122, 255, 0.12)',
      }}
    >
      <div className="px-5 py-4">
        <div
          className={`transition-all duration-300 ease-out ${
            isAnimating
              ? 'opacity-0 -translate-y-2'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <p
            className="text-[13px] text-center leading-relaxed font-medium"
            style={{
              color: 'var(--color-text-secondary)',
              letterSpacing: '-0.01em',
            }}
          >
            {DEFAULT_MOTTOS[currentIndex]}
          </p>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 pb-3">
        {DEFAULT_MOTTOS.map((_, index) => (
          <div
            key={index}
            className="w-1 h-1 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                index === currentIndex
                  ? 'var(--color-accent)'
                  : 'var(--color-text-tertiary)',
              opacity: index === currentIndex ? 1 : 0.3,
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default MottoCarousel
