import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Products() {
  const { t } = useTranslation();

  const products = [
    { id: 1, key: "evo_max", image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800" },
    { id: 2, key: "dragonfish", image: "https://cdn11.bigcommerce.com/s-3sy6wxm/images/stencil/1280x1280/products/553/2752/Dragonfish-2__03927.1610590711.jpg?c=2" },
    { id: 3, key: "evo_ii", image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800" }
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
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-sm">
                <img 
                  src={p.image} 
                  alt={t(`products.${p.key}.name`)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 dark:opacity-80 group-hover:opacity-100" 
                />
              </div>

              {/* Product Text Details */}
              <div className="mt-6">
                <h3 className="text-zinc-900 dark:text-white text-xl font-bold transition-colors">
                  {t(`products.${p.key}.name`)}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 transition-colors">
                  {t(`products.${p.key}.tagline`)}
                </p>
                <Link 
                  to="/drones" 
                  className="inline-block mt-4 text-blue-700 dark:text-blue-800 text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-blue-700 dark:hover:border-blue-800 transition-all"
                >
                  {t('products.learn_more')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}