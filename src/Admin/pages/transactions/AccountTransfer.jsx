import { useState } from 'react'
import { Search, ArrowRightLeft, CheckCircle, Clock } from 'lucide-react'

export default function AccountTransfers() {
  const [searchQuery, setSearchQuery] = useState('')

  const transfers = [
    {
      id: 1,
      transactionId: 'TRF-001234',
      clientName: 'John Doe',
      fromAccount: 'REAL-001234',
      toAccount: 'REAL-001235',
      amount: '$500.00',
      status: 'completed',
      date: '2024-01-20',
      time: '14:30'
    },
    {
      id: 2,
      transactionId: 'TRF-001235',
      clientName: 'Jane Smith',
      fromAccount: 'REAL-001236',
      toAccount: 'DEMO-001237',
      amount: '$1,000.00',
      status: 'pending',
      date: '2024-01-20',
      time: '10:15'
    },
    {
      id: 3,
      transactionId: 'TRF-001236',
      clientName: 'Mike Johnson',
      fromAccount: 'REAL-001238',
      toAccount: 'REAL-001239',
      amount: '$2,500.00',
      status: 'completed',
      date: '2024-01-19',
      time: '16:45'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Account Transfers</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage all account-to-account transfers</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Transfers</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">245</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">This Month</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Completed</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">238</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Pending</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">7</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search transfers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">From Account</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">To Account</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {transfers.map((transfer) => (
                <tr key={transfer.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{transfer.transactionId}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white">{transfer.clientName}</td>
                  <td className="px-6 py-4">
                    <p className="text-slate-900 dark:text-white font-medium">{transfer.fromAccount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ArrowRightLeft className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <p className="text-slate-900 dark:text-white font-medium">{transfer.toAccount}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 dark:text-white">{transfer.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {transfer.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      )}
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        transfer.status === 'completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {transfer.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">
                    {transfer.date} {transfer.time}
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

