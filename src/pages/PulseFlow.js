import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PulseFlow.css';

const PulseFlow = () => {
  const [frequency, setFrequency] = useState(null); // Default: null (no frequency selected)
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Safer default for autism
  const [userProfile, setUserProfile] = useState({ emotion: 'neutral' }); // eslint-disable-line no-unused-vars
  const [isFreqOpen, setIsFreqOpen] = useState(false); // Accordion state
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  // All nine Solfeggio Frequencies
  const frequencies = [
    { hz: 174, name: 'Pain Relief', color: 'rgb(59, 130, 246)', description: 'Promotes stress reduction and physical calm.' },
    { hz: 285, name: 'Healing', color: 'rgb(249, 115, 22)', description: 'Supports tissue regeneration and energy restoration.' },
    { hz: 396, name: 'Fear Liberation', color: 'rgb(239, 68, 68)', description: 'Releases guilt and fear, grounding users.' },
    { hz: 417, name: 'Change Facilitation', color: 'rgb(251, 146, 60)', description: 'Clears negativity, fosters transformation.' },
    { hz: 528, name: 'Transformation', color: 'rgb(250, 204, 21)', description: 'Reduces stress, promotes healing and DNA repair.' },
    { hz: 639, name: 'Relationships', color: 'rgb(34, 197, 94)', description: 'Enhances communication and harmony.' },
    { hz: 741, name: 'Intuition', color: 'rgb(96, 165, 250)', description: 'Awakens expression and intuitive clarity.' },
    { hz: 852, name: 'Spiritual Order', color: 'rgb(99, 102, 241)', description: 'Fosters awareness and spiritual balance.' },
    { hz: 963, name: 'Divine Connection', color: 'rgb(168, 85, 247)', description: 'Promotes enlightenment and universal unity.' },
  ];

  // AI-driven frequency suggestion
  const suggestFrequency = (profile) => {
    const emotion = profile.emotion.toLowerCase();
    if (emotion.includes('stressed') || emotion.includes('overwhelmed')) return 174;
    if (emotion.includes('anxious') || emotion.includes('fearful')) return 396;
    if (emotion.includes('stuck') || emotion.includes('negative')) return 417;
    if (emotion.includes('isolated') || emotion.includes('lonely')) return 639;
    if (emotion.includes('confused') || emotion.includes('unclear')) return 741;
    if (emotion.includes('disconnected') || emotion.includes('lost')) return 852;
    if (emotion.includes('seeking') || emotion.includes('enlightenment')) return 963;
    if (emotion.includes('tired') || emotion.includes('drained')) return 285;
    return 528;
  };

  // Initialize Web Audio API
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    gainNodeRef.current = audioContextRef.current.createGain();
    gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current.currentTime);
    gainNodeRef.current.connect(audioContextRef.current.destination);

    return () => {
      if (oscillatorRef.current) oscillatorRef.current.stop();
      audioContextRef.current.close();
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current.currentTime);
    }
  }, [volume]);

  // Handle audio play/stop with haptic feedback
  const toggleAudio = () => {
    if (isPlaying) {
      if (oscillatorRef.current) oscillatorRef.current.stop();
      setIsPlaying(false);
    } else if (frequency) {
      oscillatorRef.current = audioContextRef.current.createOscillator();
      oscillatorRef.current.type = 'sine';
      oscillatorRef.current.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
      oscillatorRef.current.connect(gainNodeRef.current);
      oscillatorRef.current.start();
      setIsPlaying(true);
      if ('vibrate' in navigator) navigator.vibrate(50);
    }
  };

  // Dynamic canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    const updateCanvasSize = () => {
      const maxWidth = Math.min(window.innerWidth * 0.9, 720);
      canvas.width = maxWidth;
      canvas.height = maxWidth * 0.75; // 4:3 aspect ratio
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Cymatic visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;

    const drawDefault = () => {
      // Gradient background transitioning through frequency colors
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      frequencies.forEach((freq, index) => {
        gradient.addColorStop(index / (frequencies.length - 1), freq.color);
      });
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle static wave for neutral state
      ctx.strokeStyle = '#333333';
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 2 + Math.sin(x * 0.02) * (canvas.height * 0.1);
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameIdRef.current = requestAnimationFrame(drawDefault);
    };

    const drawCymatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const selectedFreq = frequencies.find(f => f.hz === frequency);
      ctx.strokeStyle = selectedFreq.color;
      ctx.fillStyle = `${selectedFreq.color}33`;

      // Primary pulsing wave
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const amplitude = (frequency < 400 ? canvas.height * 0.3 : frequency < 700 ? canvas.height * 0.25 : canvas.height * 0.2) * (1 + Math.sin(time * 0.5) * 0.3);
        const y = canvas.height / 2 + Math.sin(x * 0.02 + time) * amplitude * Math.sin(x * 0.01 + frequency * 0.001);
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Secondary wave for depth
      ctx.beginPath();
      ctx.strokeStyle = `${selectedFreq.color}66`;
      for (let x = 0; x < canvas.width; x += 5) {
        const amplitude = (frequency < 400 ? canvas.height * 0.2 : frequency < 700 ? canvas.height * 0.15 : canvas.height * 0.1) * (1 + Math.cos(time * 0.5) * 0.3);
        const y = canvas.height / 2 + Math.cos(x * 0.03 + time) * amplitude * Math.sin(x * 0.01 + frequency * 0.001);
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      time += 0.05;
      animationFrameIdRef.current = requestAnimationFrame(drawCymatic);
    };

    if (frequency) {
      drawCymatic();
    } else {
      drawDefault();
    }

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [frequency]);

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const emotion = e.target.emotion.value;
    setUserProfile({ emotion });
    setFrequency(suggestFrequency({ emotion }));
    if ('vibrate' in navigator) navigator.vibrate(50);
  };

  return (
    <div className="pulseflow-container" style={{ marginTop: '60px' }}>
      <div
        className="boombox-container"
        style={{
          background: '#f5f5f5',
          padding: '1rem',
          border: '1px solid #c9cdd2',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          marginBottom: '1rem',
        }}
      >
        <h1 className="pulseflow-title">Synesthetic Cymatic Journey</h1>
        <p className="pulseflow-description">
          Experience all nine Solfeggio Frequencies as dynamic visuals, tailored to your emotional and sensory needs. Perfect for caregivers seeking calm and connection.
        </p>

        <h2 className="pulseflow-section-title">Cymatic Visualization</h2>
        <canvas
          ref={canvasRef}
          className="w-full border-2 border-[#333333] rounded"
          style={{ marginBottom: '0.5rem' }}
          aria-label="Cymatic visualization of selected frequency"
        />

        <div
          className="boombox-controls"
          style={{
            background: '#e5e5e5',
            padding: '0.5rem',
            borderRadius: '4px',
            marginBottom: '0.5rem',
            border: '1px solid #c9cdd2',
          }}
        >
          <div className="flex gap-8 items-center justify-evenly">
            <button
              onClick={toggleAudio}
              className={`pulseflow-link px-4 py-2 rounded ${isPlaying ? 'bg-red-500' : 'bg-[#000000]'}`}
              style={{ textDecoration: 'none', color: 'black', minHeight: '44px', minWidth: '80px',  }}
              aria-label={isPlaying ? 'Stop audio' : 'Play audio'}
              disabled={!frequency}
            >
              {isPlaying ? 'Stop' : 'Play'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24"
              style={{ accentColor: '#333333' }}
              aria-label="Adjust volume"
            />
          </div>
        </div>

        <button
          className="pulseflow-section-title"
          onClick={() => setIsFreqOpen(!isFreqOpen)}
          aria-expanded={isFreqOpen}
          aria-controls="frequency-list"
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Frequencies {isFreqOpen ? '▲' : '▼'}
        </button>
        <div
          id="frequency-list"
          className={`pulseflow-item ${isFreqOpen ? '' : 'hidden'}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {frequencies.map((freq) => (
            <button
              key={freq.hz}
              onClick={() => {
                setFrequency(freq.hz);
                if ('vibrate' in navigator) navigator.vibrate(50);
              }}
              className="pulseflow-link p-2 rounded"
              style={{
                textDecoration: 'none',
                color: 'black',
                minHeight: '44px',
                fontSize: '0.8125rem',
                textAlign: 'center',
                borderRadius: '4px',
                backgroundColor: frequency === freq.hz ? freq.color : '#b5b5b5',
              }}
              aria-label={`Select ${freq.hz} Hz frequency`}
              title={freq.description}
            >
              {freq.name} ({freq.hz} Hz)
            </button>
          ))}
        </div>

        <h3 className="pulseflow-section-title">Personalize Your Experience</h3>
        <form onSubmit={handleProfileSubmit} className="pulseflow-section-text">
          <div className="flex flex-col gap-2 mb-4 justify-center">
            <select
              name="emotion"
              className="p-2 border border-[#d1d5db] rounded"
              style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif", fontSize: '0.875rem', color: '#333333', minWidth: '180px' }}
              defaultValue="neutral"
              aria-label="Select your emotional state"
            >
              <option value="neutral">Neutral</option>
              <option value="stressed">Stressed</option>
              <option value="anxious">Anxious</option>
              <option value="overwhelmed">Overwhelmed</option>
              <option value="isolated">Isolated</option>
              <option value="confused">Confused</option>
              <option value="disconnected">Disconnected</option>
              <option value="seeking">Seeking Enlightenment</option>
              <option value="tired">Tired</option>
            </select>
            <button
              type="submit"
              className="pulseflow-link px-4 py-2 bg-[#333333] rounded"
              style={{ textDecoration: 'none', minWidth: '120px', color: 'black' }}
              aria-label="Suggest a frequency based on your mood"
            >
              Suggest Frequency
            </button>
          </div>
        </form>

        <div className="pulseflow-section-text flex justify-center">
          <Link to="/solfeggio-studio" className="pulseflow-link" aria-label="Explore more frequencies">
            Explore More Frequencies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PulseFlow;