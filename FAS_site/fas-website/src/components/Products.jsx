import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Products() {
  const { t } = useTranslation();

  const products = [
    { id: 1, key: "evo_max", image: "/drone_images/EVOMax4T.png" },
    { id: 2, key: "dragonfish", image: "/drone_images/Dragonfish25.png" },
    { id: 3, key: "evo_ii", image: "/drone_images/EVOIIRTKSeriesV3.png" }
  ];

  return (
    <section className="bg-white dark:bg-black py-24 px-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-12 tracking-tight">
          {t('products.title')} <span className="text-blue-700 dark:text-blue-800">{t('products.subtitle')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              {/* 1. Added rounded-3xl and overflow-hidden to the main card */}
              <div className='overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900/50 flex flex-col h-full'>
                
                <Link to="/drones">
                  {/* 2. Removed rounded-sm and changed aspect ratio to match your reference */}
                  <div className="relative aspect-[4/5] overflow-hidden p-8">
                    <img 
                      src={p.image} 
                      alt={t(`products.${p.key}.name`)} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                </Link>

                {/* 3. Added padding to the text area so it isn't touching the edges */}
                <div className="p-8 pt-0 mt-auto">
                  <h3 className="text-zinc-900 dark:text-white text-2xl font-black uppercase tracking-tight">
                    {t(`products.${p.key}.name`)}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 font-medium leading-relaxed">
                    {t(`products.${p.key}.tagline`)}
                  </p>
                  <Link 
                    to="/drones" 
                    className="inline-block mt-6 text-blue-600 dark:text-blue-500 text-xs font-black uppercase tracking-[0.2em] hover:text-blue-800 transition-colors"
                  >
                    {t('products.learn_more')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}