import { useState } from 'react'

const TaskCard = ({ task, onToggle, index = 0 }) => {
  const { title, start_time, end_time, is_completed } = task
  const [isPressed, setIsPressed] = useState(false)

  const formatTime = (time) => {
    if (!time) return ''
    return time.substring(0, 5)
  }

  const timeDisplay = start_time
    ? `${formatTime(start_time)}${end_time ? ` - ${formatTime(end_time)}` : ''}`
    : ''

  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
    >
      <div
        className={`relative rounded-2xl p-4 transition-all duration-200 ease-out card-hover ${
          is_completed
            ? 'bg-gray-50 dark:bg-gray-800/50'
            : 'bg-white dark:bg-gray-800'
        }`}
        style={{
          boxShadow: is_completed
            ? 'var(--shadow-sm)'
            : 'var(--shadow-md)',
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <div className="flex items-center gap-4">
          {/* Checkbox */}
          <button
            onClick={onToggle}
            className="flex-shrink-0 w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: is_completed
                ? 'var(--color-success)'
                : 'var(--color-text-tertiary)',
              backgroundColor: is_completed
                ? 'var(--color-success)'
                : 'transparent',
              transform: isPressed ? 'scale(0.9)' : 'scale(1)',
            }}
            aria-label={is_completed ? '取消完成' : '标记完成'}
          >
            {is_completed && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  strokeDasharray: 24,
                  animation: 'checkmark 0.3s ease-out forwards',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {timeDisplay && (
              <p
                className="text-xs font-medium mb-0.5"
                style={{ color: 'var(--color-text-tertiary)' }}
              >
                {timeDisplay}
              </p>
            )}
            <h3
              className="text-[15px] font-medium transition-colors duration-200"
              style={{
                color: is_completed
                  ? 'var(--color-text-tertiary)'
                  : 'var(--color-text-primary)',
                textDecoration: is_completed ? 'line-through' : 'none',
              }}
            >
              {title}
            </h3>
          </div>

          {/* Chevron indicator */}
          <div
            className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-opacity duration-200"
            style={{
              color: 'var(--color-text-tertiary)',
              opacity: is_completed ? 0 : 0.5,
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
