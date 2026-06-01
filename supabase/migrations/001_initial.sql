-- 创建 profiles 表
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  display_name TEXT,
  motto_cycle_interval INT DEFAULT 5000,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建 week_templates 表
CREATE TABLE week_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  day_of_week INT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  title TEXT NOT NULL,
  start_time TIME,
  end_time TIME,
  is_weekend_big_task BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建 daily_tasks 表
CREATE TABLE daily_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  date DATE NOT NULL,
  title TEXT NOT NULL,
  start_time TIME,
  end_time TIME,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  is_override BOOLEAN DEFAULT FALSE,
  template_id UUID REFERENCES week_templates(id),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date, sort_order)
);

-- 创建 mottos 表
CREATE TABLE mottos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 启用行级安全
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE week_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE mottos ENABLE ROW LEVEL SECURITY;

-- 创建 RLS 策略
CREATE POLICY "Users manage own profile" ON profiles
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users manage own templates" ON week_templates
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users manage own tasks" ON daily_tasks
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users manage own mottos" ON mottos
  FOR ALL USING (auth.uid() = user_id);

-- 创建索引
CREATE INDEX idx_week_templates_user_day ON week_templates(user_id, day_of_week);
CREATE INDEX idx_daily_tasks_user_date ON daily_tasks(user_id, date);
CREATE INDEX idx_mottos_user_active ON mottos(user_id, is_active);
