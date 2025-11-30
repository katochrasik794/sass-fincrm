import {
  LayoutDashboard,
  Users,
  FileText,
  UserPlus,
  ArrowLeftRight,
  ShieldCheck,
  Share2,
  TrendingUp,
  Headphones,
  Settings,
  Server,
  FileBarChart,
} from 'lucide-react'

export const adminNavItems = [
  // Main Navigation
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Clients', path: '/admin/clients', icon: Users },
  {
    label: 'Accounts',
    icon: FileText,
    submenu: [
      { label: 'Real', path: '/admin/accounts/real' },
      { label: 'Demo', path: '/admin/accounts/demo' },
    ],
  },
  {
    label: 'Introducing Brokers',
    icon: UserPlus,
    submenu: [
      { label: 'List', path: '/admin/introducing-brokers/list' },
      { label: 'Requests', path: '/admin/introducing-brokers/requests' },
    ],
  },
  {
    label: 'Transactions',
    icon: ArrowLeftRight,
    submenu: [
      { label: 'Deposit', path: '/admin/transactions/deposit' },
      { label: 'Withdrawal', path: '/admin/transactions/withdrawal' },
      { label: 'Account Transfer', path: '/admin/transactions/account-transfer' },
    ],
  },
  {
    label: 'Verification',
    icon: ShieldCheck,
    submenu: [
      { label: 'Kyc', path: '/admin/verification/kyc' },
      { label: 'Withdrawal Methods', path: '/admin/verification/withdrawal-methods' },
    ],
  },
  {
    label: 'Social',
    icon: Share2,
    submenu: [
      { label: 'Masters', path: '/admin/social/masters' },
      { label: 'Copiers', path: '/admin/social/copiers' },
    ],
  },
  {
    label: 'Invest',
    icon: TrendingUp,
    submenu: [
      { label: 'Masters', path: '/admin/invest/masters' },
      { label: 'Copiers', path: '/admin/invest/copiers' },
    ],
  },
  {
    label: 'Support',
    icon: Headphones,
    submenu: [
      { label: 'Tickets', path: '/admin/support/tickets' },
      { label: 'Chats', path: '/admin/support/chats' },
    ],
  },
  {
    label: 'Settings',
    icon: Settings,
    submenu: [
      { label: 'Account Types', path: '/admin/settings/account-types' },
      { label: 'IB Models', path: '/admin/settings/ib-models' },
      { label: 'Client Groups', path: '/admin/settings/client-groups' },
      { label: 'Payment Methods', path: '/admin/settings/payment-methods' },
      { label: 'Bonuses', path: '/admin/settings/bonuses' },
    ],
  },
  {
    label: 'System',
    icon: Server,
    submenu: [
      { label: 'Configurations', path: '/admin/system/configurations' },
      { label: 'Securities', path: '/admin/system/securities' },
      { label: 'Symbols', path: '/admin/system/symbols' },
      { label: 'Groups', path: '/admin/system/groups' },
      { label: 'Countries', path: '/admin/system/countries' },
      { label: 'Admins', path: '/admin/system/admins' },
      { label: 'Roles', path: '/admin/system/roles' },
    ],
  },
  { label: 'Reports', path: '/admin/reports', icon: FileBarChart },
]

