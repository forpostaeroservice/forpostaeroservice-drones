import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 pt-20 pb-10 px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6 block hover:opacity-80 transition">
            FORPOST AERO SERVICE
          </Link>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold mb-6">{t('footer.col_products')}</h4>
          <ul className="text-zinc-600 dark:text-zinc-500 text-sm space-y-4">
            <li>
              <Link to="/drones" className="hover:text-blue-600 dark:hover:text-white transition">EVTOL</Link>
            </li>
            <li>
              <Link to="/drones" className="hover:text-blue-600 dark:hover:text-white transition">Multi-Rotor</Link>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold mb-6">{t('footer.col_support')}</h4>
          <ul className="text-zinc-600 dark:text-zinc-500 text-sm space-y-4">
            <li className="hover:text-blue-600 dark:hover:text-white transition cursor-pointer">
              <Link to="/contact">{t('footer.support.contact')}</Link>
            </li>
          </ul>
        </div>

        {/* Socials & Contact Column */}
        <div>
          <h4 className="text-zinc-900 dark:text-white font-bold mb-6">{t('footer.col_follow')}</h4>
          <div className="flex flex-col gap-5">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/77754221674" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-zinc-500 dark:text-zinc-400 hover:text-[#25D366] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5Z"/>
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/+77754221674" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-zinc-500 dark:text-zinc-400 hover:text-[#0088cc] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
              </svg>
              <span className="text-sm font-medium">Telegram</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/forpost.kz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-zinc-500 dark:text-zinc-400 hover:text-[#E4405F] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-zinc-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 dark:text-zinc-600 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Forpost KZ. {t('footer.legal.rights')}
        </p>
        <div className="flex gap-6 text-zinc-500 dark:text-zinc-600 text-xs uppercase tracking-widest">
          <span className="hover:text-zinc-900 dark:hover:text-white cursor-pointer transition">{t('footer.legal.privacy')}</span>
          <span className="hover:text-zinc-900 dark:hover:text-white cursor-pointer transition">{t('footer.legal.terms')}</span>
        </div>
      </div>
    </footer>
  );
}