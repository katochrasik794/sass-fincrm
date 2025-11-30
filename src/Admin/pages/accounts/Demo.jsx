import { useState } from 'react'
import { Search, Plus, Edit, Eye, Play, Pause } from 'lucide-react'

export default function DemoAccounts() {
  const [searchQuery, setSearchQuery] = useState('')

  const accounts = [
    {
      id: 1,
      accountNumber: 'DEMO-001234',
      clientName: 'John Doe',
      balance: '$10,000.00',
      equity: '$10,150.00',
      leverage: '1:100',
      status: 'active',
      openDate: '2024-01-15',
      profit: '+$150.00'
    },
    {
      id: 2,
      accountNumber: 'DEMO-001235',
      clientName: 'Jane Smith',
      balance: '$10,000.00',
      equity: '$9,850.00',
      leverage: '1:200',
      status: 'active',
      openDate: '2024-01-10',
      profit: '-$150.00'
    },
    {
      id: 3,
      accountNumber: 'DEMO-001236',
      clientName: 'Mike Johnson',
      balance: '$10,000.00',
      equity: '$10,000.00',
      leverage: '1:100',
      status: 'paused',
      openDate: '2023-12-20',
      profit: '$0.00'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Demo Accounts</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage all demo trading accounts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Create Demo Account
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Demo Accounts</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">3,245</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Active Accounts</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">2,892</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Paused Accounts</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">353</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">New This Month</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">127</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search demo accounts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Accounts Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Account</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Equity</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Profit/Loss</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {accounts.map((account) => (
                <tr key={account.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{account.accountNumber}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{account.openDate}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white">{account.clientName}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{account.balance}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{account.equity}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${
                      account.profit.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 
                      account.profit.startsWith('-') ? 'text-red-600 dark:text-red-400' : 
                      'text-slate-600 dark:text-slate-400'
                    }`}>
                      {account.profit}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      account.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {account.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="View">
                        <Eye className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Edit">
                        <Edit className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      {account.status === 'active' ? (
                        <button className="p-2 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-lg transition-colors" title="Pause">
                          <Pause className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </button>
                      ) : (
                        <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="Resume">
                          <Play className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

