import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Stats } from './components/Stats';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Stats />
            <Services onNavigate={handleNavigate} />
            <Contact />
          </>
        );
      case ViewState.SERVICES:
        return <Services onNavigate={handleNavigate} />;
      case ViewState.BLOG:
        return <Blog />;
      case ViewState.CONTACT:
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {renderContent()}
    </Layout>
  );
}

export default App;