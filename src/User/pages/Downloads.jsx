import { useState } from 'react'
import { 
  Download, 
  FileText,
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle,
  Clock,
  HardDrive,
  Globe,
  Book
} from 'lucide-react'

export default function Downloads() {
  const [downloading, setDownloading] = useState(null)

  const downloads = [
    {
      id: 1,
      name: 'Desktop Application',
      description: 'Full-featured desktop app for Windows, macOS, and Linux',
      version: 'v2.4.1',
      size: '125 MB',
      platform: 'Desktop',
      icon: Monitor,
      color: 'bg-blue-500',
      downloads: 45230,
      latest: true
    },
    {
      id: 2,
      name: 'Mobile App (iOS)',
      description: 'Native iOS app for iPhone and iPad',
      version: 'v2.3.5',
      size: '45 MB',
      platform: 'iOS',
      icon: Smartphone,
      color: 'bg-purple-500',
      downloads: 28900,
      latest: true
    },
    {
      id: 3,
      name: 'Mobile App (Android)',
      description: 'Android app for phones and tablets',
      version: 'v2.3.5',
      size: '52 MB',
      platform: 'Android',
      icon: Tablet,
      color: 'bg-emerald-500',
      downloads: 34120,
      latest: true
    },
    {
      id: 4,
      name: 'Trading Platform Extension',
      description: 'Browser extension for Chrome and Firefox',
      version: 'v1.8.2',
      size: '8 MB',
      platform: 'Browser',
      icon: Globe,
      color: 'bg-orange-500',
      downloads: 15600,
      latest: true
    }
  ]

  const resources = [
    {
      name: 'User Manual PDF',
      description: 'Complete guide to using the platform',
      type: 'PDF',
      size: '12 MB',
      icon: Book,
      downloads: 8900
    },
    {
      name: 'API Documentation',
      description: 'Comprehensive API reference',
      type: 'ZIP',
      size: '5 MB',
      icon: FileText,
      downloads: 5600
    },
    {
      name: 'Sample Data Files',
      description: 'Example datasets for testing',
      type: 'ZIP',
      size: '25 MB',
      icon: HardDrive,
      downloads: 3200
    }
  ]

  const handleDownload = (id, name) => {
    setDownloading(id)
    setTimeout(() => {
      alert(`Download started: ${name}`)
      setDownloading(null)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Downloads</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Get our applications and resources</p>
        </div>

        {/* Applications */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${item.color} p-3 rounded-xl text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {item.latest && (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-semibold">
                        Latest
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Version</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.version}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Size</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.size}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Platform</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.platform}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Downloads</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{item.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(item.id, item.name)}
                    disabled={downloading === item.id}
                    className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-slate-400 text-white rounded-xl py-3 font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    {downloading === item.id ? (
                      <>
                        <Clock className="h-5 w-5 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download
                      </>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Resources & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all"
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400 w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{resource.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-slate-600 dark:text-slate-400">{resource.type}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{resource.size}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(`resource-${index}`, resource.name)}
                    disabled={downloading === `resource-${index}`}
                    className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl py-2 font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {downloading === `resource-${index}` ? (
                      <>
                        <Clock className="h-4 w-4 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Download
                      </>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Desktop</h3>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• Windows 10 or later</li>
                <li>• macOS 11.0 or later</li>
                <li>• Linux (Ubuntu 20.04+)</li>
                <li>• 4GB RAM minimum</li>
                <li>• 500MB free disk space</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mobile</h3>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• iOS 14.0 or later</li>
                <li>• Android 8.0 or later</li>
                <li>• 2GB RAM minimum</li>
                <li>• 100MB free storage</li>
                <li>• Internet connection required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
