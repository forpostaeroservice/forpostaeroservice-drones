import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image/Video */}
      <div className="absolute inset-0 opacity-60">
         <img 
           src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2000" 
           className="w-full h-full object-cover" 
           alt="Drone flying" 
         />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-4 uppercase">
          Forpost Aero Service
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          {t('hero.desc')}
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 font-bold hover:bg-zinc-200 transition uppercase text-sm tracking-widest">
            <Link to="/drones">{t('hero.btn_explore')}</Link>
          </button>
          <button className="border border-white text-white px-8 py-3 font-bold hover:bg-white/10 transition uppercase text-sm tracking-widest">
            {t('hero.btn_video')}
          </button>
        </div>
      </div>
    </section>
  );
}