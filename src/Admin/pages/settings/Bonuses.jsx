import { useState } from 'react'
import { Plus, Edit, Trash2, Gift } from 'lucide-react'

export default function Bonuses() {
  const bonuses = [
    { id: 1, name: 'Welcome Bonus', type: 'Percentage', value: '20%', minDeposit: '$100', maxBonus: '$500', status: 'active' },
    { id: 2, name: 'Loyalty Bonus', type: 'Fixed', value: '$50', minDeposit: '$500', maxBonus: '$50', status: 'active' },
    { id: 3, name: 'VIP Bonus', type: 'Percentage', value: '50%', minDeposit: '$5,000', maxBonus: '$2,500', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Bonuses</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage bonus programs and promotions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Bonus
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Bonus Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Min Deposit</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Max Bonus</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {bonuses.map((bonus) => (
                <tr key={bonus.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{bonus.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{bonus.type}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{bonus.value}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{bonus.minDeposit}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{bonus.maxBonus}</td>
                  <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{bonus.status}</span></td>
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

