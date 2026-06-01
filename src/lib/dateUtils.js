// 获取今天的日期字符串 (YYYY-MM-DD)
export const getToday = () => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

// 获取星期几 (0=周日, 1=周一, ..., 6=周六)
export const getDayOfWeek = (dateString) => {
  const date = new Date(dateString)
  return date.getDay()
}

// 格式化日期为中文显示
export const formatDateChinese = (dateString) => {
  const date = new Date(dateString)
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${weekdays[date.getDay()]} · ${month}月${day}日`
}

// 解析时间字符串为分钟数
export const parseTimeToMinutes = (timeString) => {
  if (!timeString) return null
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

// 计算两个时间之间的分钟差
export const diffMinutes = (time1, time2) => {
  const minutes1 = parseTimeToMinutes(time1)
  const minutes2 = parseTimeToMinutes(time2)
  if (minutes1 === null || minutes2 === null) return null
  return minutes1 - minutes2
}

// 检查任务是否即将到来（5分钟内）
export const isUpcoming = (task, currentTime, minutesBefore = 5) => {
  if (!task.start_time) return false
  const diff = diffMinutes(task.start_time, currentTime)
  return diff > 0 && diff <= minutesBefore
}

// 检查任务是否已过期
export const isOverdue = (task, currentTime) => {
  if (!task.start_time) return false
  const diff = diffMinutes(task.start_time, currentTime)
  return diff < 0
}
