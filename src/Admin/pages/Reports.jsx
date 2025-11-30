import { useState } from 'react'
import { Download, Calendar, TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react'

export default function Reports() {
  const [dateRange, setDateRange] = useState('30d')

  const reports = [
    {
      id: 1,
      name: 'Client Activity Report',
      description: 'Detailed client activity and engagement metrics',
      type: 'Activity',
      lastGenerated: '2024-01-20',
      size: '2.5 MB'
    },
    {
      id: 2,
      name: 'Financial Summary',
      description: 'Complete financial overview including deposits and withdrawals',
      type: 'Financial',
      lastGenerated: '2024-01-20',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'IB Performance Report',
      description: 'Introducing broker performance and commission details',
      type: 'Performance',
      lastGenerated: '2024-01-19',
      size: '3.2 MB'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Reports</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Generate and manage system reports</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Reports</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Generated Today</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">This Month</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">127</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <BarChart3 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Size</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">125 MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Available Reports</h2>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {reports.map((report) => (
            <div key={report.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{report.name}</h3>
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      {report.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{report.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Last generated: {report.lastGenerated}
                    </span>
                    <span>Size: {report.size}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Generate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

