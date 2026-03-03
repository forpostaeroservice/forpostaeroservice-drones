import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

export default function ServiceDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const videoData = {
    photo: "r4Z7CrlkZcY",   
    thermal: "6K_KBvxr8OM",
    model3d: "-RqQnjni6Yk" 
  };
  const images = {
    photo: '/aerophoto.jpeg',
    thermal: '/thermal.jpeg',
    model3d: '/modeling.jpeg'
  };

  const currentVideoId = videoData[id];

  return (
    <PageTransition>
      <SEO title={`${t(`service.${id}.title`)} - FORPOST`} description={t(`service.${id}.desc`)} />
      
      <div className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[id]})` }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <Link to="/service" className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-4 inline-block hover:text-white transition-colors">
                ← {t('common.back_to_services')}
              </Link>
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                {t(`service.${id}.title`)}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-blue-600">
              {t('common.overview')}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t(`service.${id}.full_desc`)}
            </p>
            
            <div className="pt-8 border-t border-zinc-200 dark:border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">Key Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Assuming you add a features array to i18n */}
                {(t(`service.${id}.features`, { returnObjects: true }) || []).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video / Media Side */}
          <div className="space-y-6">
            <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl relative group">
            
               {currentVideoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                    title={t(`service.${id}.title`)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                    ) : (
                    <div className="flex items-center justify-center h-full text-zinc-500">
                      {t('common.video_coming_soon')}
                    </div>)
                }
             
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}