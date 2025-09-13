import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App
