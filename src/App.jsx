import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, NavLink } from 'react-router-dom';
import { MainShowcase } from './components/MainShowcase';
import { InventoryPage } from './components/InventoryPage';
import { FinancePage } from './components/FinancePage';
import { HeritagePage } from './components/HeritagePage';
import { ContactPage } from './components/ContactPage';
import { VehicleDetailPage } from './components/VehicleDetailPage';
import './index.css';

// --- Components ---

const BrandingOverlay = ({ interactive = true }) => {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', cursor: interactive ? 'pointer' : 'default' }}>
      <div style={{
        position: 'relative',
        width: '36px',
        height: '42px',
        marginRight: '-4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>
        {/* Custom SVG 'A' Logo */}
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.6))' }}>
          <path d="M50 5 L85 95 L65 95 L50 45 L35 95 L15 95 Z" fill="var(--color-accent)" />
          {/* Inner Accent Line */}
          <path d="M50 25 L65 70 L35 70 Z" fill="none" stroke="var(--color-bg)" strokeWidth="6" />
        </svg>
      </div>
      <h1 style={{
        fontFamily: 'var(--font-logo)',
        fontSize: '1.8rem',
        fontWeight: '900',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        zIndex: 1,
        color: 'white'
      }}>
        URA <span className="text-accent" style={{ marginLeft: '6px' }}>SHIFT</span>
      </h1>
    </div>
  );

  return (
    <motion.div
      className="branding-overlay"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}
    >
      {interactive ? <NavLink to="/" style={{ textDecoration: 'none' }}>{content}</NavLink> : content}
    </motion.div>
  );
};

const InitScreen = ({ onInitialize }) => {
  return (
    <motion.div
      className="fullscreen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: "blur(5px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <BrandingOverlay interactive={false} />

      <div style={{ textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="font-display" style={{
            color: 'var(--color-text-dim)',
            marginBottom: '2rem',
            letterSpacing: '0.2em',
            fontSize: '0.9rem'
          }}>
            SYSTEM STANDBY
          </p>
          <button className="btn-futuristic" onClick={onInitialize}>
            INITIALIZE PROTOCOL
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
};

const IntroSequence = ({ onComplete }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      className="fullscreen-container"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ background: 'black' }}
    >
      <BrandingOverlay interactive={false} />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        preload="auto"
        onEnded={onComplete}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* 
        Wrap the button in a fixed container so the whileHover scale doesn't 
        affect positioning / cause layout thrashing that results in a glitch 
      */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 60,
      }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          onClick={onComplete}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '0.5rem 1.5rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            cursor: 'pointer',
            borderRadius: '4px',
            backdropFilter: 'blur(4px)',
            display: 'block' // Prevent inline-block jitter
          }}
        >
          SKIP INTRO
        </motion.button>
      </div>
    </motion.div>
  );
};

// --- Page Layout Wrapper ---
const PageLayout = ({ children }) => {
  const location = useLocation();
  // Ensure we scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05, ease: "easeOut" }}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <BrandingOverlay />

      {/* Page Content */}
      <div style={{ flex: 1, zIndex: 10, position: 'relative' }}>
        {children}
      </div>
    </motion.div>
  );
};

// --- App Router ---
function AppRouter() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageLayout><MainShowcase /></PageLayout>} />
          <Route path="/inventory" element={<PageLayout><InventoryPage /></PageLayout>} />
          <Route path="/vdp/:id" element={<PageLayout><VehicleDetailPage /></PageLayout>} />
          <Route path="/finance" element={<PageLayout><FinancePage /></PageLayout>} />
          <Route path="/heritage" element={<PageLayout><HeritagePage /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// --- Main App Entry ---
function App() {
  const [phase, setPhase] = useState('INIT'); // INIT, INTRO, MAIN

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === 'INIT' && (
          <InitScreen key="init" onInitialize={() => setPhase('INTRO')} />
        )}

        {phase === 'INTRO' && (
          <IntroSequence key="intro" onComplete={() => setPhase('MAIN')} />
        )}

        {phase === 'MAIN' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Once the intro is done, we yield entirely to the multi-page router */}
            <AppRouter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
