// useTranslation.jsx
import { useState } from 'react';
import { translate } from '../services/translation';

const useTranslation = () => {
  const [language, setLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const t = async (text) => {
    if (language === 'en' || !text) return text;
    setIsTranslating(true);
    try {
      return await translate(text, language);
    } finally {
      setIsTranslating(false);
    }
  };

  return { t, language, setLanguage, isTranslating };
};

export default useTranslation; // Keep as default export