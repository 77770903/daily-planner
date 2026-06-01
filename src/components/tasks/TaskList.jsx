import TaskCard from './TaskCard'
import WeekendCard from './WeekendCard'

const TaskList = ({ tasks, onToggleTask, isWeekend }) => {
  if (tasks.length === 0) {
    return (
      <div
        className="text-center py-16 rounded-2xl"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <p
          className="text-[15px] font-medium"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          今天没有任务安排
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        isWeekend ? (
          <WeekendCard
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            index={index}
          />
        ) : (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            index={index}
          />
        )
      ))}
    </div>
  )
}

export default TaskList
