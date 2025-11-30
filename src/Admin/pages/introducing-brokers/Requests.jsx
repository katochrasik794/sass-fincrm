import { useState } from 'react'
import { Search, Check, X, Eye, Mail, Phone, Building } from 'lucide-react'

export default function IBRequests() {
  const [searchQuery, setSearchQuery] = useState('')

  const requests = [
    {
      id: 1,
      companyName: 'New Trading Solutions',
      contactPerson: 'John Smith',
      email: 'john@newtrading.com',
      phone: '+1 234-567-8900',
      country: 'United States',
      status: 'pending',
      submittedDate: '2024-01-20',
      expectedClients: 50
    },
    {
      id: 2,
      companyName: 'Elite Financial Group',
      contactPerson: 'Sarah Johnson',
      email: 'sarah@elitefinancial.com',
      phone: '+1 234-567-8901',
      country: 'Canada',
      status: 'pending',
      submittedDate: '2024-01-18',
      expectedClients: 75
    },
    {
      id: 3,
      companyName: 'Global Markets Ltd',
      contactPerson: 'Mike Brown',
      email: 'mike@globalmarkets.com',
      phone: '+1 234-567-8902',
      country: 'United Kingdom',
      status: 'reviewed',
      submittedDate: '2024-01-15',
      expectedClients: 100
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">IB Requests</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Review and manage introducing broker requests</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Pending Requests</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Under Review</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">5</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Approved This Month</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">8</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Country</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Expected Clients</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Submitted</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-slate-400" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{request.companyName}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{request.contactPerson}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-400" />
                        {request.email}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {request.phone}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white">{request.country}</td>
                  <td className="px-6 py-4 text-slate-900 dark:text-white font-semibold">{request.expectedClients}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">{request.submittedDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="View Details">
                        <Eye className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="Approve">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Reject">
                        <X className="h-4 w-4 text-red-600 dark:text-red-400" />
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

