import { useState } from 'react'
import { DEFAULT_WEEKDAY_TEMPLATE, DEFAULT_FRIDAY_TEMPLATE, DEFAULT_SATURDAY_TEMPLATE, DEFAULT_SUNDAY_TEMPLATE } from '../lib/constants'
import WeekTemplateEditor from '../components/templates/WeekTemplateEditor'

const TemplatePage = () => {
  const [selectedDay, setSelectedDay] = useState(1)

  const templates = {
    0: DEFAULT_SUNDAY_TEMPLATE,
    1: DEFAULT_WEEKDAY_TEMPLATE,
    2: DEFAULT_WEEKDAY_TEMPLATE,
    3: DEFAULT_WEEKDAY_TEMPLATE,
    4: DEFAULT_WEEKDAY_TEMPLATE,
    5: DEFAULT_FRIDAY_TEMPLATE,
    6: DEFAULT_SATURDAY_TEMPLATE,
  }

  const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

  return (
    <div className="py-6 space-y-6">
      <div>
        <h1
          className="text-xl font-semibold"
          style={{
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          周模板设置
        </h1>
        <p
          className="text-[13px] font-medium mt-1"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          修改模板会影响之后每周的任务安排
        </p>
      </div>

      {/* 星期选择器 */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5">
        {[1, 2, 3, 4, 5, 6, 0].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className="flex-shrink-0 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200"
            style={{
              backgroundColor:
                selectedDay === day
                  ? 'var(--color-accent)'
                  : 'var(--color-bg-secondary)',
              color:
                selectedDay === day
                  ? '#ffffff'
                  : 'var(--color-text-secondary)',
              boxShadow: selectedDay === day ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            }}
          >
            {dayNames[day]}
          </button>
        ))}
      </div>

      {/* 模板编辑器 */}
      <div className="animate-fade-in" key={selectedDay}>
        <WeekTemplateEditor
          dayOfWeek={selectedDay}
          tasks={templates[selectedDay]}
        />
      </div>
    </div>
  )
}

export default TemplatePage
