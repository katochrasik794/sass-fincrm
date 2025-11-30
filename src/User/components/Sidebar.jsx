import { NavLink } from 'react-router-dom'
import { userNavItems } from '../navItems'
import SidebarThemeButton from './SidebarThemeButton';

export default function Sidebar({ isExpanded, onItemClick }) {

const baseLinkClasses =
  'relative flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold tracking-wide text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400'

const iconWrap =
  'flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-200 text-slate-700 transition group-hover:text-slate-900 dark:bg-white/5 dark:text-white dark:group-hover:text-white'

  const widthClass = isExpanded ? 'w-64' : 'w-20'

  const handleNavClick = () => {
    if (window.innerWidth < 1024 && onItemClick) {
      onItemClick()
    }
  }

  return (
    <aside
      className={`${widthClass} fixed right-0 top-0 h-screen z-40 lg:sticky lg:left-0 lg:right-auto lg:z-30 flex flex-col border-l border-r-0 lg:border-r lg:border-l-0 border-slate-200 bg-white/80 px-3 py-4 text-slate-700 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-100 dark:shadow-black/30 transition-transform duration-300 lg:translate-x-0 ${
        isExpanded ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Logo - Visible on small screens only */}
      <div className="lg:hidden mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <img
          src="/finCRM-logo-dark (1).png"
          alt="finCRM"
          className="h-7 w-auto object-contain dark:brightness-0 dark:invert"
          draggable="false"
        />
      </div>
      
      {/* Navigation - Scrollable if needed */}
      <nav className="flex-1 flex flex-col gap-1.5 overflow-y-auto overflow-x-visible scrollbar-hide">
        {userNavItems.map((item, index) => {
          // Handle separator
          if (item.type === 'separator') {
            return (
              <div
                key={`separator-${index}`}
                className="my-2 h-px bg-slate-200 dark:bg-white/10"
              />
            )
          }

          // Handle section header
          if (item.type === 'section-header') {
            return (
              <div
                key={`header-${index}`}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ${
                  isExpanded ? '' : 'hidden'
                }`}
              >
                {item.label}
              </div>
            )
          }

          // Handle regular nav items
          const IconComponent = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  'group',
                  isExpanded ? 'justify-start' : 'justify-center',
                  isActive ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              <span className={`${iconWrap} ${isExpanded ? '' : '!bg-transparent dark:!bg-transparent'}`}>
                <IconComponent className="h-5 w-5" />
              </span>
              {isExpanded && <span>{item.label}</span>}
              {!isExpanded && (
                <span className="pointer-events-none absolute right-full mr-2 lg:left-full lg:right-auto lg:ml-2 lg:mr-0 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-700 opacity-0 shadow-lg shadow-black/20 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-800 dark:text-slate-200 z-[100] whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>
      
      {/* Theme Button at Bottom */}
      <div className="mt-auto pt-4">
        <SidebarThemeButton isExpanded={isExpanded} />
      </div>
    </aside>
  )
}

