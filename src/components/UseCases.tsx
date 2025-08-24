'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export default function UseCases() {
  const { t } = useTranslation();

  const useCases = [
    {
      icon: CodeBracketIcon,
      title: t('useCases.tech.title'),
      description: t('useCases.tech.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('useCases.support.title'),
      description: t('useCases.support.description'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MegaphoneIcon,
      title: t('useCases.marketing.title'),
      description: t('useCases.marketing.description'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: RocketLaunchIcon,
      title: t('useCases.startups.title'),
      description: t('useCases.startups.description'),
      gradient: 'from-green-500 to-blue-500',
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('useCases.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('useCases.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} shadow-lg`}>
                    <useCase.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  {/* Hover effect decoration */}
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 -mb-2 -ml-2 h-4 w-4 bg-sky-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-action section within use cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold sm:text-3xl">
              {t('useCases.ctaTitle')}
            </h3>
            <p className="mt-4 text-lg opacity-90">
              {t('useCases.ctaDescription')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                {t('hero.startTrial')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                {t('hero.requestDemo')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
