import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { adminNavItems } from '../navItems'
import { ChevronDown, ChevronUp } from 'lucide-react'
import AdminSidebarThemeButton from './AdminSidebarThemeButton'

export default function AdminSidebar({ isExpanded, onItemClick }) {
  const [expandedMenus, setExpandedMenus] = useState({})
  const [hoveredItem, setHoveredItem] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const itemRefs = useRef({})
  const hideTimeoutRef = useRef(null)
  const location = useLocation()

  const baseLinkClasses =
    'relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium tracking-wide text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400'

  const iconWrap =
    'flex h-5 w-5 items-center justify-center text-slate-600 dark:text-slate-300 transition'

  const widthClass = isExpanded ? 'w-64' : 'w-20'

  const handleNavClick = () => {
    if (window.innerWidth < 1024 && onItemClick) {
      onItemClick()
    }
  }

  const toggleMenu = (label) => {
    if (!isExpanded) return
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  const handleMouseEnter = (itemLabel, event) => {
    if (!isExpanded) {
      // Clear any pending hide timeout immediately
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }
      
      const rect = event.currentTarget.getBoundingClientRect()
      setTooltipPosition({
        top: rect.top,
        left: rect.right + 8
      })
      setHoveredItem(itemLabel)
    }
  }

  const handleMouseLeave = () => {
    if (!isExpanded) {
      // Add a longer delay before hiding to allow smooth transition to tooltip
      hideTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null)
      }, 300)
    }
  }

  const handleTooltipMouseEnter = () => {
    // Clear hide timeout immediately when mouse enters tooltip or bridge
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
  }

  const handleTooltipMouseLeave = () => {
    // Add delay before hiding when mouse leaves tooltip
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 200)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  // Auto-expand only the menu that contains the current active page
  useEffect(() => {
    const newExpanded = {}
    // Find the menu that contains the current active submenu
    adminNavItems.forEach((item) => {
      if (item.submenu) {
        const hasActiveSubmenu = item.submenu.some(
          (subItem) => location.pathname === subItem.path
        )
        if (hasActiveSubmenu) {
          // Only expand this one menu, close all others
          newExpanded[item.label] = true
        }
      }
    })
    // Replace all expanded menus with only the active one (not merge)
    setExpandedMenus(newExpanded)
  }, [location.pathname, isExpanded])

  return (
    <>
      <aside
        className={`${widthClass} fixed right-0 top-0 h-screen z-40 lg:sticky lg:left-0 lg:right-auto lg:z-30 flex flex-col border-l border-r-0 lg:border-r lg:border-l-0 border-slate-200 bg-white/80 px-3 py-4 text-slate-700 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-100 dark:shadow-black/30 transition-transform duration-300 lg:translate-x-0 ${
          isExpanded ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo at Top */}
        <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
          <img
            src="/finCRM-logo-dark (1).png"
            alt="finCRM"
            className={`${isExpanded ? 'h-8' : 'h-10'} w-auto object-contain dark:brightness-0 dark:invert transition-all`}
            draggable="false"
          />
        </div>
        
        {/* Navigation - Scrollable if needed */}
        <nav className="flex-1 flex flex-col gap-0.5 overflow-y-auto overflow-x-visible scrollbar-hide">
          {adminNavItems.map((item, index) => {
            const IconComponent = item.icon
            const hasSubmenu = item.submenu && item.submenu.length > 0
            const isExpandedMenu = expandedMenus[item.label] || false
            const isActiveSubmenu = hasSubmenu && item.submenu.some(
              (subItem) => location.pathname === subItem.path
            )

            // Handle items with submenu
            if (hasSubmenu) {
              return (
                <div key={item.label} className="relative">
                  <button
                    ref={(el) => itemRefs.current[item.label] = el}
                    onMouseEnter={(e) => handleMouseEnter(item.label, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => {
                      toggleMenu(item.label)
                      if (!isExpanded) {
                        handleNavClick()
                      }
                    }}
                    className={`
                      ${baseLinkClasses}
                      ${isExpanded ? 'justify-between' : 'justify-center'}
                      ${isActiveSubmenu ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : ''}
                      w-full
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span className={iconWrap}>
                        <IconComponent className="h-5 w-5" />
                      </span>
                      {isExpanded && <span className="flex-1 text-left">{item.label}</span>}
                    </div>
                    {isExpanded && (
                      <span className="text-slate-400 dark:text-slate-500">
                        {isExpandedMenu ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </button>
                  
                  {/* Submenu when expanded */}
                  {isExpanded && isExpandedMenu && (
                    <div className="ml-4 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-slate-200 dark:border-slate-700 pl-3">
                      {item.submenu.map((subItem) => {
                        const isActive = location.pathname === subItem.path
                        return (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={handleNavClick}
                            className={`
                              ${baseLinkClasses}
                              justify-start
                              text-xs
                              ${isActive ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 font-semibold' : 'text-slate-600 dark:text-slate-400'}
                            `}
                          >
                            <span>{subItem.label}</span>
                          </NavLink>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            // Handle regular nav items (no submenu)
            if (item.path) {
              const isActive = location.pathname === item.path
              return (
                <div key={item.path} className="relative">
                  <NavLink
                    to={item.path}
                    onClick={handleNavClick}
                    onMouseEnter={(e) => handleMouseEnter(item.label, e)}
                    onMouseLeave={handleMouseLeave}
                    className={`
                      ${baseLinkClasses}
                      ${isExpanded ? 'justify-start' : 'justify-center'}
                      ${isActive ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : ''}
                      w-full
                    `}
                  >
                    <span className={iconWrap}>
                      <IconComponent className="h-5 w-5" />
                    </span>
                    {isExpanded && <span>{item.label}</span>}
                  </NavLink>
                </div>
              )
            }

            return null
          })}
        </nav>
        
        {/* Theme Button at Bottom */}
        <div className="mt-auto pt-4">
          <AdminSidebarThemeButton isExpanded={isExpanded} />
        </div>
      </aside>

      {/* Tooltip Dropdown - Rendered outside sidebar to avoid overflow issues */}
      {!isExpanded && hoveredItem && (() => {
        const item = adminNavItems.find(i => i.label === hoveredItem)
        if (!item || !item.submenu) return null
        
        return (
          <>
            {/* Invisible bridge area to allow smooth mouse movement - larger area */}
            <div 
              className="fixed z-[9998]"
              style={{
                top: `${tooltipPosition.top - 10}px`,
                left: `${tooltipPosition.left - 20}px`,
                width: '20px',
                height: `${Math.max(48, item.submenu.length * 40 + 60)}px`,
                pointerEvents: 'auto'
              }}
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleTooltipMouseLeave}
            />
            {/* Tooltip */}
            <div 
              className="fixed z-[9999] transition-opacity duration-200"
              style={{
                top: `${tooltipPosition.top}px`,
                left: `${tooltipPosition.left}px`,
                pointerEvents: 'auto'
              }}
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleTooltipMouseLeave}
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl shadow-black/30 border border-slate-200 dark:border-slate-700 overflow-hidden min-w-[200px]">
                {/* Header - Purple background like reference */}
                <div className="px-4 py-3 bg-purple-600 dark:bg-purple-700">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
                {/* Submenu Items */}
                <div className="flex flex-col">
                  {item.submenu.map((subItem) => {
                    const isActive = location.pathname === subItem.path
                    return (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={handleNavClick}
                        className={`
                          px-4 py-2.5 text-sm transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-b-0
                          ${isActive 
                            ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 font-medium' 
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                          }
                        `}
                      >
                        {subItem.label}
                      </NavLink>
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        )
      })()}
    </>
  )
}
