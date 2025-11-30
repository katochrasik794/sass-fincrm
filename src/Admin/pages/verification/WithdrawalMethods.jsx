import { useState } from 'react'
import { Search, Plus, Edit, Trash2, CheckCircle, XCircle, CreditCard, Building } from 'lucide-react'

export default function WithdrawalMethods() {
  const [searchQuery, setSearchQuery] = useState('')

  const methods = [
    {
      id: 1,
      methodName: 'Bank Transfer',
      type: 'Bank',
      status: 'active',
      minAmount: '$100',
      maxAmount: '$10,000',
      fee: '$10.00',
      processingTime: '1-3 business days',
      clients: 245
    },
    {
      id: 2,
      methodName: 'Credit Card',
      type: 'Card',
      status: 'active',
      minAmount: '$50',
      maxAmount: '$5,000',
      fee: '$5.00',
      processingTime: 'Instant',
      clients: 892
    },
    {
      id: 3,
      methodName: 'Cryptocurrency',
      type: 'Crypto',
      status: 'active',
      minAmount: '$100',
      maxAmount: '$50,000',
      fee: '$0.00',
      processingTime: '1-2 hours',
      clients: 156
    },
    {
      id: 4,
      methodName: 'E-Wallet',
      type: 'Wallet',
      status: 'inactive',
      minAmount: '$25',
      maxAmount: '$2,000',
      fee: '$2.00',
      processingTime: 'Instant',
      clients: 78
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Withdrawal Methods</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage available withdrawal methods</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Method
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Methods</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Active Methods</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">9</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,371</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search methods..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {methods.map((method) => (
          <div key={method.id} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {method.type === 'Bank' ? (
                  <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                ) : method.type === 'Card' ? (
                  <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                ) : (
                  <CreditCard className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{method.methodName}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{method.type}</p>
                </div>
              </div>
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                method.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {method.status}
              </span>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Min Amount</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.minAmount}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Max Amount</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.maxAmount}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Fee</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.fee}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Processing</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.processingTime}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Active Clients</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.clients}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

