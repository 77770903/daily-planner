import { useTheme } from '../../hooks/useTheme'
import { getToday, formatDateChinese } from '../../lib/dateUtils'

const TopBar = () => {
  const { isDark, toggleTheme } = useTheme()
  const today = getToday()
  const formattedDate = formatDateChinese(today)

  return (
    <header
      className="sticky top-0 z-50 px-5 py-4"
      style={{
        backgroundColor: 'var(--glass-bg)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <div>
          <h1
            className="text-xl font-semibold"
            style={{
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            今日计划
          </h1>
          <p
            className="text-[13px] font-medium"
            style={{
              color: 'var(--color-text-tertiary)',
              marginTop: '2px',
            }}
          >
            {formattedDate}
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-bg-secondary)',
            boxShadow: 'var(--shadow-sm)',
          }}
          aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
        >
          {isDark ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#ffd60a' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default TopBar
