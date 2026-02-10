import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventGrid from './components/EventGrid';
import EventModal from './components/EventModal';
import Footer from './components/Footer';

import { events } from './data/events';
import type { EventData } from './data/events';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const handleViewDetails = (event: EventData) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <a href="#events" className="skip-link">
        Skip to events
      </a>

      <Header />

      <main>
        <HeroSection />
        <EventGrid events={events} onViewDetails={handleViewDetails} />
      </main>

      <Footer />

      <EventModal event={selectedEvent} onClose={handleCloseModal} />
    </>
  );
}

export default App;
