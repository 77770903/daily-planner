import { useState, useEffect } from 'react'
import { getToday, getDayOfWeek } from '../lib/dateUtils'
import { getTemplateByDayOfWeek } from '../lib/constants'
import TaskList from '../components/tasks/TaskList'
import MottoCarousel from '../components/mottos/MottoCarousel'
import ReminderBanner from '../components/reminders/ReminderBanner'

const TodayPage = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const today = getToday()
  const dayOfWeek = getDayOfWeek(today)
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

  useEffect(() => {
    const template = getTemplateByDayOfWeek(dayOfWeek)
    const todayTasks = template.map((task, index) => ({
      id: `local-${today}-${index}`,
      ...task,
      date: today,
      is_completed: false,
      completed_at: null,
    }))
    setTasks(todayTasks)
    setLoading(false)
  }, [today, dayOfWeek])

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? {
            ...task,
            is_completed: !task.is_completed,
            completed_at: task.is_completed ? null : new Date().toISOString(),
          }
        : task
    ))
  }

  const completedCount = tasks.filter(t => t.is_completed).length
  const totalCount = tasks.length
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div
          className="w-8 h-8 rounded-full animate-spin"
          style={{
            border: '2px solid var(--color-border)',
            borderTopColor: 'var(--color-accent)',
          }}
        />
      </div>
    )
  }

  return (
    <div className="py-6 space-y-6">
      {/* Motto Carousel */}
      <MottoCarousel />

      {/* Progress Section */}
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-3">
          <h2
            className="text-lg font-semibold"
            style={{
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {isWeekend ? '今日大任务' : '今日安排'}
          </h2>
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            {completedCount}/{totalCount}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--color-border)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </div>
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        isWeekend={isWeekend}
      />

      {/* Reminder Banner */}
      <ReminderBanner tasks={tasks} />
    </div>
  )
}

export default TodayPage
