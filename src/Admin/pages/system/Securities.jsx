import { useState } from 'react'
import { Plus, Edit, Trash2, TrendingUp } from 'lucide-react'

export default function Securities() {
  const securities = [
    { id: 1, symbol: 'EURUSD', name: 'Euro/US Dollar', type: 'Forex', status: 'active' },
    { id: 2, symbol: 'GBPUSD', name: 'British Pound/US Dollar', type: 'Forex', status: 'active' },
    { id: 3, symbol: 'BTCUSD', name: 'Bitcoin/US Dollar', type: 'Crypto', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Securities</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage trading securities and instruments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Security
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {securities.map((security) => (
                <tr key={security.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{security.symbol}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{security.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{security.type}</td>
                  <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{security.status}</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><Edit className="h-4 w-4 text-slate-600 dark:text-slate-400" /></button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" /></button>
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

