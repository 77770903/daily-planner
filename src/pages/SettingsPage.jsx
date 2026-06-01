import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { DEFAULT_MOTTOS } from '../lib/constants'

const SettingsPage = () => {
  const { isDark, toggleTheme } = useTheme()
  const [mottos, setMottos] = useState(DEFAULT_MOTTOS)
  const [editingIndex, setEditingIndex] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleEdit = (index) => {
    setEditingIndex(index)
    setEditValue(mottos[index])
  }

  const handleSave = () => {
    if (editingIndex !== null && editValue.trim()) {
      const newMottos = [...mottos]
      newMottos[editingIndex] = editValue.trim()
      setMottos(newMottos)
      setEditingIndex(null)
      setEditValue('')
    }
  }

  const handleDelete = (index) => {
    if (mottos.length > 1) {
      const newMottos = mottos.filter((_, i) => i !== index)
      setMottos(newMottos)
    }
  }

  const handleAdd = () => {
    setEditingIndex(mottos.length)
    setEditValue('')
  }

  return (
    <div className="py-6 space-y-6">
      <h1
        className="text-xl font-semibold"
        style={{
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        设置
      </h1>

      {/* 主题设置 */}
      <div
        className="rounded-2xl p-5 animate-slide-up"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[15px] font-medium"
              style={{ color: 'var(--color-text-primary)' }}
            >
              深色模式
            </p>
            <p
              className="text-[13px] font-medium mt-0.5"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {isDark ? '当前：深色模式' : '当前：浅色模式'}
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="relative w-12 h-7 rounded-full transition-all duration-200"
            style={{
              backgroundColor: isDark ? 'var(--color-accent)' : 'var(--color-border)',
            }}
          >
            <div
              className="absolute top-0.5 w-6 h-6 rounded-full transition-all duration-200"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: 'var(--shadow-sm)',
                transform: isDark ? 'translateX(22px)' : 'translateX(2px)',
              }}
            />
          </button>
        </div>
      </div>

      {/* 座右铭设置 */}
      <div
        className="rounded-2xl p-5 animate-slide-up"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          boxShadow: 'var(--shadow-md)',
          animationDelay: '0.05s',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <p
            className="text-[15px] font-medium"
            style={{ color: 'var(--color-text-primary)' }}
          >
            座右铭
          </p>
          <button
            onClick={handleAdd}
            className="text-[13px] font-medium"
            style={{ color: 'var(--color-accent)' }}
          >
            + 添加
          </button>
        </div>

        <div className="space-y-3">
          {mottos.map((motto, index) => (
            <div
              key={index}
              className="rounded-xl p-4"
              style={{
                backgroundColor: 'var(--color-bg)',
              }}
            >
              {editingIndex === index ? (
                <div className="space-y-3">
                  <textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-[15px] resize-none focus:outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      color: 'var(--color-text-primary)',
                      border: '1px solid var(--color-border)',
                    }}
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 rounded-xl text-[13px] font-medium text-white transition-all duration-200"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                      }}
                    >
                      保存
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200"
                      style={{
                        backgroundColor: 'var(--color-border)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-3">
                  <p
                    className="text-[14px] leading-relaxed flex-1"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {motto}
                  </p>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(index)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    {mottos.length > 1 && (
                      <button
                        onClick={() => handleDelete(index)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 关于 */}
      <div
        className="text-center py-6 animate-slide-up"
        style={{ animationDelay: '0.1s' }}
      >
        <p
          className="text-[13px] font-medium"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          个人日程管理 v1.0
        </p>
        <p
          className="text-[12px] font-medium mt-1"
          style={{ color: 'var(--color-text-tertiary)', opacity: 0.6 }}
        >
          专注于每一天的小进步
        </p>
      </div>
    </div>
  )
}

export default SettingsPage
