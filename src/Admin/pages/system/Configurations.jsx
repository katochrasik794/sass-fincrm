import { useState } from 'react'
import { Save, Settings } from 'lucide-react'

export default function Configurations() {
  const [configs, setConfigs] = useState({
    siteName: 'finCRM',
    siteEmail: 'support@fincrm.com',
    maintenanceMode: false,
    registrationEnabled: true,
    maxLoginAttempts: 5,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">System Configurations</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">Manage system-wide settings and configurations</p>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Site Name</label>
            <input type="text" value={configs.siteName} onChange={(e) => setConfigs({...configs, siteName: e.target.value})} className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Site Email</label>
            <input type="email" value={configs.siteEmail} onChange={(e) => setConfigs({...configs, siteEmail: e.target.value})} className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Maintenance Mode</label>
              <p className="text-xs text-slate-500 dark:text-slate-400">Enable to put site in maintenance mode</p>
            </div>
            <button onClick={() => setConfigs({...configs, maintenanceMode: !configs.maintenanceMode})} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${configs.maintenanceMode ? 'bg-purple-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${configs.maintenanceMode ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Registration Enabled</label>
              <p className="text-xs text-slate-500 dark:text-slate-400">Allow new user registrations</p>
            </div>
            <button onClick={() => setConfigs({...configs, registrationEnabled: !configs.registrationEnabled})} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${configs.registrationEnabled ? 'bg-purple-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${configs.registrationEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Max Login Attempts</label>
            <input type="number" value={configs.maxLoginAttempts} onChange={(e) => setConfigs({...configs, maxLoginAttempts: parseInt(e.target.value)})} className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
            <Save className="h-5 w-5" />
            Save Configurations
          </button>
        </div>
      </div>
    </div>
  )
}

