import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to MantraMind</h1>
      <p className="home-description">
        MantraMind presents PulseFlow Journey, a meditation system using rhythmic sound and mindfulness to unlock relaxation, clarity, and universal connection. Enhance your practice with personalized mantras, Solfeggio frequencies, chakra chants, and electromagnetic healing technologies.
      </p>

      <section className="home-section">
        <h2 className="home-section-title">PulseFlow Journey</h2>
        <p className="home-section-text">
          PulseFlow Journey uses CoreSync Tones—pulsing audio that syncs your brain’s halves—to guide you through Pulse States, from relaxed awareness to spiritual unity. With wind and chimes, clear your mind, breathe rhythmically, and flow with the universe.
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">How It Works</h2>
        <ul className="home-section-list">
          <li><strong>CoreSync Tones:</strong> Pulsing sounds (e.g., 120 Hz/126 Hz) weave logic and intuition, fostering calm.</li>
          <li><strong>Energy Weave:</strong> Visualize distractions as a tapestry, set aside in 30s–2 min.</li>
          <li><strong>Breathing:</strong> Inhale 4s, exhale 6s with ‘hmmm,’ syncing with tones.</li>
          <li><strong>Mantra:</strong> “I am boundless, flowing with universal rhythms, guided by inner light, safe.”</li>
        </ul>
        <p className="home-section-text">
          <Link to="/pulseflow" className="home-section-link">Explore Pulse States</Link>
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Enhance with Solfeggio & Chakras</h2>
        <p className="home-section-text">
          Pair PulseFlow with:
        </p>
        <ul className="home-section-list">
          <li><strong>Solfeggio Frequencies:</strong> Tones (e.g., 528 Hz) for healing, used in PulseFlow sessions.</li>
          <li><strong>Seed Mantras:</strong> Chants (e.g., LAM) align chakras, enhancing meditation.</li>
        </ul>
        <p className="home-section-text">
          <Link to="/solfeggio-studio" className="home-section-link">Discover Solfeggio</Link> | <Link to="/chakra-chants" className="home-section-link">Chakra Chants</Link>
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Personalized Tools</h2>
        <p className="home-section-text">
          Use our AI chatbot to create mantras or action plans, downloadable as text, and share feedback via GitHub to refine our community’s offerings.
        </p>
        <p className="home-section-text">
          <Link to="/frequencies" className="home-section-link">Create Your Mantra</Link>
        </p>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">MultiWave Oscillator: Electromagnetic Healing</h2>
        <p className="home-section-text">
          The MultiWave Oscillator (MWO), developed by Georges Lakhovsky, uses electromagnetic frequencies to enhance cellular health and promote detoxification. This experimental device aims to harmonize the body’s energy field, offering potential relief for ailments like pain, fatigue, and electrostress.
        </p>
        <ul className="home-section-list">
          <li>Enhances cellular energy and immunity.</li>
          <li>May relieve pain and chronic conditions.</li>
          <li>Supports detoxification and anti-aging.</li>
        </ul>
        <p className="home-section-text">
          <Link to="/multiwave" className="home-section-link">Explore MultiWave Healing</Link>
        </p>
      </section>
    </div>
  );
};

export default Home;