import { useState } from 'react'
import { Search, Filter, Download, CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react'

export default function Deposits() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const deposits = [
    {
      id: 1,
      transactionId: 'DEP-001234',
      clientName: 'John Doe',
      amount: '$2,500.00',
      method: 'Credit Card',
      status: 'completed',
      date: '2024-01-20',
      time: '14:30',
      fee: '$0.00'
    },
    {
      id: 2,
      transactionId: 'DEP-001235',
      clientName: 'Jane Smith',
      amount: '$1,200.00',
      method: 'Bank Transfer',
      status: 'pending',
      date: '2024-01-20',
      time: '10:15',
      fee: '$5.00'
    },
    {
      id: 3,
      transactionId: 'DEP-001236',
      clientName: 'Mike Johnson',
      amount: '$5,000.00',
      method: 'Crypto',
      status: 'completed',
      date: '2024-01-19',
      time: '16:45',
      fee: '$0.00'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Deposits</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage all deposit transactions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Download className="h-5 w-5" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Deposits</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$125K</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Today</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Completed</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">245</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Pending</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Failed</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">3</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search deposits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Fee</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {deposits.map((deposit) => (
                <tr key={deposit.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{deposit.transactionId}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white">{deposit.clientName}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{deposit.amount}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{deposit.method}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{deposit.fee}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {deposit.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : deposit.status === 'pending' ? (
                        <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      )}
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        deposit.status === 'completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                        deposit.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {deposit.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">
                    {deposit.date} {deposit.time}
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

