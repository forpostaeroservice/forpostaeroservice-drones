import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function Service() {
  const { t } = useTranslation();

  const services = [
    { id: 'photo', image: '/aerophoto.jpeg' },
    { id: 'thermal', image: '/thermal.jpeg' },
    { id: 'model3d', image: '/modeling.jpeg' }
  ];

  return (
    <PageTransition>
      <SEO title={t('seo.service.title')} description={t('seo.service.description')} path="/service" />

      {/* Changed h-screen to min-h-screen and removed overflow-hidden for mobile scrolling */}
      <div className="relative min-h-screen bg-black">
        {/* flex-col for mobile (stacking), md:flex-row for desktop (side-by-side) */}
        <div className="flex flex-col md:flex-row min-h-screen md:h-screen w-full">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="relative min-h-[40vh] md:min-h-0 flex-1 group overflow-hidden 
                         border-b md:border-b-0 md:border-r border-white/10 last:border-none 
                         transition-all duration-700 ease-in-out md:hover:flex-[1.5]"
            >
              {/* Background Image - Adjusted grayscale logic for mobile visibility */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center grayscale md:grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ backgroundImage: `url(${item.image})` }}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16">
                  <div className="relative w-full">
                    {/* Fixed text size for mobile/tablet/desktop hierarchy */}
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-black text-white uppercase mb-4 tracking-tighter leading-tight"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {t(`service.${item.id}.title`)}
                    </motion.h2>

                    {/* On mobile, button is always visible. On desktop, it slides up on hover */}
                    <Link 
                      to={`/service/${item.id}`}
                      className="inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full 
                                 font-bold uppercase text-[10px] md:text-xs tracking-widest 
                                 hover:bg-blue-600 hover:text-white transition-all duration-300 
                                 opacity-100 md:opacity-0 md:translate-y-10 md:group-hover:translate-y-0 md:group-hover:opacity-100 
                                 shadow-lg"
                    >
                      {t('common.details')}
                      <span className="text-lg">→</span>
                    </Link>             
                  </div> 

                {/* Decorative Line - Hidden on mobile for cleaner look */}
                <div className="mt-8 hidden md:block w-12 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Index Number - Smaller on mobile */}
              <span className="absolute top-6 right-6 md:top-10 md:right-10 text-5xl md:text-8xl font-black text-white/10 pointer-events-none italic">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}