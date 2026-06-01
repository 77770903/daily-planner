const WeekHeatMap = () => {
  const weeks = [
    [80, 90, 70, 85, 95, 60, 75],
    [85, 75, 90, 80, 88, 70, 82],
    [70, 85, 75, 90, 80, 65, 78],
    [90, 80, 85, 75, 92, 72, 88],
  ]

  const dayLabels = ['一', '二', '三', '四', '五', '六', '日']

  const getColor = (value) => {
    if (value >= 90) return 'rgba(52, 199, 89, 1)'
    if (value >= 80) return 'rgba(52, 199, 89, 0.7)'
    if (value >= 70) return 'rgba(255, 204, 0, 0.7)'
    if (value >= 60) return 'rgba(255, 149, 0, 0.7)'
    return 'var(--color-border)'
  }

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <p
        className="text-[13px] font-medium mb-4"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        四周完成率
      </p>

      <div className="space-y-2">
        {/* 星期标签 */}
        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {dayLabels.map((label) => (
            <div
              key={label}
              className="text-center text-[11px] font-medium"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* 热力图网格 */}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1.5">
            {week.map((value, dayIndex) => (
              <div
                key={dayIndex}
                className="aspect-square rounded-lg transition-colors"
                style={{
                  backgroundColor: getColor(value),
                }}
                title={`${value}%`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* 图例 */}
      <div className="flex items-center justify-end gap-2 mt-4">
        <span
          className="text-[11px] font-medium"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          少
        </span>
        <div className="flex gap-1">
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: 'rgba(255, 149, 0, 0.7)' }}
          />
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: 'rgba(255, 204, 0, 0.7)' }}
          />
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: 'rgba(52, 199, 89, 0.7)' }}
          />
          <div
            className="w-3 h-3 rounded"
            style={{ backgroundColor: 'rgba(52, 199, 89, 1)' }}
          />
        </div>
        <span
          className="text-[11px] font-medium"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          多
        </span>
      </div>
    </div>
  )
}

export default WeekHeatMap
