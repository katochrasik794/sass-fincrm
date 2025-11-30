import { useState } from 'react'
import { Search, MessageCircle, Send, Clock } from 'lucide-react'

export default function SupportChats() {
  const [searchQuery, setSearchQuery] = useState('')

  const chats = [
    { id: 1, clientName: 'John Doe', lastMessage: 'I need help with my account', time: '2 min ago', unread: 2, status: 'active' },
    { id: 2, clientName: 'Jane Smith', lastMessage: 'Thank you for your help!', time: '15 min ago', unread: 0, status: 'active' },
    { id: 3, clientName: 'Mike Johnson', lastMessage: 'How do I withdraw funds?', time: '1 hour ago', unread: 1, status: 'active' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Support Chats</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">Manage live chat support</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input type="text" placeholder="Search chats..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {chats.map((chat) => (
              <div key={chat.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-slate-900 dark:text-white">{chat.clientName}</p>
                  {chat.unread > 0 && <span className="bg-purple-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">{chat.unread}</span>}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate mb-1">{chat.lastMessage}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1"><Clock className="h-3 w-3" />{chat.time}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-slate-900 dark:text-white">Select a chat to start conversation</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 dark:text-slate-400">Select a chat from the list to view messages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

