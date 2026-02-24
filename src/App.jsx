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
          <button
            className="btn-futuristic"
            onClick={onInitialize}
          >
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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const response = await fetch('/video.mp4');
        const contentLength = +(response.headers.get('Content-Length') || 0);
        const reader = response.body.getReader();
        const chunks = [];
        let received = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done || cancelled) break;
          chunks.push(value);
          received += value.length;
          if (contentLength) {
            setLoadingProgress(Math.min(Math.round((received / contentLength) * 100), 100));
          }
        }

        if (cancelled) return;

        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);

        if (videoRef.current) {
          videoRef.current.src = url;
          videoRef.current.load();
          videoRef.current.play().catch(() => { });
        }

        setLoadingProgress(100);
        setIsReady(true);
      } catch (err) {
        console.error('Failed to load intro video:', err);
        // If fetch fails (e.g. no video file), skip directly to main
        if (!cancelled) onComplete();
      }
    })();

    return () => { cancelled = true; };
  }, [onComplete]);

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
        playsInline
        onEnded={onComplete}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />

      {/* Loading progress overlay */}
      {!isReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            zIndex: 5
          }}
        >
          <p className="font-display" style={{
            color: 'var(--color-text-dim)',
            letterSpacing: '0.2em',
            fontSize: '0.9rem',
            margin: 0
          }}>
            LOADING INTRO... {loadingProgress}%
          </p>
          <div style={{
            width: '220px',
            height: '3px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'var(--color-accent)',
                borderRadius: '2px'
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}

      {/* Skip Intro Button — always visible */}
      <div className="skip-intro-wrapper">
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
            display: 'block'
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
      <div style={{ flex: 1, position: 'relative' }}>
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
