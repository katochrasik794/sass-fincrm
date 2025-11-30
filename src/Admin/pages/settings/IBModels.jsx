import { useState } from 'react'
import { Plus, Edit, Trash2, Percent } from 'lucide-react'

export default function IBModels() {
  const models = [
    { id: 1, name: 'Revenue Share', type: 'Percentage', rate: '30%', minVolume: '$10,000', status: 'active' },
    { id: 2, name: 'CPA Model', type: 'Fixed', rate: '$50 per client', minVolume: '$0', status: 'active' },
    { id: 3, name: 'Hybrid Model', type: 'Mixed', rate: '20% + $25', minVolume: '$5,000', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">IB Models</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage introducing broker commission models</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add IB Model
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Model Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Rate</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Min Volume</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {models.map((model) => (
                <tr key={model.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{model.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{model.type}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{model.rate}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{model.minVolume}</td>
                  <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{model.status}</span></td>
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

