'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  LanguageIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: LanguageIcon,
      title: t('features.translation.title'),
      description: t('features.translation.description'),
    },
    {
      icon: ArrowPathIcon,
      title: t('features.sync.title'),
      description: t('features.sync.description'),
    },
    {
      icon: DocumentTextIcon,
      title: t('features.meetings.title'),
      description: t('features.meetings.description'),
    },
    {
      icon: ClockIcon,
      title: t('features.scheduling.title'),
      description: t('features.scheduling.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional features showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {t('features.futureWork.title')}
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                {t('features.futureWork.description')}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">{t('features.futureWork.accuracy')}</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50ms</div>
                  <div className="text-sm text-gray-600">{t('features.futureWork.responseTime')}</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">{t('features.futureWork.languages')}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
