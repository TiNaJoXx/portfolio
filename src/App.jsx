import React, { useRef } from 'react';
import './App.css';
import ProfilePage from './pages/ProfilePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMePage from './pages/ContactMePage';
import Header from './components/Header';


function App() {
  const profileRef = useRef(null);
  const infoRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} profileRef={profileRef} infoRef={infoRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div ref={profileRef}>
        <ProfilePage />
      </div>
      <div ref={infoRef}>
        <AboutMePage />
      </div>
      <div ref={projectsRef}>
        <ProjectsPage />
      </div>
      <div ref={contactRef}>
        <ContactMePage />
      </div>
    </div>
  );
}

export default App;