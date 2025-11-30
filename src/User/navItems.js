import {
  LayoutDashboard,
  Compass,
  BarChart3,
  ArrowLeftRight,
  Users,
  Share2,
  TrendingUp,
  User,
  Code,
  Download,
  Headphones,
} from 'lucide-react'

export const userNavItems = [
  // Main Navigation
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Discover', path: '/discover', icon: Compass },
  { label: 'Funds', path: '/funds', icon: BarChart3 },
  { label: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
  { label: 'Partnership', path: '/partnership', icon: Users },
  { label: 'Social', path: '/social', icon: Share2 },
  { label: 'Invest', path: '/invest', icon: TrendingUp },
  { label: 'Profile', path: '/profile', icon: User },
  // Separator
  { type: 'separator' },
  // Integration & Help Section
  { type: 'section-header', label: 'INTEGRATION & HELP' },
  { label: 'API', path: '/api', icon: Code },
  { label: 'Downloads', path: '/downloads', icon: Download },
  { label: 'Help Center', path: '/help-center', icon: Headphones },
]

