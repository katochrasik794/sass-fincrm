import { useState } from 'react'
import { 
  Search, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Mail,
  Phone,
  Book,
  Video,
  FileText,
  CheckCircle
} from 'lucide-react'

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'getting-started', name: 'Getting Started', icon: CheckCircle },
    { id: 'account', name: 'Account', icon: HelpCircle },
    { id: 'payments', name: 'Payments', icon: FileText },
    { id: 'trading', name: 'Trading', icon: Video }
  ]

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I create an account?',
      answer: 'To create an account, click on the "Sign Up" button in the top right corner. You\'ll need to provide your email address, create a password, and verify your email. Once verified, you can complete your profile and start using the platform.'
    },
    {
      id: 2,
      category: 'account',
      question: 'How do I verify my account?',
      answer: 'Account verification is required for certain features. Go to your Profile settings and click on "Verify Account". You\'ll need to provide a government-issued ID and proof of address. Verification typically takes 24-48 hours.'
    },
    {
      id: 3,
      category: 'payments',
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards, bank transfers, and digital wallets. You can add a payment method in the Funds section. All transactions are secured with bank-level encryption.'
    },
    {
      id: 4,
      category: 'payments',
      question: 'How long do withdrawals take?',
      answer: 'Withdrawal processing times vary by method: Bank transfers typically take 3-5 business days, while digital wallets are usually processed within 24 hours. Card withdrawals may take 1-3 business days.'
    },
    {
      id: 5,
      category: 'trading',
      question: 'What is the minimum investment amount?',
      answer: 'Minimum investment amounts vary by investment option. Most funds have a minimum of $500-$1,000. You can check the specific requirements on each investment option\'s details page.'
    },
    {
      id: 6,
      category: 'trading',
      question: 'How are returns calculated?',
      answer: 'Returns are calculated based on the performance of your investments. We provide real-time updates on your portfolio performance. Returns can vary based on market conditions and the specific investment strategy.'
    },
    {
      id: 7,
      category: 'account',
      question: 'How do I change my password?',
      answer: 'Go to Profile Settings > Security & Privacy, then click "Change Password". You\'ll need to enter your current password and create a new one. Make sure your new password is strong and unique.'
    },
    {
      id: 8,
      category: 'getting-started',
      question: 'Is my money safe?',
      answer: 'Yes, we use bank-level security measures including encryption, two-factor authentication, and secure payment processing. Your funds are held in segregated accounts and protected by industry-standard security protocols.'
    }
  ]

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)

  const searchResults = searchQuery
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Help Center</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">Find answers to common questions</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <button className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all text-left">
            <MessageCircle className="h-8 w-8 text-purple-500 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Live Chat</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Chat with our support team</p>
          </button>
          <button className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all text-left">
            <Mail className="h-8 w-8 text-purple-500 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Send us an email</p>
          </button>
          <button className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all text-left">
            <Phone className="h-8 w-8 text-purple-500 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Phone Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Call us at 1-800-HELP</p>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {searchResults.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white pr-4">{faq.question}</h3>
                  {openFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">No results found. Try a different search term.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-purple-100 mb-6">Our support team is available 24/7 to assist you</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
