import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react'

const metrics = [
  { icon: TrendingUp, label: 'Revenue', value: '$248K', change: '+18%', color: 'text-[#10B981]' },
  { icon: Users, label: 'Active Users', value: '12,401', change: '+24%', color: 'text-[#2563EB]' },
  { icon: Zap, label: 'Uptime', value: '99.98%', change: 'This month', color: 'text-[#F59E0B]' },
]

const recentActivities = [
  { text: 'New feature deployed to production', time: '2m ago', done: true },
  { text: 'Sprint 14 review completed', time: '1h ago', done: true },
  { text: 'Database migration scheduled', time: '3h ago', done: false },
  { text: 'Security audit passed', time: 'Yesterday', done: true },
]

export default function HeroDashboard() {
  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute inset-8 bg-[#2563EB] opacity-[0.08] blur-3xl rounded-3xl -z-10" />

      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FC7E75]" />
            <div className="w-3 h-3 rounded-full bg-[#FDCA40]" />
            <div className="w-3 h-3 rounded-full bg-[#34C85A]" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-xs text-[#64748B] font-medium">dashboard.nuwalent.com</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#0F172A]">Project Overview</h3>
            <span className="text-xs text-[#64748B] bg-[#F8FAFC] px-2 py-1 rounded-md border border-[#E2E8F0]">
              Sprint 14
            </span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="bg-[#F8FAFC] rounded-xl p-3 border border-[#F1F5F9]"
              >
                <metric.icon size={14} className={`${metric.color} mb-2`} />
                <div className="text-base font-bold text-[#0F172A] leading-none mb-1">
                  {metric.value}
                </div>
                <div className="text-[10px] text-[#64748B]">{metric.label}</div>
                <div className={`text-[10px] font-semibold mt-1 ${metric.color}`}>
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-medium">Sprint Progress</span>
              <span className="text-xs text-[#0F172A] font-semibold">72%</span>
            </div>
            <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Activity feed */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
              Recent Activity
            </span>
            {recentActivities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 py-2 border-b border-[#F8FAFC] last:border-0"
              >
                <CheckCircle2
                  size={13}
                  className={activity.done ? 'text-[#10B981]' : 'text-[#CBD5E1]'}
                />
                <span className="text-xs text-[#334155] flex-1 leading-snug">
                  {activity.text}
                </span>
                <span className="text-[10px] text-[#94A3B8] whitespace-nowrap">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute -right-6 -bottom-6 bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-4 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center flex-shrink-0">
          <TrendingUp size={14} className="text-[#10B981]" />
        </div>
        <div>
          <div className="text-xs font-bold text-[#0F172A]">+24% growth</div>
          <div className="text-[10px] text-[#64748B]">vs last sprint</div>
        </div>
      </motion.div>
    </div>
  )
}
