import React from 'react';
import '../styles/MultiWave.css';

const MultiWave = () => {
  const timelineEvents = [
    { year: '1920s', event: 'Georges Lakhovsky develops the MultiWave Oscillator.' },
    { year: '1924', event: 'Lakhovsky cures tumors in geranium plants using MWO.' },
    { year: '1941', event: 'Clinical trials conducted in New York hospitals.' },
    { year: '1942', event: 'Lakhovsky dies; MWO removed from U.S. hospitals.' },
  ];

  return (
    <div className="main-content">
      <div className="multiwave-container">
        <h1 className="multiwave-title">MultiWave Oscillator: Healing Through Resonance</h1>

        {/* Introduction */}
        <section className="multiwave-section multiwave-intro">
          <h2 className="multiwave-section-title">Front Page: A New Approach to Wellness</h2>
          <p className="multiwave-section-text">
            The MultiWave Oscillator (MWO), developed by Georges Lakhovsky, uses electromagnetic frequencies to enhance cellular health and promote detoxification. This experimental device aims to harmonize the body’s energy field, offering potential relief for various ailments, from pain to chronic fatigue.
          </p>
          <p className="multiwave-section-text">
            <a href="https://lakhovsky.com/" className="multiwave-section-link" target="_blank" rel="noopener noreferrer">
              For more information, visit lakhovsky.com
            </a>
          </p>
        </section>

        {/* History */}
        <section className="multiwave-section">
          <h2 className="multiwave-section-title">History: A Pioneering Discovery</h2>
          <p className="multiwave-section-text">
            In the 1920s, Georges Lakhovsky, a Russian engineer, developed the MWO, theorizing that cells act as oscillating circuits. His experiments with plants showed remarkable results: geraniums with induced tumors recovered after MWO exposure. Human trials in the 1930s and 1940s reported a 98% success rate in treating cancers, though these claims lack modern validation.
          </p>
          <p className="multiwave-section-text">
            After Lakhovsky’s death in 1942, allegedly in a suspicious car accident, the MWO was removed from U.S. hospitals. Some speculate this was due to suppression by the medical establishment, though evidence is anecdotal.
          </p>
        </section>

        {/* Science */}
        <section className="multiwave-section">
          <h2 className="multiwave-section-title">Science: The Mechanism Explained</h2>
          <p className="multiwave-section-text">
            The MWO consists of two circular antennas emitting a broad spectrum of electromagnetic frequencies, creating a high-voltage electrostatic field. Lakhovsky believed healthy cells resonate at specific frequencies, and the MWO amplifies these to overpower pathogenic cells, like pushing a swing at the right moment to boost its motion.
          </p>
          <p className="multiwave-section-text">
            The device operates in the range of 750,000 Hz to 3,000,000,000 Hz, targeting cellular oscillations without passing current through the body. While intriguing, the theory lacks peer-reviewed evidence.
          </p>
          <div className="diagram-placeholder">
            <p className="multiwave-section-text">
              Illustration: Two concentric antennas, arranged in a circular pattern, emit multiple wavelengths. The patient, positioned between them, absorbs the field, which resonates with cellular frequencies. [Would you like a chart of the frequency range? Please confirm.]
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="multiwave-section">
          <h2 className="multiwave-section-title">Health Report: Potential Benefits</h2>
          <p className="multiwave-section-text">
            Anecdotal reports suggest the MWO may offer various health benefits by enhancing cellular energy and supporting the body’s natural processes. Reported effects include:
          </p>
          <ul className="multiwave-list">
            <li>Enhanced cellular energy and immune function.</li>
            <li>Relief from pain, arthritis, and chronic fatigue.</li>
            <li>Support for detoxification and countering electrostress from devices.</li>
            <li>Promotion of anti-aging by raising cell voltage to healthy levels.</li>
            <li>Potential benefits for cancer and infections, though unverified.</li>
          </ul>
          <p className="multiwave-section-text">
            <strong>Note:</strong> The MWO is an experimental device and not a substitute for medical treatment. Consult a healthcare professional before use.
          </p>
        </section>

        {/* FAQs */}
        <section className="multiwave-section">
          <h2 className="multiwave-section-title">Reader Questions: FAQs</h2>
          <p className="multiwave-section-text">
            <strong>Is the MWO safe?</strong> The MWO is claimed to be harmless, using an oscillating field rather than direct current. However, safety studies are lacking, and caution is advised for those with medical implants.
          </p>
          <p className="multiwave-section-text">
            <strong>Can it cure cancer?</strong> Historical claims suggest benefits, but no scientific evidence supports curing cancer. It should be used as a complementary therapy only.
          </p>
          <p className="multiwave-section-text">
            <strong>How do I use it?</strong> Users sit between the antennas for 15–30 minute sessions, relaxing and combining with a healthy lifestyle for best results.
          </p>
        </section>

        {/* Timeline */}
        <section className="multiwave-timeline">
          <h2 className="multiwave-section-title">Chronology: Key Milestones</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-event">
                <span className="timeline-year">{event.year}</span>
                <p className="multiwave-section-text">{event.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Notes */}
        <section className="multiwave-section-notes">
          <h2 className="multiwave-section-title">Technical Notes: Replicating the MWO</h2>
          <p className="multiwave-section-text">
            Replicating the MWO today involves modern electronics to generate high-voltage electrostatic fields and broad-spectrum frequencies (750 kHz–3 GHz). Key tools include:
          </p>
          <ul className="multiwave-list">
            <li><strong>High-Voltage Circuits:</strong> Tesla coil kits or transformers (10–50 kV) for electrostatic fields.</li>
            <li><strong>RF Generators:</strong> Software-defined radios (e.g., HackRF One) or function generators for frequency output.</li>
            <li><strong>Antenna Design:</strong> Copper coils or PCB antennas, designed with KiCad or Eagle software.</li>
            <li><strong>Safety Measures:</strong> Insulation, grounding, and RF shielding to mitigate high-voltage and RF exposure risks.</li>
          </ul>
          <p className="multiwave-section-text">
            <strong>Caution:</strong> Replication involves high-voltage and RF hazards. Follow FCC/ICNIRP guidelines and consult professionals. Historical schematics may be found at lakhovsky.com.
          </p>
          <p className="multiwave-section-text">
            <a href="https://lakhovsky.com/" className="multiwave-section-link" target="_blank" rel="noopener noreferrer">
              Visit lakhovsky.com for schematics and resources
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MultiWave;