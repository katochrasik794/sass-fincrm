import { useState } from 'react'
import { Plus, Edit, Trash2, Settings } from 'lucide-react'

export default function AccountTypes() {
  const accountTypes = [
    { id: 1, name: 'Standard', minDeposit: '$100', maxLeverage: '1:100', spread: '1.5 pips', commission: '$0', status: 'active' },
    { id: 2, name: 'Premium', minDeposit: '$500', maxLeverage: '1:200', spread: '1.0 pips', commission: '$0', status: 'active' },
    { id: 3, name: 'VIP', minDeposit: '$5,000', maxLeverage: '1:500', spread: '0.5 pips', commission: '$0', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Account Types</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage trading account types</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Account Type
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Min Deposit</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Max Leverage</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Spread</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {accountTypes.map((type) => (
                <tr key={type.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{type.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{type.minDeposit}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{type.maxLeverage}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{type.spread}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{type.commission}</td>
                  <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{type.status}</span></td>
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

