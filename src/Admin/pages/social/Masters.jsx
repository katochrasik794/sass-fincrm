import { useState } from 'react'
import { Search, Plus, Eye, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function SocialMasters() {
  const [searchQuery, setSearchQuery] = useState('')

  const masters = [
    { id: 1, name: 'Master Trader Pro', followers: 1250, copiers: 245, totalProfit: '+$125,000', winRate: '78%', status: 'active' },
    { id: 2, name: 'Elite Signals', followers: 890, copiers: 156, totalProfit: '+$89,500', winRate: '82%', status: 'active' },
    { id: 3, name: 'Crypto Master', followers: 650, copiers: 98, totalProfit: '+$45,200', winRate: '75%', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Social Masters</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage social trading masters</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Master
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search masters..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Master</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Followers</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Copiers</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Total Profit</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Win Rate</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {masters.map((master) => (
                <tr key={master.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{master.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{master.followers}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{master.copiers}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600 dark:text-emerald-400">{master.totalProfit}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{master.winRate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><Eye className="h-4 w-4 text-slate-600 dark:text-slate-400" /></button>
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

