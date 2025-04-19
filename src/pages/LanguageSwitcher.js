import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(i18n.language || 'en');

  // Ensure the default language is set to English when the app loads
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('en');
      setActiveTab('en');
    }
  }, [i18n]);

  const switchLang = (lang) => {
    i18n.changeLanguage(lang);
    setActiveTab(lang);
    setOpen(false); // Close the language box after selection
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      fontFamily: 'sans-serif'
    }}>
      <button onClick={() => setOpen(!open)} style={{
        backgroundColor: '#2c2c2c',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px'
      }}>
        🌐 Translate
      </button>

      {open && (
        <div style={{
          marginTop: '8px',
          width: '200px',
          backgroundColor: '#2c2c2c',
          color: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            borderBottom: '1px solid #444'
          }}>
            <div
              onClick={() => switchLang('vi')}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: activeTab === 'vi' ? '2px solid #89CFF0' : 'none',
              }}
            >
              🇻🇳 Vietnamese
            </div>
            <div
              onClick={() => switchLang('en')}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: activeTab === 'en' ? '2px solid #89CFF0' : 'none',
              }}
            >
              🇺🇸 English
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
