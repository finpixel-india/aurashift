import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FEED_MESSAGES = [
    { type: 'RESERVED', text: '2023 Porsche 911 GT3 RS globally secured by Client 882-V.' },
    { type: 'NEW ENTRY', text: 'Incoming: 2024 Pagani Utopia chassis allocation confirmed.' },
    { type: 'PRICE SHIFT', text: 'Market adjustment applied to Ferrari SF90 Stradale.' },
    { type: 'SOLD', text: 'McLaren P1 (Chassis #209) transfer finalized.' },
    { type: 'URGENT', text: 'Koenigsegg Regera off-market listing now active.' },
    { type: 'SOURCING', text: 'Syndicate successfully located 1-of-1 Bugatti Divo.' }
];

export const LiveMarketFeed = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % FEED_MESSAGES.length);
        }, 4000); // Change message every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const currentMsg = FEED_MESSAGES[currentIndex];

    // Determine color based on type
    const getTypeColor = (type) => {
        switch (type) {
            case 'RESERVED': return 'rgba(255,165,0,0.8)'; // Orange
            case 'NEW ENTRY': return 'rgba(0,255,100,0.8)'; // Green
            case 'SOLD': return 'rgba(255,50,50,0.8)'; // Red
            case 'URGENT': return 'var(--color-accent)'; // Gold/Yellow
            default: return 'var(--color-text-dim)'; // Grey
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(5,5,5,0.95)',
            borderTop: '1px solid rgba(255,215,0,0.2)',
            zIndex: 100,
            padding: '0.8rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontFamily: 'var(--font-display)',
            backdropFilter: 'blur(10px)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-accent)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px var(--color-accent)',
                    animation: 'pulse 2s infinite'
                }} />
                <span style={{ color: 'var(--color-text)', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 'bold' }}>
                    SYNDICATE NETWORK
                </span>
            </div>

            <div style={{ flex: 1, position: 'relative', height: '20px', overflow: 'hidden' }}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ position: 'absolute', width: '100%', display: 'flex', gap: '1rem', alignItems: 'center' }}
                    >
                        <span style={{
                            fontSize: '0.7rem',
                            border: `1px solid ${getTypeColor(currentMsg.type)}`,
                            color: getTypeColor(currentMsg.type),
                            padding: '0.2rem 0.6rem',
                            letterSpacing: '0.05em'
                        }}>
                            {currentMsg.type}
                        </span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', letterSpacing: '0.05em' }}>
                            {currentMsg.text}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
