import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


/**
 * The root component for our landing page. It composes the primary
 * sections of the site, ensuring a logical flow from hero to services,
 * testimonials and finally the footer.
 */
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;