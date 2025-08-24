'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    // Wait for i18n to be initialized
    if (i18n.isInitialized) {
      setIsI18nReady(true);
    } else {
      i18n.on('initialized', () => {
        setIsI18nReady(true);
      });
    }

    // Force re-render on language change
    const handleLanguageChange = () => {
      setIsI18nReady(false);
      setTimeout(() => setIsI18nReady(true), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('initialized');
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!isI18nReady) {
    return <div>Loading...</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
