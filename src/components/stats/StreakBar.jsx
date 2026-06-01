const StreakBar = ({ streak }) => {
  const maxStreak = 30
  const progress = Math.min((streak / maxStreak) * 100, 100)

  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <p
        className="text-[13px] font-medium mb-2"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        连续打卡
      </p>
      <div className="flex items-end gap-2">
        <span
          className="text-4xl font-semibold"
          style={{
            color: '#ff9500',
            letterSpacing: '-0.03em',
          }}
        >
          {streak}
        </span>
        <span
          className="text-[13px] font-medium mb-1"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          天
        </span>
      </div>
      <div
        className="mt-4 h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--color-border)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #ff9500, #ff6b00)',
          }}
        />
      </div>
      <p
        className="text-[12px] font-medium mt-3"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        {streak >= 7 ? '太棒了！继续保持！' : '再坚持几天！'}
      </p>
    </div>
  )
}

export default StreakBar
