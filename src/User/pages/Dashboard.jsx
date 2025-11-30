import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  BarChart3,
  Plus,
  Eye,
  ArrowRight,
  ChevronDown
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [selectedPeriod, setSelectedPeriod] = useState('7d')

  const stats = [
    {
      label: 'Total Balance',
      value: '$12,450.00',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      label: 'Active Funds',
      value: '$8,920.00',
      change: '+8.2%',
      trend: 'up',
      icon: Wallet,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Total Profit',
      value: '$3,530.00',
      change: '+15.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      label: 'Pending',
      value: '$1,200.00',
      change: '-2.1%',
      trend: 'down',
      icon: Activity,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]

  const recentTransactions = [
    { id: 1, type: 'Deposit', amount: '+$2,500.00', date: '2 hours ago', status: 'completed', icon: ArrowDownRight },
    { id: 2, type: 'Investment', amount: '-$1,200.00', date: '5 hours ago', status: 'completed', icon: ArrowUpRight },
    { id: 3, type: 'Profit', amount: '+$450.00', date: '1 day ago', status: 'completed', icon: TrendingUp },
    { id: 4, type: 'Withdrawal', amount: '-$800.00', date: '2 days ago', status: 'pending', icon: ArrowDownRight }
  ]

  const quickActions = [
    { label: 'Add Funds', icon: Plus, color: 'bg-blue-500 hover:bg-blue-600', action: () => navigate('/funds') },
    { label: 'Invest Now', icon: TrendingUp, color: 'bg-purple-500 hover:bg-purple-600', action: () => navigate('/invest') },
    { label: 'View Transactions', icon: BarChart3, color: 'bg-emerald-500 hover:bg-emerald-600', action: () => navigate('/transactions') },
    { label: 'Discover', icon: Eye, color: 'bg-orange-500 hover:bg-orange-600', action: () => navigate('/discover') }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sm:px-6 md:px-10 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left side: Logo, Separator, and Page Title */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            {/* Logo only */}
            <img
              src="/finCRM-logo-dark (1).png"
              alt="finCRM"
              className="h-6 sm:h-7 w-auto object-contain dark:brightness-0 dark:invert flex-shrink-0"
              draggable="false"
            />
            
            {/* Vertical Separator */}
            <span className="h-6 sm:h-8 w-px bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
            
            {/* Page Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white truncate">Dashboard</h1>
          </div>

          {/* Right side: Period Selector - Dropdown on Mobile, Buttons on Desktop */}
          {/* Mobile: Dropdown */}
          <div className="sm:hidden">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 appearance-none pr-8"
            >
              {['7d', '30d', '90d', '1y'].map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {['7d', '30d', '90d', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedPeriod === period
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/30 border border-white/20 dark:border-slate-800/50 overflow-hidden">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent pointer-events-none" />
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 relative z-10">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 relative z-10">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className={`${action.color} text-white rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 group relative overflow-hidden`}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative z-10 p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  
                  {/* Label with better typography */}
                  <span className="text-sm sm:text-base font-bold relative z-10 text-center">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Transactions</h2>
              <button
                onClick={() => navigate('/transactions')}
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 text-sm font-medium"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => {
                const Icon = transaction.icon
                return (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    onClick={() => navigate('/transactions')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        transaction.type === 'Deposit' || transaction.type === 'Profit'
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                          : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{transaction.type}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.amount.startsWith('+')
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-900 dark:text-white'
                      }`}>
                        {transaction.amount}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Performance</h2>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600 dark:text-slate-400">Chart visualization</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/transactions')}
              className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg py-2 font-semibold transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
