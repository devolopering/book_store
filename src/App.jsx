import React from 'react';
import Header from './components/header/Header';
import { ThemeProvider, useTheme } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import './App.css'; 

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
}
