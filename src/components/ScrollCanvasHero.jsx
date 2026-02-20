import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 240;

const preloadedImages = [];

// Preload images outside of component to start immediately
if (typeof window !== 'undefined') {
    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        // The files are named ezgif-frame-001.jpg to ezgif-frame-240.jpg
        img.src = `/images/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
        preloadedImages.push(img);
    }
}

export const ScrollCanvasHero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to 239)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        let loadedCount = 0;
        preloadedImages.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
                };
            }
        });
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
    }, []);

    // Render Canvas Loop & Setup
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Define native resolution reflecting the image aspect ratio
        canvas.width = 1920;
        canvas.height = 1080;

        const ctx = canvas.getContext('2d');

        // Initial draw if image is ready
        if (preloadedImages[0] && preloadedImages[0].complete) {
            ctx.drawImage(preloadedImages[0], 0, 0, 1920, 1080);
        }

        // Subscribe to scroll updates
        const unsubscribe = frameIndex.on("change", (latest) => {
            const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
            const img = preloadedImages[index];
            if (img && img.complete) {
                ctx.clearRect(0, 0, 1920, 1080);
                ctx.drawImage(img, 0, 0, 1920, 1080);
            }
        });

        // Redraw on load completion
        if (imagesLoaded) {
            const index = Math.floor(frameIndex.get());
            const img = preloadedImages[index];
            if (img && img.complete) {
                ctx.clearRect(0, 0, 1920, 1080);
                ctx.drawImage(img, 0, 0, 1920, 1080);
            }
        }

        return () => unsubscribe();
    }, [frameIndex, imagesLoaded]);

    // HUD Opacity Transforms based on scroll progress quarters
    // Q1: 0% - 25%
    const hud1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0, 0]);
    const hud1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    // Q2: 25% - 50%
    const hud2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const hud2Y = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

    // Q3: 50% - 75%
    const hud3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
    const hud3Y = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    // Q4: 75% - 100%
    const hud4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
    const hud4Y = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

    return (
        <section ref={containerRef} style={{ height: '600vh', position: 'relative', background: '#000' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Visualizer Canvas */}
                <canvas
                    ref={canvasRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: imagesLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease',
                        zIndex: 1
                    }}
                />

                {/* Loading State Overlay */}
                {!imagesLoaded && (
                    <div style={{ position: 'absolute', zIndex: 10, color: 'var(--color-accent)', fontFamily: 'var(--font-display)', textAlign: 'center' }}>
                        <div>INITIALIZING VISUAL TELEMETRY...</div>
                        <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', marginTop: '1rem', overflow: 'hidden' }}>
                            <motion.div
                                animate={{ x: [-200, 200] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                style={{ height: '100%', width: '50%', background: 'var(--color-accent)' }}
                            />
                        </div>
                    </div>
                )}

                {/* HUD Overlay Layer */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
                    {/* HUD 1: Boot Sequence (0-25%) */}
                    <motion.div style={{ position: 'absolute', top: '20%', left: '10%', opacity: hud1Opacity, y: hud1Y }}>
                        <div className="font-display text-accent" style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>INITIALIZATION //</div>
                        <h2 className="font-display responsive-title-h2" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                            CARBON <br />
                            MONOCOQUE <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>SECURED.</span>
                        </h2>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                            <div>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>CHASSIS RIGIDITY</div>
                                <div className="font-display">100% NOMINAL</div>
                            </div>
                            <div>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>CORE TEMP</div>
                                <div className="font-display">32°C</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HUD 2: Aerodynamics (25-50%) */}
                    <motion.div style={{ position: 'absolute', top: '40%', right: '10%', textAlign: 'right', opacity: hud2Opacity, y: hud2Y }}>
                        <div className="font-display text-accent" style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// AERODYNAMICS</div>
                        <h2 className="font-display responsive-title-h2" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                            ACTIVE <br />
                            SURFACES <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>ENGAGED.</span>
                        </h2>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'flex-end' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>DOWNFORCE LBS</div>
                                <div className="font-display text-accent">1,850</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>DRAG COEFF</div>
                                <div className="font-display">0.32 Cd</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HUD 3: Powertrain (50-75%) */}
                    <motion.div style={{ position: 'absolute', bottom: '20%', left: '10%', opacity: hud3Opacity, y: hud3Y }}>
                        <div className="font-display text-accent" style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>POWERTRAIN //</div>
                        <h2 className="font-display responsive-title-h2" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                            FUSION <br />
                            DRIVE <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>VERIFIED.</span>
                        </h2>
                        <div className="responsive-grid-2" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderLeft: '2px solid var(--color-accent)', backdropFilter: 'blur(5px)' }}>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>OUTPUT</div>
                                <div className="font-display" style={{ fontSize: '1.5rem' }}>1,578 BHP</div>
                            </div>
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderLeft: '2px solid white', backdropFilter: 'blur(5px)' }}>
                                <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem' }}>TORQUE</div>
                                <div className="font-display" style={{ fontSize: '1.5rem' }}>1,180 LB-FT</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HUD 4: Launch Sequence (75-100%) */}
                    <motion.div style={{ position: 'absolute', top: '40%', left: '10%', opacity: hud4Opacity, y: hud4Y }}>
                        <div className="font-display text-accent" style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>SYSTEMS GREEN //</div>
                        <h2 className="font-display responsive-title-h1" style={{ fontSize: '4.5rem', fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.8)', lineHeight: 1.1, marginBottom: '2rem' }}>
                            READY FOR <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>LAUNCH.</span>
                        </h2>
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                                display: 'inline-block',
                                border: '1px solid var(--color-accent)',
                                padding: '1rem 3rem',
                                background: 'rgba(255,215,0,0.1)',
                                fontFamily: 'var(--font-display)',
                                color: 'var(--color-accent)',
                                letterSpacing: '0.2em',
                                backdropFilter: 'blur(5px)'
                            }}>
                            PROCEED BELOW
                        </motion.div>
                    </motion.div>

                </div>

                {/* Subtle Scroll Indicator */}
                <motion.div
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', x: '-50%', opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--color-accent), transparent)', margin: '0 auto' }} />
                </motion.div>
            </div>
        </section>
    );
};
