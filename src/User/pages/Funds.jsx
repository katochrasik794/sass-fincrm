import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Plus, 
  Minus, 
  ArrowDownRight, 
  ArrowUpRight,
  Wallet,
  CreditCard,
  Banknote,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react'

export default function Funds() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('deposit')
  const [amount, setAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('card')

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, available: true },
    { id: 'bank', name: 'Bank Transfer', icon: Banknote, available: true },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, available: true }
  ]

  const recentActivity = [
    { id: 1, type: 'Deposit', amount: '$2,500.00', method: 'Card', date: '2 hours ago', status: 'completed', icon: ArrowDownRight },
    { id: 2, type: 'Withdrawal', amount: '$800.00', method: 'Bank', date: '1 day ago', status: 'pending', icon: ArrowUpRight },
    { id: 3, type: 'Deposit', amount: '$1,200.00', method: 'Wallet', date: '3 days ago', status: 'completed', icon: ArrowDownRight },
    { id: 4, type: 'Withdrawal', amount: '$500.00', method: 'Bank', date: '5 days ago', status: 'completed', icon: ArrowUpRight }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (amount && parseFloat(amount) > 0) {
      alert(`${activeTab === 'deposit' ? 'Deposit' : 'Withdrawal'} of $${amount} initiated successfully!`)
      setAmount('')
      navigate('/transactions')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Funds Management</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Deposit or withdraw funds from your account</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <p className="text-purple-100 text-sm sm:text-base mb-1 sm:mb-2">Total Balance</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">$12,450.00</p>
            </div>
            <Wallet className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/80 flex-shrink-0" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-purple-100 text-sm mb-1">Available</p>
              <p className="text-xl font-semibold">$11,250.00</p>
            </div>
            <div>
              <p className="text-purple-100 text-sm mb-1">Pending</p>
              <p className="text-xl font-semibold">$1,200.00</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <div className="flex gap-2 mb-4 sm:mb-6">
            <button
              onClick={() => setActiveTab('deposit')}
              className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-sm sm:text-base font-semibold transition-colors flex items-center justify-center ${
                activeTab === 'deposit'
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Deposit
            </button>
            <button
              onClick={() => setActiveTab('withdraw')}
              className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-sm sm:text-base font-semibold transition-colors flex items-center justify-center ${
                activeTab === 'withdraw'
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              <Minus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Withdraw
            </button>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedMethod === method.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700'
                    } ${!method.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!method.available}
                  >
                    <Icon className={`h-6 w-6 mb-2 ${
                      selectedMethod === method.id
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`} />
                    <p className={`font-semibold text-sm ${
                      selectedMethod === method.id
                        ? 'text-purple-900 dark:text-purple-300'
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {method.name}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Amount Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-8 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-lg font-semibold"
                  required
                />
              </div>
              <div className="flex gap-2 mt-3">
                {[100, 500, 1000, 5000].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value.toString())}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    ${value}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-4 font-bold text-lg transition-colors shadow-lg shadow-purple-500/30"
            >
              {activeTab === 'deposit' ? 'Deposit Funds' : 'Withdraw Funds'}
            </button>
          </form>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Activity</h2>
            <button
              onClick={() => navigate('/transactions')}
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon
              const StatusIcon = activity.status === 'completed' ? CheckCircle : activity.status === 'pending' ? Clock : XCircle
              return (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  onClick={() => navigate('/transactions')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'Deposit'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{activity.type}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{activity.method} • {activity.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold mb-1 ${
                      activity.type === 'Deposit'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {activity.type === 'Deposit' ? '+' : '-'}{activity.amount}
                    </p>
                    <div className={`flex items-center gap-1 text-xs ${
                      activity.status === 'completed'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : activity.status === 'pending'
                        ? 'text-orange-600 dark:text-orange-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      <StatusIcon className="h-3 w-3" />
                      {activity.status}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
