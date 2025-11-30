import { useState } from 'react'
import { Plus, Edit, Trash2, Shield } from 'lucide-react'

export default function Roles() {
  const roles = [
    { id: 1, name: 'Super Admin', permissions: 'All', users: 2, status: 'active' },
    { id: 2, name: 'Support Admin', permissions: 'Support, Tickets, Chats', users: 5, status: 'active' },
    { id: 3, name: 'Finance Admin', permissions: 'Transactions, Payouts, Reports', users: 3, status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Roles</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage admin roles and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          Add Role
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role) => (
          <div key={role.id} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{role.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{role.users} users</p>
                </div>
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">{role.status}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{role.permissions}</p>
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

