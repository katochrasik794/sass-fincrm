import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MessageCircle, 
  Heart,
  Share2,
  TrendingUp,
  Users,
  Award,
  Star,
  ArrowRight,
  Plus,
  Search,
  CheckCircle
} from 'lucide-react'

export default function Social() {
  const navigate = useNavigate()
  const [likedPosts, setLikedPosts] = useState(new Set())
  const [searchQuery, setSearchQuery] = useState('')

  const posts = [
    {
      id: 1,
      user: 'TraderPro123',
      avatar: 'TP',
      time: '2 hours ago',
      content: 'Just hit a new personal best! 🎉 The market has been amazing this week. What strategies are you all using?',
      likes: 42,
      comments: 8,
      shares: 5,
      verified: true
    },
    {
      id: 2,
      user: 'CryptoMaster',
      avatar: 'CM',
      time: '5 hours ago',
      content: 'Great insights from today\'s market analysis. The trend is clear - diversification is key! 📈',
      likes: 67,
      comments: 12,
      shares: 9,
      verified: true
    },
    {
      id: 3,
      user: 'InvestorJane',
      avatar: 'IJ',
      time: '1 day ago',
      content: 'Sharing my portfolio performance this month. Up 15%! Thanks to the community for all the tips.',
      likes: 89,
      comments: 15,
      shares: 11,
      verified: false
    },
    {
      id: 4,
      user: 'MarketGuru',
      avatar: 'MG',
      time: '2 days ago',
      content: 'Weekly market recap is out! Check out the top performers and what to watch next week.',
      likes: 124,
      comments: 23,
      shares: 18,
      verified: true
    }
  ]

  const topTraders = [
    { rank: 1, name: 'EliteTrader', profit: '+$45,230', change: '+12.5%', verified: true },
    { rank: 2, name: 'ProInvestor', profit: '+$38,900', change: '+10.2%', verified: true },
    { rank: 3, name: 'MarketKing', profit: '+$32,150', change: '+8.7%', verified: true },
    { rank: 4, name: 'TradingGuru', profit: '+$28,400', change: '+7.3%', verified: false },
    { rank: 5, name: 'CryptoWhiz', profit: '+$25,600', change: '+6.1%', verified: false }
  ]

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="px-4 py-6 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Social Feed</h1>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Connect with traders and investors</p>
                </div>
                <button
                  onClick={() => navigate('/partnership')}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  New Post
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search posts, traders, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>

              {/* Posts */}
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-slate-900 dark:text-white">{post.user}</p>
                          {post.verified && (
                            <div className="p-0.5 bg-blue-500 rounded-full">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          )}
                          <span className="text-sm text-slate-600 dark:text-slate-400">• {post.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{post.content}</p>
                    <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          likedPosts.has(post.id)
                            ? 'text-red-500'
                            : 'text-slate-600 dark:text-slate-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm font-medium">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Traders */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-black/5 dark:shadow-black/20 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Top Traders</h2>
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                </div>
                <div className="space-y-4">
                  {topTraders.map((trader) => (
                    <div
                      key={trader.rank}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      onClick={() => navigate('/discover')}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          trader.rank === 1 ? 'bg-yellow-400' :
                          trader.rank === 2 ? 'bg-slate-400' :
                          trader.rank === 3 ? 'bg-amber-600' :
                          'bg-purple-500'
                        }`}>
                          {trader.rank}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-slate-900 dark:text-white text-sm">{trader.name}</p>
                            {trader.verified && (
                              <Award className="h-3 w-3 text-blue-500" />
                            )}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">{trader.change}</p>
                        </div>
                      </div>
                      <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{trader.profit}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/discover')}
                  className="mt-4 w-full text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center justify-center gap-1 text-sm font-medium"
                >
                  View Leaderboard
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Community Stats */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-4">Community</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>Active Members</span>
                    </div>
                    <span className="font-bold">12,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      <span>Posts Today</span>
                    </div>
                    <span className="font-bold">342</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Growth Rate</span>
                    </div>
                    <span className="font-bold">+15.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

