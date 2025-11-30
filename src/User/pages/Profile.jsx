import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  User, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Bell,
  Lock,
  CreditCard,
  Save,
  Edit,
  CheckCircle
} from 'lucide-react'

export default function Profile() {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    dateOfBirth: '1990-01-15',
    notifications: true,
    twoFactor: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const stats = [
    { label: 'Total Investments', value: '$8,920.00', icon: CreditCard },
    { label: 'Active Plans', value: '3', icon: Shield },
    { label: 'Member Since', value: 'Jan 2023', icon: Calendar }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Profile Settings</h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Manage your account information and preferences</p>
            </div>
            {isEditing ? (
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
              >
                <Save className="h-4 w-4 sm:h-5 sm:w-5" />
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto"
              >
                <Edit className="h-4 w-4 sm:h-5 sm:w-5" />
                Edit Profile
              </button>
            )}
          </div>

          {saved && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Profile updated successfully!</span>
            </div>
          )}

          {/* Profile Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                  {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {formData.firstName} {formData.lastName}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{formData.email}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-1">
                          <Icon className="h-4 w-4" />
                          <span className="text-sm">{stat.label}</span>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">{stat.value}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  <Mail className="h-4 w-4 inline-block mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  <Phone className="h-4 w-4 inline-block mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  <MapPin className="h-4 w-4 inline-block mr-2" />
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  <Calendar className="h-4 w-4 inline-block mr-2" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Security & Privacy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email Notifications</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Receive updates about your account</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Add an extra layer of security</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="twoFactor"
                    checked={formData.twoFactor}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <button
                onClick={() => navigate('/funds')}
                className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold"
              >
                <Lock className="h-5 w-5" />
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
