import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './User/UserLayout'
import Dashboard from './User/pages/Dashboard'
import Discover from './User/pages/Discover'
import Funds from './User/pages/Funds'
import Transactions from './User/pages/Transactions'
import Partnership from './User/pages/Partnership'
import Social from './User/pages/Social'
import Invest from './User/pages/Invest'
import Profile from './User/pages/Profile'
import API from './User/pages/API'
import Downloads from './User/pages/Downloads'
import HelpCenter from './User/pages/HelpCenter'
import AdminLayout from './Admin/AdminLayout'
import AdminDashboard from './Admin/pages/Dashboard'
import Clients from './Admin/pages/Clients'
import RealAccounts from './Admin/pages/accounts/Real'
import DemoAccounts from './Admin/pages/accounts/Demo'
import IBList from './Admin/pages/introducing-brokers/List'
import IBRequests from './Admin/pages/introducing-brokers/Requests'
import Deposits from './Admin/pages/transactions/Deposit'
import Withdrawals from './Admin/pages/transactions/Withdrawal'
import AccountTransfers from './Admin/pages/transactions/AccountTransfer'
import KYCVerification from './Admin/pages/verification/Kyc'
import WithdrawalMethods from './Admin/pages/verification/WithdrawalMethods'
import SocialMasters from './Admin/pages/social/Masters'
import SocialCopiers from './Admin/pages/social/Copiers'
import InvestMasters from './Admin/pages/invest/Masters'
import InvestCopiers from './Admin/pages/invest/Copiers'
import SupportTickets from './Admin/pages/support/Tickets'
import SupportChats from './Admin/pages/support/Chats'
import AccountTypes from './Admin/pages/settings/AccountTypes'
import IBModels from './Admin/pages/settings/IBModels'
import ClientGroups from './Admin/pages/settings/ClientGroups'
import PaymentMethods from './Admin/pages/settings/PaymentMethods'
import Bonuses from './Admin/pages/settings/Bonuses'
import Configurations from './Admin/pages/system/Configurations'
import Securities from './Admin/pages/system/Securities'
import Symbols from './Admin/pages/system/Symbols'
import Groups from './Admin/pages/system/Groups'
import Countries from './Admin/pages/system/Countries'
import Admins from './Admin/pages/system/Admins'
import Roles from './Admin/pages/system/Roles'
import Reports from './Admin/pages/Reports'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="discover" element={<Discover />} />
          <Route path="funds" element={<Funds />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="social" element={<Social />} />
          <Route path="invest" element={<Invest />} />
          <Route path="profile" element={<Profile />} />
          <Route path="api" element={<API />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="help-center" element={<HelpCenter />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="accounts/real" element={<RealAccounts />} />
          <Route path="accounts/demo" element={<DemoAccounts />} />
          <Route path="introducing-brokers/list" element={<IBList />} />
          <Route path="introducing-brokers/requests" element={<IBRequests />} />
          <Route path="transactions/deposit" element={<Deposits />} />
          <Route path="transactions/withdrawal" element={<Withdrawals />} />
          <Route path="transactions/account-transfer" element={<AccountTransfers />} />
          <Route path="verification/kyc" element={<KYCVerification />} />
          <Route path="verification/withdrawal-methods" element={<WithdrawalMethods />} />
          <Route path="social/masters" element={<SocialMasters />} />
          <Route path="social/copiers" element={<SocialCopiers />} />
          <Route path="invest/masters" element={<InvestMasters />} />
          <Route path="invest/copiers" element={<InvestCopiers />} />
          <Route path="support/tickets" element={<SupportTickets />} />
          <Route path="support/chats" element={<SupportChats />} />
          <Route path="settings/account-types" element={<AccountTypes />} />
          <Route path="settings/ib-models" element={<IBModels />} />
          <Route path="settings/client-groups" element={<ClientGroups />} />
          <Route path="settings/payment-methods" element={<PaymentMethods />} />
          <Route path="settings/bonuses" element={<Bonuses />} />
          <Route path="system/configurations" element={<Configurations />} />
          <Route path="system/securities" element={<Securities />} />
          <Route path="system/symbols" element={<Symbols />} />
          <Route path="system/groups" element={<Groups />} />
          <Route path="system/countries" element={<Countries />} />
          <Route path="system/admins" element={<Admins />} />
          <Route path="system/roles" element={<Roles />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
