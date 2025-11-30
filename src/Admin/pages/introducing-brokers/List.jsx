import { useState } from 'react'
import { Search, Plus, Edit, Trash2, Eye, Mail, Phone, DollarSign, TrendingUp } from 'lucide-react'

export default function IBList() {
  const [searchQuery, setSearchQuery] = useState('')

  const brokers = [
    {
      id: 1,
      name: 'ABC Trading Group',
      email: 'contact@abctrading.com',
      phone: '+1 234-567-8900',
      clients: 45,
      totalVolume: '$1,250,000',
      commission: '$12,500',
      status: 'active',
      joinDate: '2023-06-15'
    },
    {
      id: 2,
      name: 'XYZ Financial Services',
      email: 'info@xyzfinancial.com',
      phone: '+1 234-567-8901',
      clients: 32,
      totalVolume: '$850,000',
      commission: '$8,500',
      status: 'active',
      joinDate: '2023-08-20'
    },
    {
      id: 3,
      name: 'Global Trade Partners',
      email: 'hello@globaltrade.com',
      phone: '+1 234-567-8902',
      clients: 18,
      totalVolume: '$420,000',
      commission: '$4,200',
      status: 'pending',
      joinDate: '2024-01-10'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Introducing Brokers - List</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage all introducing brokers</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add New IB
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total IBs</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">95</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Active IBs</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">78</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Clients</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">2,145</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Commission</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$125K</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search introducing brokers..."
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
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">IB Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Clients</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Total Volume</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {brokers.map((broker) => (
                <tr key={broker.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{broker.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Joined: {broker.joinDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-400" />
                        {broker.email}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {broker.phone}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white font-semibold">{broker.clients}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-slate-400" />
                      <span className="font-semibold text-slate-900 dark:text-white">{broker.totalVolume}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{broker.commission}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      broker.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {broker.status}
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
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete">
                        <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </button>
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

