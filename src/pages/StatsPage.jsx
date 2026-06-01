import { useState } from 'react'
import WeekHeatMap from '../components/stats/WeekHeatMap'
import StreakBar from '../components/stats/StreakBar'

const StatsPage = () => {
  const [stats] = useState({
    weeklyCompletion: 75,
    streak: 5,
    totalTasks: 42,
    completedTasks: 31,
  })

  return (
    <div className="py-6 space-y-6">
      <h1
        className="text-xl font-semibold"
        style={{
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        数据统计
      </h1>

      {/* 本周完成率 */}
      <div
        className="rounded-2xl p-5 animate-slide-up"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <p
          className="text-[13px] font-medium mb-2"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          本周完成率
        </p>
        <div className="flex items-end gap-2">
          <span
            className="text-4xl font-semibold"
            style={{
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.03em',
            }}
          >
            {stats.weeklyCompletion}%
          </span>
          <span
            className="text-[13px] font-medium mb-1"
            style={{ color: 'var(--color-success)' }}
          >
            +5%
          </span>
        </div>
        <div
          className="mt-4 h-1.5 rounded-full overflow-hidden"
          style={{ backgroundColor: 'var(--color-border)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${stats.weeklyCompletion}%`,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </div>
      </div>

      {/* 连续打卡 */}
      <div className="animate-slide-up" style={{ animationDelay: '0.05s' }}>
        <StreakBar streak={stats.streak} />
      </div>

      {/* 四周热力图 */}
      <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <WeekHeatMap />
      </div>

      {/* 总计 */}
      <div
        className="rounded-2xl p-5 animate-slide-up"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          boxShadow: 'var(--shadow-md)',
          animationDelay: '0.15s',
        }}
      >
        <p
          className="text-[13px] font-medium mb-4"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          总计
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p
              className="text-3xl font-semibold"
              style={{
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              {stats.totalTasks}
            </p>
            <p
              className="text-[13px] font-medium mt-1"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              总任务数
            </p>
          </div>
          <div>
            <p
              className="text-3xl font-semibold"
              style={{
                color: 'var(--color-success)',
                letterSpacing: '-0.03em',
              }}
            >
              {stats.completedTasks}
            </p>
            <p
              className="text-[13px] font-medium mt-1"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              已完成
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPage
