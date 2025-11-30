import { useState } from 'react'
import { Plus, Edit, Trash2, Users } from 'lucide-react'

export default function ClientGroups() {
  const groups = [
    { id: 1, name: 'VIP Clients', members: 45, description: 'High-value clients with premium features', status: 'active' },
    { id: 2, name: 'Standard Clients', members: 1245, description: 'Regular trading clients', status: 'active' },
    { id: 3, name: 'Demo Users', members: 3245, description: 'Demo account holders', status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Client Groups</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage client groups and categories</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Group
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div key={group.id} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{group.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{group.members} members</p>
                </div>
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{group.status}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{group.description}</p>
            <div className="flex items-center gap-2">
              <button className="flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button className="px-3 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

