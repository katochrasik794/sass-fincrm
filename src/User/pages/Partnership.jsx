import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Users, 
  TrendingUp,
  Gift,
  Share2,
  Copy,
  CheckCircle,
  Award,
  DollarSign,
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default function Partnership() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const referralCode = 'PARTNER2024'

  const stats = [
    { label: 'Total Referrals', value: '127', icon: Users, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Active Partners', value: '89', icon: TrendingUp, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Total Earnings', value: '$4,250.00', icon: DollarSign, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'This Month', value: '$850.00', icon: BarChart3, color: 'text-orange-600 dark:text-orange-400' }
  ]

  const tiers = [
    {
      name: 'Bronze',
      requirements: '5-24 referrals',
      commission: '10%',
      benefits: ['10% commission', 'Basic support', 'Monthly reports'],
      color: 'bg-amber-500'
    },
    {
      name: 'Silver',
      requirements: '25-49 referrals',
      commission: '15%',
      benefits: ['15% commission', 'Priority support', 'Weekly reports', 'Marketing materials'],
      color: 'bg-slate-400'
    },
    {
      name: 'Gold',
      requirements: '50-99 referrals',
      commission: '20%',
      benefits: ['20% commission', 'Dedicated manager', 'Daily reports', 'Custom materials', 'Bonus rewards'],
      color: 'bg-yellow-400'
    },
    {
      name: 'Platinum',
      requirements: '100+ referrals',
      commission: '25%',
      benefits: ['25% commission', 'VIP support', 'Real-time reports', 'White-label solution', 'Exclusive events'],
      color: 'bg-purple-500'
    }
  ]

  const recentReferrals = [
    { name: 'John Doe', date: '2 days ago', status: 'Active', earnings: '$125.00' },
    { name: 'Jane Smith', date: '5 days ago', status: 'Active', earnings: '$89.50' },
    { name: 'Mike Johnson', date: '1 week ago', status: 'Active', earnings: '$156.00' },
    { name: 'Sarah Williams', date: '2 weeks ago', status: 'Active', earnings: '$98.75' }
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Partnership Program</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Earn rewards by referring friends and growing together</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800"
              >
                <div className={`p-2 sm:p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color} w-fit mb-3 sm:mb-4`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Referral Code */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white overflow-hidden">
          <div className="flex items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Your Referral Code</h2>
              <p className="text-xs sm:text-sm text-purple-100">Share this code and earn commissions</p>
            </div>
            <Gift className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/80 flex-shrink-0" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center justify-between gap-2 sm:gap-3 min-w-0">
              <code className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider truncate">{referralCode}</code>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex-shrink-0 text-xs sm:text-sm"
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
            <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-purple-600 rounded-xl text-sm sm:text-base font-bold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 flex-shrink-0">
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              Share
            </button>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Partnership Tiers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all"
              >
                <div className={`${tier.color} rounded-xl p-3 sm:p-4 text-white mb-3 sm:mb-4`}>
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mb-1 sm:mb-2" />
                  <h3 className="text-lg sm:text-xl font-bold">{tier.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2">{tier.requirements}</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{tier.commission}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/social')}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg py-2 text-sm sm:text-base font-semibold transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Referrals</h2>
            <button
              onClick={() => navigate('/transactions')}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 text-sm font-medium"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {recentReferrals.map((referral, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors gap-3"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-sm sm:text-base font-bold flex-shrink-0">
                    {referral.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate">{referral.name}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">{referral.date} • {referral.status}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">{referral.earnings}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Earnings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
