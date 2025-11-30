import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight,
  Star,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Award
} from 'lucide-react'

export default function Discover() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const marketInsights = [
    {
      id: 1,
      title: 'EUR/USD Analysis',
      description: 'Strong bullish momentum expected in the coming week',
      trend: 'up',
      change: '+2.4%',
      category: 'Forex',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Gold Price Surge',
      description: 'Safe haven demand drives gold prices higher',
      trend: 'up',
      change: '+1.8%',
      category: 'Commodities',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Bitcoin Correction',
      description: 'Technical indicators suggest potential pullback',
      trend: 'down',
      change: '-3.2%',
      category: 'Crypto',
      icon: TrendingDown
    },
    {
      id: 4,
      title: 'Stock Market Rally',
      description: 'Tech stocks lead the market higher',
      trend: 'up',
      change: '+4.1%',
      category: 'Stocks',
      icon: TrendingUp
    }
  ]

  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Real-time market data and insights',
      icon: BarChart3,
      color: 'bg-blue-500',
      action: () => navigate('/invest')
    },
    {
      title: 'Global Markets',
      description: 'Access to worldwide trading opportunities',
      icon: Globe,
      color: 'bg-purple-500',
      action: () => navigate('/funds')
    },
    {
      title: 'Fast Execution',
      description: 'Lightning-fast trade execution',
      icon: Zap,
      color: 'bg-orange-500',
      action: () => navigate('/transactions')
    },
    {
      title: 'Secure Platform',
      description: 'Bank-level security for your funds',
      icon: Shield,
      color: 'bg-emerald-500',
      action: () => navigate('/profile')
    }
  ]

  const topPerformers = [
    { name: 'Growth Fund A', return: '+24.5%', rating: 5, investors: 1250 },
    { name: 'Tech Index Fund', return: '+18.2%', rating: 5, investors: 890 },
    { name: 'Global Diversified', return: '+15.8%', rating: 4, investors: 2100 },
    { name: 'Emerging Markets', return: '+12.3%', rating: 4, investors: 750 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Discover</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Explore markets, insights, and opportunities</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search markets, assets, or insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
          />
        </div>

        {/* Market Insights */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Market Insights</h2>
            <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 text-sm font-medium">
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketInsights.map((insight) => {
              const Icon = insight.icon
              return (
                <div
                  key={insight.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                  onClick={() => navigate('/invest')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${
                      insight.trend === 'up'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-sm font-semibold ${
                      insight.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {insight.change}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{insight.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{insight.description}</p>
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                    {insight.category}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={index}
                  onClick={feature.action}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all text-left hover:scale-105"
                >
                  <div className={`${feature.color} p-3 rounded-xl text-white w-fit mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Top Performing Funds</h2>
            <button
              onClick={() => navigate('/invest')}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 text-sm font-medium"
            >
              Explore All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            {topPerformers.map((fund, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                onClick={() => navigate('/invest')}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < fund.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{fund.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{fund.investors.toLocaleString()} investors</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600 dark:text-emerald-400">{fund.return}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate('/invest')
                    }}
                    className="mt-2 px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Invest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
