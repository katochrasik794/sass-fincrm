import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  TrendingUp, 
  TrendingDown,
  Star,
  ArrowRight,
  DollarSign,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Info
} from 'lucide-react'

export default function Invest() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'stocks', 'forex', 'crypto', 'commodities']

  const investmentOptions = [
    {
      id: 1,
      name: 'Growth Fund A',
      category: 'stocks',
      return: '+24.5%',
      risk: 'Medium',
      minInvestment: '$1,000',
      description: 'Diversified portfolio focusing on growth stocks',
      rating: 5,
      investors: 1250,
      icon: TrendingUp,
      featured: true
    },
    {
      id: 2,
      name: 'Tech Index Fund',
      category: 'stocks',
      return: '+18.2%',
      risk: 'Low',
      minInvestment: '$500',
      description: 'Technology sector index with strong performance',
      rating: 5,
      investors: 890,
      icon: TrendingUp,
      featured: true
    },
    {
      id: 3,
      name: 'Forex Pro Strategy',
      category: 'forex',
      return: '+15.8%',
      risk: 'High',
      minInvestment: '$2,000',
      description: 'Professional forex trading strategy',
      rating: 4,
      investors: 650,
      icon: BarChart3,
      featured: false
    },
    {
      id: 4,
      name: 'Crypto Momentum',
      category: 'crypto',
      return: '+32.1%',
      risk: 'High',
      minInvestment: '$1,500',
      description: 'Cryptocurrency momentum trading',
      rating: 4,
      investors: 420,
      icon: TrendingUp,
      featured: false
    },
    {
      id: 5,
      name: 'Global Diversified',
      category: 'stocks',
      return: '+15.8%',
      risk: 'Low',
      minInvestment: '$800',
      description: 'Global market diversification',
      rating: 4,
      investors: 2100,
      icon: Shield,
      featured: false
    },
    {
      id: 6,
      name: 'Gold & Precious Metals',
      category: 'commodities',
      return: '+12.3%',
      risk: 'Medium',
      minInvestment: '$1,200',
      description: 'Precious metals investment fund',
      rating: 4,
      investors: 750,
      icon: DollarSign,
      featured: false
    }
  ]

  const filteredOptions = selectedCategory === 'all'
    ? investmentOptions
    : investmentOptions.filter(option => option.category === selectedCategory)

  const handleInvest = (option) => {
    if (window.confirm(`Invest in ${option.name}?`)) {
      navigate('/funds')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Investment Opportunities</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Explore and invest in various financial instruments</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Investment Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOptions.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border-2 transition-all hover:shadow-xl ${
                  option.featured
                    ? 'border-purple-500 dark:border-purple-400'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {option.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{option.return}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Annual Return</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{option.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Risk Level</span>
                    <span className={`font-semibold ${
                      option.risk === 'Low' ? 'text-emerald-600 dark:text-emerald-400' :
                      option.risk === 'Medium' ? 'text-orange-600 dark:text-orange-400' :
                      'text-red-600 dark:text-red-400'
                    }`}>
                      {option.risk}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Min. Investment</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{option.minInvestment}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Investors</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{option.investors.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < option.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleInvest(option)}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-3 font-bold transition-colors flex items-center justify-center gap-2"
                >
                  Invest Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Investment Disclaimer</h3>
              <p className="text-sm text-blue-100">
                All investments carry risk. Past performance is not indicative of future results. 
                Please review all investment options carefully and consider your risk tolerance before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
