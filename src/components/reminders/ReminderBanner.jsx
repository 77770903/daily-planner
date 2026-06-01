import { useState, useEffect } from 'react'
import { isUpcoming, isOverdue } from '../../lib/dateUtils'

const ReminderBanner = ({ tasks }) => {
  const [reminder, setReminder] = useState(null)
  const [dismissed, setDismissed] = useState(new Set())

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date()
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`

      const upcomingTask = tasks.find(
        t => !t.is_completed && !dismissed.has(t.id) && isUpcoming(t, currentTime, 5)
      )

      if (upcomingTask) {
        setReminder({
          type: 'upcoming',
          task: upcomingTask,
          message: `${upcomingTask.start_time?.substring(0, 5)} - ${upcomingTask.title}`,
        })
        return
      }

      const overdueTask = tasks.find(
        t => !t.is_completed && !dismissed.has(t.id) && isOverdue(t, currentTime)
      )

      if (overdueTask) {
        setReminder({
          type: 'overdue',
          task: overdueTask,
          message: `别忘了：${overdueTask.title}`,
        })
      }
    }

    const interval = setInterval(checkReminders, 60000)
    checkReminders()

    return () => clearInterval(interval)
  }, [tasks, dismissed])

  const handleDismiss = () => {
    if (reminder) {
      setDismissed(prev => new Set([...prev, reminder.task.id]))
      setReminder(null)
    }
  }

  if (!reminder) return null

  const isUpcomingType = reminder.type === 'upcoming'

  return (
    <div
      className="fixed top-20 left-4 right-4 z-30 animate-slide-up max-w-xl mx-auto"
      style={{
        animation: 'slideUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      <div
        className="rounded-2xl p-4 overflow-hidden"
        style={{
          backgroundColor: isUpcomingType
            ? 'rgba(0, 122, 255, 0.12)'
            : 'rgba(255, 149, 0, 0.12)',
          border: `1px solid ${isUpcomingType ? 'rgba(0, 122, 255, 0.2)' : 'rgba(255, 149, 0, 0.2)'}`,
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: isUpcomingType ? 'var(--color-accent)' : '#ff9500',
                }}
              />
              <p
                className="text-[13px] font-semibold"
                style={{
                  color: isUpcomingType ? 'var(--color-accent)' : '#ff9500',
                }}
              >
                {isUpcomingType ? '即将到来' : '别忘了'}
              </p>
            </div>
            <p
              className="text-[15px] font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {reminder.message}
            </p>
          </div>

          <button
            onClick={handleDismiss}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.06)',
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReminderBanner
