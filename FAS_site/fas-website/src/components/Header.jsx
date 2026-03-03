import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-1 transition-all duration-300 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-zinc-200 dark:border-white/10"> 

      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        
        {/* Left Section: Logo + Text */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src="/FAS_logo.png" 
              alt="Logo" 
              className="h-8 w-auto md:h-10 shrink-0 rounded-sm"
            />
            <span className="hidden sm:block text-lg md:text-2xl font-bold tracking-tighter whitespace-nowrap text-zinc-900 dark:text-white">
              FORPOST AERO SERVICE
            </span>
          </Link>
        </div>

        {/* Center Section: Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
          <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"> 
            <Link to="/drones">{t('nav.drones')}</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Link to="/service">{t('nav.service')}</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Link to="/education">{t('nav.education')}</Link>
          </li>
          <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>

        {/* Right Section: Toggle + Languages */}
        <div className="flex items-center gap-6">
          {/* Theme Switcher Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white"
          >
            {isDarkMode ? 
            <img src="/moonImg.png" className="h-8 w-auto md:h-5 shrink-0 rounded-sm filter grayscale invert brightness-200"/> : 
            <img src="/sunImg.png" className="h-8 w-auto md:h-5 shrink-0 rounded-sm"/>}
          </button>

          <div className="flex gap-3 text-[10px] font-bold">
            {['en', 'ru', 'kk'].map((lng) => (
              <button 
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`uppercase transition-colors ${
                  i18n.language === lng 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {lng === 'kk' ? 'KZ' : lng}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-zinc-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-white/10 px-6 py-6 transition-all">
          <ul className="flex flex-col gap-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/drones" className="block py-2">{t('nav.drones')}</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/service" className="block py-2">{t('nav.service')}</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/education" className="block py-2">{t('nav.education')}</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to="/contact" className="block py-2">{t('nav.contact')}</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}