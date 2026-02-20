import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AUDIO_SAMPLES = [
    {
        id: 'lfa',
        name: 'Lexus LFA (Yamaha V10)',
        desc: 'Acoustic perfection tuned by Yamaha musical instruments. 9000 RPM redline.',
        color: '#ff3333',
        // Example royalty free sound link - in production this would be the actual engine note
        url: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=formula-1-1-6679.mp3'
    },
    {
        id: 'zonda',
        name: 'Pagani Zonda R (AMG V12)',
        desc: 'Unrestricted naturally aspirated V12 scream. Pure mechanical violence.',
        color: '#ffcc00',
        url: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_0ee24fa48e.mp3?filename=car-engine-revving-21271.mp3'
    },
    {
        id: 'cgt',
        name: 'Porsche Carrera GT (V10)',
        desc: 'Derived from a cancelled F1/Le Mans project. Unmistakable howl.',
        color: '#33ccff',
        url: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=sports-car-driving-14022.mp3'
    }
];

export const AcousticShowcase = () => {
    const [activeAudio, setActiveAudio] = useState(AUDIO_SAMPLES[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    // Stop current audio when switching tracks
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            }
        }
    }, [activeAudio]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const total = audioRef.current.duration;
            if (total) {
                setProgress((current / total) * 100);
            }
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    // Simulated visualizer bars
    const renderVisualizer = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px', opacity: isPlaying ? 1 : 0.3, transition: 'opacity 0.3s' }}>
                {[...Array(30)].map((_, i) => {
                    // Randomize height if playing, static if paused
                    const height = isPlaying ? Math.random() * 100 : 20 + Math.sin(i) * 10;
                    return (
                        <motion.div
                            key={i}
                            animate={isPlaying ? { height: `${height}%` } : { height: `${20 + Math.sin(i) * 10}%` }}
                            transition={{ duration: 0.1, repeat: isPlaying ? Infinity : 0, repeatType: "mirror" }}
                            style={{
                                flex: 1,
                                background: `linear-gradient(to top, var(--color-accent), ${activeAudio.color})`,
                                borderRadius: '2px 2px 0 0'
                            }}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div className="glass-panel responsive-section" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}>
            <audio
                ref={audioRef}
                src={activeAudio.url}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleAudioEnd}
                preload="metadata"
            />

            <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Volume2 size={16} /> ACOUSTIC PROFILE //
                    </h2>
                    <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>SENSORY TELEMETRY</h3>
                    <p style={{ color: 'var(--color-text-dim)', marginBottom: '3rem', lineHeight: '1.6' }}>
                        For analog purists, the powertrain's acoustic signature is the ultimate metric. Audition the resonant frequencies of our most visceral assets.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {AUDIO_SAMPLES.map(sample => (
                            <button
                                key={sample.id}
                                onClick={() => setActiveAudio(sample)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '1.5rem',
                                    background: activeAudio.id === sample.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                                    border: `1px solid ${activeAudio.id === sample.id ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)'}`,
                                    color: 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <span className="font-display" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{sample.name}</span>
                                <span style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>{sample.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="responsive-section" style={{ padding: '3rem', background: 'rgba(5,5,5,0.8)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="responsive-flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div>
                            <div className="text-accent font-display" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>NOW AUDITIONING</div>
                            <div className="font-display" style={{ fontSize: '1.5rem' }}>{activeAudio.name}</div>
                        </div>
                        <button
                            onClick={togglePlay}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'transparent',
                                border: '2px solid var(--color-accent)',
                                color: 'var(--color-accent)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                '&:hover': { background: 'rgba(255,215,0,0.1)' }
                            }}
                        >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '4px' }} />}
                        </button>
                    </div>

                    <div style={{ width: '100%' }}>
                        {renderVisualizer()}
                        <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', marginTop: '1rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${progress}%`, background: 'var(--color-accent)', transition: 'width 0.1s linear' }} />
                        </div>
                    </div>

                    <NavLink to="/inventory" style={{ textDecoration: 'none', marginTop: '1rem' }}>
                        <button style={{ background: 'transparent', color: 'white', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
                            VIEW ASSET FILE <ArrowRight size={16} />
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
