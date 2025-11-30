import { useState } from 'react'
import { 
  Search, 
  Filter,
  ArrowDownRight, 
  ArrowUpRight,
  TrendingUp,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react'

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const transactions = [
    { id: 1, type: 'Deposit', amount: '+$2,500.00', method: 'Card', date: '2024-01-15', time: '14:30', status: 'completed', icon: ArrowDownRight, category: 'Funding' },
    { id: 2, type: 'Investment', amount: '-$1,200.00', date: '2024-01-15', time: '10:15', status: 'completed', icon: ArrowUpRight, category: 'Investment' },
    { id: 3, type: 'Profit', amount: '+$450.00', date: '2024-01-14', time: '16:45', status: 'completed', icon: TrendingUp, category: 'Earnings' },
    { id: 4, type: 'Withdrawal', amount: '-$800.00', method: 'Bank', date: '2024-01-14', time: '09:20', status: 'pending', icon: ArrowDownRight, category: 'Withdrawal' },
    { id: 5, type: 'Deposit', amount: '+$1,200.00', method: 'Wallet', date: '2024-01-13', time: '11:00', status: 'completed', icon: ArrowDownRight, category: 'Funding' },
    { id: 6, type: 'Investment', amount: '-$500.00', date: '2024-01-12', time: '15:30', status: 'completed', icon: ArrowUpRight, category: 'Investment' },
    { id: 7, type: 'Profit', amount: '+$320.00', date: '2024-01-12', time: '08:15', status: 'completed', icon: TrendingUp, category: 'Earnings' },
    { id: 8, type: 'Withdrawal', amount: '-$500.00', method: 'Bank', date: '2024-01-11', time: '13:45', status: 'completed', icon: ArrowDownRight, category: 'Withdrawal' },
    { id: 9, type: 'Deposit', amount: '+$3,000.00', method: 'Card', date: '2024-01-10', time: '10:00', status: 'completed', icon: ArrowDownRight, category: 'Funding' },
    { id: 10, type: 'Investment', amount: '-$2,000.00', date: '2024-01-09', time: '14:20', status: 'completed', icon: ArrowUpRight, category: 'Investment' }
  ]

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.amount.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === 'all' || t.category.toLowerCase() === filterType.toLowerCase()
    const matchesStatus = filterStatus === 'all' || t.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return CheckCircle
      case 'pending':
        return Clock
      default:
        return XCircle
    }
  }

  const totalStats = {
    deposits: transactions.filter(t => t.type === 'Deposit').reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^0-9.]/g, '')), 0),
    withdrawals: transactions.filter(t => t.type === 'Withdrawal').reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^0-9.]/g, '')), 0),
    profits: transactions.filter(t => t.type === 'Profit').reduce((sum, t) => sum + parseFloat(t.amount.replace(/[^0-9.]/g, '')), 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Transactions</h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">View and manage all your transactions</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto">
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            Export
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Total Deposits</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              ${totalStats.deposits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Total Withdrawals</p>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              ${totalStats.withdrawals.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Total Profits</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              ${totalStats.profits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
              >
                <option value="all">All Types</option>
                <option value="funding">Funding</option>
                <option value="investment">Investment</option>
                <option value="earnings">Earnings</option>
                <option value="withdrawal">Withdrawal</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-[600px]">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredTransactions.map((transaction) => {
                  const Icon = transaction.icon
                  const StatusIcon = getStatusIcon(transaction.status)
                  return (
                    <tr key={transaction.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            transaction.type === 'Deposit' || transaction.type === 'Profit'
                              ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                              : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-white">{transaction.type}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{transaction.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className={`font-bold ${
                          transaction.amount.startsWith('+')
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-900 dark:text-white'
                        }`}>
                          {transaction.amount}
                        </p>
                        {transaction.method && (
                          <p className="text-sm text-slate-600 dark:text-slate-400">{transaction.method}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{transaction.date}</span>
                          <span className="text-sm">{transaction.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 ${
                          transaction.status === 'completed'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : transaction.status === 'pending'
                            ? 'text-orange-600 dark:text-orange-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          <StatusIcon className="h-4 w-4" />
                          <span className="text-sm font-medium capitalize">{transaction.status}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {filteredTransactions.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-slate-600 dark:text-slate-400">No transactions found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
