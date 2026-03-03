import { useTranslation } from 'react-i18next';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function Contact() {
  const { t } = useTranslation();

  const socials = [
    { 
      name: "WhatsApp", 
      link: "https://wa.me/77754221674", 
      color: "hover:bg-[#25D366] hover:text-white", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      )
    },
    { 
      name: "Telegram", 
      link: "https://t.me/+77754221674", 
      color: "hover:bg-[#0088cc] hover:text-white", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.54.26l.198-2.823 5.135-4.641c.223-.198-.048-.307-.344-.112l-6.347 3.996-2.728-.855c-.593-.186-.605-.593.124-.878l10.665-4.11c.493-.18.925.112.766.88z"/>
        </svg>
      )
    }
  ];

  return (
    <PageTransition>
      <SEO title={t('seo.contact.title')} description={t('seo.contact.description')} path="/contact" />
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-black min-h-screen text-zinc-900 dark:text-white px-6 md:px-20 overflow-hidden relative transition-colors duration-500">
        
        {/* Subtle Background Glow - Adjusted for Light Mode */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 dark:bg-blue-900/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Side: Statement Header */}
          <div>
            <h1 className="text-6xl font-black uppercase leading-none tracking-tighter mb-10">
              <span className="text-blue-700 dark:text-blue-800">{t('contact.title')}</span> <br/>
              {t('contact.us')}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-500 text-lg max-w-md uppercase tracking-widest font-medium">
              Ready to elevate your operations with Forpost Aero Service.
            </p>
          </div>

          {/* Right Side: Contact Info Cards */}
          <div className="grid gap-6">
            
            {/* Address Card */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 p-8 rounded-2xl shadow-sm dark:shadow-none backdrop-blur-sm group hover:border-blue-700 dark:hover:border-blue-800/50 transition-all duration-500">
              <p className="text-blue-600 dark:text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">{t('contact.hq')}</p>
              <h3 className="text-2xl font-bold mb-1">{t('contact.address')}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{t('contact.street')}, 050000</p>
            </div>

            {/* Communication Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 p-8 rounded-2xl shadow-sm dark:shadow-none backdrop-blur-sm">
                <p className="text-blue-600 dark:text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">{t('contact.email')}</p>
                <a href="mailto:forpostaeroservice@gmail.com" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition break-all">
                  forpostaeroservice@gmail.com
                </a>
              </div>
              <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 p-8 rounded-2xl shadow-sm dark:shadow-none backdrop-blur-sm">
                <p className="text-blue-600 dark:text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">{t('contact.phone')}</p>
                <a href="tel:+77754221674" className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition">
                  +7 (775) 422 1674
                </a>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="flex flex-wrap gap-4 mt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-3 py-5 px-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 font-bold uppercase tracking-widest text-sm shadow-sm dark:shadow-none transition-all duration-300 ${social.color} text-zinc-900 dark:text-white`}
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}