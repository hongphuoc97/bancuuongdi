import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';


/**
 * The root component for our landing page. It composes the primary
 * sections of the site, ensuring a logical flow from hero to services,
 * testimonials and finally the footer.
 */
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Header onBookNowClick={openPopup} />
      <main>
        <Hero onBookNowClick={openPopup} />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;