// 座右铭
export const DEFAULT_MOTTOS = [
  '瓦洛兰特只在周五晚上和周末 — 工作日不碰，让周五更有期待感',
  '抖音永远排在正事之后 — 不是不刷，是先做完一件事再说',
  '健身房去不了不自责 — 在家推进网店/闲鱼同样是生产时间',
  '周末游戏放上午 — 精力最好的时候打完，下午做别的不会焦虑',
]

// 周一到周四模板
export const DEFAULT_WEEKDAY_TEMPLATE = [
  { start_time: '07:30', end_time: '08:00', title: '起床洗漱吃早饭', sort_order: 0 },
  { start_time: '08:00', end_time: '08:45', title: '通勤（回复闲鱼消息）', sort_order: 1 },
  { start_time: '09:00', end_time: '18:30', title: '工作', sort_order: 2 },
  { start_time: '19:30', end_time: '20:00', title: '准备去健身房', sort_order: 3 },
  { start_time: '20:00', end_time: '21:30', title: '健身', sort_order: 4 },
  { start_time: '21:30', end_time: '23:00', title: '自由时间', sort_order: 5 },
]

// 周五模板
export const DEFAULT_FRIDAY_TEMPLATE = [
  { start_time: '07:30', end_time: '18:30', title: '工作', sort_order: 0 },
  { start_time: '19:30', end_time: null, title: '瓦洛兰特', is_weekend_big_task: true, sort_order: 1 },
]

// 周六模板
export const DEFAULT_SATURDAY_TEMPLATE = [
  { start_time: '10:00', end_time: null, title: '起床', is_weekend_big_task: true, sort_order: 0 },
  { start_time: '10:30', end_time: '12:30', title: '瓦洛兰特', is_weekend_big_task: true, sort_order: 1 },
  { start_time: null, end_time: null, title: '出门办事/网店进货', is_weekend_big_task: true, sort_order: 2 },
  { start_time: null, end_time: null, title: '出门玩', is_weekend_big_task: true, sort_order: 3 },
  { start_time: null, end_time: null, title: '休息', is_weekend_big_task: true, sort_order: 4 },
]

// 周日模板
export const DEFAULT_SUNDAY_TEMPLATE = [
  { start_time: '10:00', end_time: null, title: '起床', is_weekend_big_task: true, sort_order: 0 },
  { start_time: '10:30', end_time: '12:30', title: '瓦洛兰特', is_weekend_big_task: true, sort_order: 1 },
  { start_time: null, end_time: null, title: '发货/整理/上架', is_weekend_big_task: true, sort_order: 2 },
  { start_time: null, end_time: null, title: '自由时间', is_weekend_big_task: true, sort_order: 3 },
  { start_time: null, end_time: null, title: '早点休息', is_weekend_big_task: true, sort_order: 4 },
]

// 根据星期几获取模板
export const getTemplateByDayOfWeek = (dayOfWeek) => {
  // dayOfWeek: 0=周日, 1=周一, ..., 6=周六
  switch (dayOfWeek) {
    case 0: return DEFAULT_SUNDAY_TEMPLATE
    case 1:
    case 2:
    case 3:
    case 4: return DEFAULT_WEEKDAY_TEMPLATE
    case 5: return DEFAULT_FRIDAY_TEMPLATE
    case 6: return DEFAULT_SATURDAY_TEMPLATE
    default: return DEFAULT_WEEKDAY_TEMPLATE
  }
}
