import { useCallback, useEffect, useState } from 'react';

/**
 * Replaces the mobile header nav logic (drawer open/close, submenu slide,
 * search dropdown toggle, body-scroll lock, close-on-link-click).
 *
 * Usage (wherever your nav lives, e.g. components/Header.tsx):
 *
 *   const nav = useMobileNav();
 *
 *   <button onClick={nav.toggleNav} className={nav.isNavOpen ? 'active' : ''}>...</button>
 *   <nav id="unifiedNavbar" className={nav.isNavOpen ? 'active' : ''}>
 *     {items.map(item => (
 *       <div key={item.id} className="single-nav-item">
 *         <button
 *           className="parent-link"
 *           onClick={(e) => {
 *             if (window.innerWidth < 992) {
 *               e.preventDefault();
 *               nav.openSubmenu(item.id);
 *             }
 *           }}
 *         >
 *           {item.label}
 *         </button>
 *         <div className={`single-submenu${nav.openSubmenuId === item.id ? ' active' : ''}`}>
 *           <button className="submenu-back-btn" onClick={nav.closeSubmenu}>Back</button>
 *           {...submenu links, each with onClick={nav.closeNav}...}
 *         </div>
 *       </div>
 *     ))}
 *   </nav>
 *   {isSearchOpen && <div id="mobileSearchDropdown" className="active">...</div>}
 */
export function useMobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

  const closeNav = useCallback(() => {
    setIsNavOpen(false);
    setOpenSubmenuId(null);
  }, []);

  const toggleNav = useCallback(() => {
    setIsNavOpen((open) => {
      if (open) {
        setOpenSubmenuId(null);
        return false;
      }
      setIsSearchOpen(false);
      return true;
    });
  }, []);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen((open) => !open);
  }, []);

  // mirrors drawerSearchToggleBtn: close the drawer, then open search
  const openSearchFromDrawer = useCallback(() => {
    closeNav();
    setIsSearchOpen(true);
  }, [closeNav]);

  const openSubmenu = useCallback((id: string) => setOpenSubmenuId(id), []);
  const closeSubmenu = useCallback(() => setOpenSubmenuId(null), []);

  // lock body scroll behind the open drawer, same as the original
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  return {
    isNavOpen,
    isSearchOpen,
    openSubmenuId,
    closeNav,
    toggleNav,
    toggleSearch,
    openSearchFromDrawer,
    openSubmenu,
    closeSubmenu,
  };
}