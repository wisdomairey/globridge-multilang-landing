'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.useCases'), href: '#use-cases' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-32">
            <Logo />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons and language switcher */}
          <div className="flex items-center space-x-2 w-auto min-w-fit">
            {/* Language switcher - always visible */}
            <LanguageSwitcher />
            
            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button
                className="text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                aria-label="Request demo"
              >
                {t('hero.requestDemo')}
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm whitespace-nowrap"
                aria-label="Start free trial"
              >
                {t('hero.startTrial')}
              </button>
            </div>

            {/* Mobile/Tablet CTA button */}
            <button
              className="lg:hidden bg-blue-600 hover:bg-blue-700 text-white px-2 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm whitespace-nowrap"
              aria-label="Start free trial"
            >
              {t('hero.startTrial')}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ml-1"
              aria-expanded="false"
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-200 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 pb-4 border-t border-gray-100">
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
              <div className="px-4 space-y-3">
                <button className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium border border-blue-200 transition-colors duration-200">
                  {t('hero.requestDemo')}
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-sm">
                  {t('hero.startTrial')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
