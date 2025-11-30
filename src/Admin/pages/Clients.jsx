import { useState } from 'react'
import { Search, Filter, Plus, MoreVertical, Edit, Trash2, Eye, Mail, Phone, Calendar } from 'lucide-react'

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      status: 'active',
      joinDate: '2024-01-15',
      totalDeposits: '$12,500',
      accounts: 2,
      tier: 'Gold'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8901',
      status: 'active',
      joinDate: '2024-01-10',
      totalDeposits: '$8,200',
      accounts: 1,
      tier: 'Silver'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234-567-8902',
      status: 'inactive',
      joinDate: '2023-12-20',
      totalDeposits: '$5,000',
      accounts: 1,
      tier: 'Bronze'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+1 234-567-8903',
      status: 'active',
      joinDate: '2024-01-05',
      totalDeposits: '$25,000',
      accounts: 3,
      tier: 'Platinum'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+1 234-567-8904',
      status: 'pending',
      joinDate: '2024-01-20',
      totalDeposits: '$0',
      accounts: 0,
      tier: 'New'
    },
  ]

  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' || client.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Clients</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage all your clients</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add New Client
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Clients</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">1,245</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">+12.5% from last month</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Active Clients</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">892</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">+8.2% from last month</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">New This Month</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">127</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">+24 new today</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Deposits</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$2.4M</p>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">+18.4% from last month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients by name or email..."
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Total Deposits</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Accounts</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{client.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {client.joinDate}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-400" />
                        {client.email}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {client.phone}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      client.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' :
                      client.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white font-semibold">
                    {client.totalDeposits}
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white">
                    {client.accounts}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      {client.tier}
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

