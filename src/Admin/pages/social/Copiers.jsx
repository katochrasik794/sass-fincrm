import { useState } from 'react'
import { Search, Users, TrendingUp } from 'lucide-react'

export default function SocialCopiers() {
  const [searchQuery, setSearchQuery] = useState('')

  const copiers = [
    { id: 1, name: 'John Doe', master: 'Master Trader Pro', copiedAmount: '$5,000', profit: '+$450', status: 'active' },
    { id: 2, name: 'Jane Smith', master: 'Elite Signals', copiedAmount: '$3,200', profit: '+$280', status: 'active' },
    { id: 3, name: 'Mike Johnson', master: 'Crypto Master', copiedAmount: '$2,500', profit: '-$120', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Social Copiers</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">Manage social trading copiers</p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input type="text" placeholder="Search copiers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Copier</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Master</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Copied Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Profit/Loss</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {copiers.map((copier) => (
                <tr key={copier.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{copier.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{copier.master}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{copier.copiedAmount}</td>
                  <td className={`px-6 py-4 font-semibold ${copier.profit.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>{copier.profit}</td>
                  <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{copier.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

