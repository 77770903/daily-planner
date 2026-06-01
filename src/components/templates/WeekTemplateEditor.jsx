import { useState } from 'react'

const WeekTemplateEditor = ({ dayOfWeek, tasks }) => {
  const [editingTasks, setEditingTasks] = useState(tasks)
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = (index, field, value) => {
    const newTasks = [...editingTasks]
    newTasks[index] = { ...newTasks[index], [field]: value }
    setEditingTasks(newTasks)
  }

  const handleSave = () => {
    console.log('保存模板:', dayOfWeek, editingTasks)
    setIsEditing(false)
    alert('模板已保存！（本地模式，刷新后会重置）')
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p
          className="text-[15px] font-medium"
          style={{ color: 'var(--color-text-primary)' }}
        >
          任务列表
        </p>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-[13px] font-medium"
          style={{ color: 'var(--color-accent)' }}
        >
          {isEditing ? '完成' : '编辑'}
        </button>
      </div>

      <div className="space-y-3">
        {editingTasks.map((task, index) => (
          <div
            key={index}
            className="rounded-2xl p-4 transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleEdit(index, 'title', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-[15px] focus:outline-none"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)',
                  }}
                />
                <div className="flex gap-2">
                  <input
                    type="time"
                    value={task.start_time || ''}
                    onChange={(e) => handleEdit(index, 'start_time', e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl text-[15px] focus:outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                    }}
                  />
                  <input
                    type="time"
                    value={task.end_time || ''}
                    onChange={(e) => handleEdit(index, 'end_time', e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl text-[15px] focus:outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                    }}
                  />
                </div>
                <label className="flex items-center gap-3 py-2">
                  <div
                    className="relative w-10 h-6 rounded-full transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: task.is_weekend_big_task
                        ? 'var(--color-accent)'
                        : 'var(--color-border)',
                    }}
                    onClick={() => handleEdit(index, 'is_weekend_big_task', !task.is_weekend_big_task)}
                  >
                    <div
                      className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-200"
                      style={{
                        backgroundColor: '#ffffff',
                        boxShadow: 'var(--shadow-sm)',
                        transform: task.is_weekend_big_task
                          ? 'translateX(20px)'
                          : 'translateX(2px)',
                      }}
                    />
                  </div>
                  <span
                    className="text-[13px] font-medium"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    周末大任务
                  </span>
                </label>
              </div>
            ) : (
              <div>
                {task.start_time && (
                  <p
                    className="text-[12px] font-medium mb-1"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {task.start_time.substring(0, 5)}
                    {task.end_time ? ` - ${task.end_time.substring(0, 5)}` : ''}
                  </p>
                )}
                <p
                  className="text-[15px] font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {task.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-2xl text-[15px] font-medium text-white transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-accent)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          保存模板
        </button>
      )}
    </div>
  )
}

export default WeekTemplateEditor
