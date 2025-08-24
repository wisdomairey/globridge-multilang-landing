'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-sky-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-600/10" />
        <div className="absolute inset-y-0 right-0 w-1/2">
          <svg
            className="absolute inset-0 h-full w-full text-blue-100"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">{t('hero.title')}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {t('hero.subtitle')}
              </p>
              <p className="mt-2 text-lg font-medium text-blue-600">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
                  aria-label="Start your free trial"
                >
                  {t('hero.startTrial')}
                </button>
                <button
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Request a demo"
                >
                  {t('hero.requestDemo')}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <p className="text-sm text-gray-500 mb-4">{t('hero.trustedBy')}</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                {/* Placeholder company logos */}
                <div className="text-gray-400 text-lg font-semibold">TechCorp</div>
                <div className="text-gray-400 text-lg font-semibold">GlobalSoft</div>
                <div className="text-gray-400 text-lg font-semibold">InnovateLab</div>
                <div className="text-gray-400 text-lg font-semibold">CloudWorks</div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              {/* Globe/World Map visualization placeholder */}
              <div className="relative bg-white rounded-lg p-8 shadow-xl">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center mb-6">
                    <svg
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 0a9 9 0 01-9 9m9-9c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Global Collaboration
                  </h3>
                  <p className="text-sm text-gray-500">
                    Connect teams across 50+ countries with real-time translation and collaboration tools.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
