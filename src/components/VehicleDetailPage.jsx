import { motion } from 'framer-motion';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Download, PlayCircle, Settings, Infinity, Wind, Crosshair } from 'lucide-react';

export const VehicleDetailPage = () => {
    // Hardcoded for demo purposes at /vdp/1
    const vehicle = {
        name: 'BUGATTI CHIRON SUPER SPORT',
        tagline: 'The Ultimate Grand Tourisme. 1,578 Horsepower of Pure Elegance.',
        price: '$3,825,000',
        image: 'https://images.unsplash.com/photo-1627454819213-f58c73d9ecdb?w=1600&q=80',
        specs: {
            engine: '8.0L Quad-Turbocharged W16',
            power: '1,578 BHP @ 7,100 rpm',
            torque: '1,180 lb-ft @ 2,250 rpm',
            acceleration: '0-62 mph in 2.4s',
            topSpeed: '273 mph (Electronically Limited)',
            weight: '4,360 lbs'
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '6rem 4rem 0 4rem', position: 'relative' }}>
            <NavBar />

            <div className="responsive-grid-2" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(600px, 1fr) 450px',
                gap: '4rem',
                flex: 1
            }}>
                {/* Left Side: Media & 360 Tour */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Main Gallery Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel"
                        style={{ height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: `url(${vehicle.image}) center/cover no-repeat` }}
                    >
                        {/* Background gradient simulating studio lighting */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(5,5,5,0.7) 100%)' }} />

                        <div style={{ textAlign: 'center', zIndex: 10, cursor: 'pointer', transition: 'transform 0.3s ease' }} className="hover-scale">
                            <PlayCircle size={64} className="text-accent" style={{ opacity: 0.8, marginBottom: '1rem', margin: '0 auto', filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))' }} />
                        </div>
                    </motion.div>

                    {/* Feature Highlights Grid */}
                    <div className="responsive-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                            <Infinity className="text-accent" size={32} />
                            <div>
                                <h4 className="font-display" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>AERODYNAMICS</h4>
                                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: '1.4' }}>Elongated tail section for flawless high-speed stability.</p>
                            </div>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                            <Wind className="text-accent" size={32} />
                            <div>
                                <h4 className="font-display" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>THERMAL DYNAMICS</h4>
                                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: '1.4' }}>Advanced air curtains and enlarged intakes for the W16.</p>
                            </div>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
                            <Crosshair className="text-accent" size={32} />
                            <div>
                                <h4 className="font-display" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>STABILITY LOGIC</h4>
                                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: '1.4' }}>Predictive torque vectoring computing at 1,000Hz.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Specs & Conversion Data */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ color: '#00FF41', border: '1px solid #00FF41', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', background: 'rgba(0,0,0,0.5)' }}>IN STOCK</span>
                        <span style={{ color: 'var(--color-text-dim)', fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>MOLSHEIM, FRANCE</span>
                    </div>

                    <h2 className="font-display" style={{ fontSize: '3.5rem', fontWeight: '700', lineHeight: 1, marginBottom: '1rem' }}>{vehicle.name}</h2>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{vehicle.tagline}</p>

                    <div className="font-display text-accent" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem' }}>
                        {vehicle.price}
                    </div>

                    {/* Tech Specs Table */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
                        {Object.entries(vehicle.specs).map(([key, value]) => (
                            <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--color-text-dim)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span style={{ fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>{value}</span>
                            </div>
                        ))}
                    </div>

                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '2rem' }}>
                        Prices exclude transportation, local taxes, delivery, and documentation fees. Contact your personal concierge for exact landing costs.
                    </p>

                    {/* Conversion Endpoints */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                        <button className="btn-futuristic" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '1.2rem' }}>
                            <Settings size={18} /> INITIATE PURCHASE PROTOCOL
                        </button>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button style={{ flex: 1, background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '1rem', cursor: 'pointer', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', transition: 'background 0.3s' }} onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.target.style.background = 'rgba(255,255,255,0.1)'}>SCHEDULE VIEWING</button>
                            <button style={{ flex: 1, background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'border-color 0.3s' }} onMouseOver={e => e.target.style.borderColor = 'white'} onMouseOut={e => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}>
                                <Download size={16} /> WINDOW STICKER
                            </button>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Extended Detail Section 1: Cinematic Features */}
            <section style={{ marginTop: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>ENGINEERING EXCELLENCE //</h2>
                    <h3 className="font-display" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>FORM FOLLOWS 273 MPH.</h3>
                </div>

                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{
                        height: '400px',
                        background: `url('https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200') center/cover`,
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.8)', borderLeft: '2px solid var(--color-accent)' }}>
                            <h4 className="font-display" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>AERO-DYNAMIC TAIL</h4>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', maxWidth: '300px' }}>Extended by 25cm to hold laminar flow entirely across the chassis at terminal velocity.</p>
                        </div>
                    </div>
                    <div style={{
                        height: '400px',
                        background: `url('https://images.unsplash.com/photo-1600706380629-657ab3496bc1?q=80&w=1200') center/cover`,
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.8)', borderRight: '2px solid var(--color-accent)', textAlign: 'right' }}>
                            <h4 className="font-display" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>TITANIUM EXHAUST TRACT</h4>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', maxWidth: '300px' }}>3D-printed titanium structures to manage the ferocious heat outpour of the W16.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Detail Section 2: Full Spec Table */}
            <section style={{ padding: '6rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h3 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>COMPLETE TECHNICAL MANIFEST</h3>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h4 className="font-display text-accent" style={{ fontSize: '1.2rem', borderBottom: '1px solid rgba(255,215,0,0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>POWERTRAIN</h4>
                    <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem', color: 'var(--color-text-dim)' }}>
                        <div>Displacement: <span style={{ color: 'white', float: 'right' }}>7,993 cc</span></div>
                        <div>Turbochargers: <span style={{ color: 'white', float: 'right' }}>4x Two-Stage</span></div>
                        <div>Transmission: <span style={{ color: 'white', float: 'right' }}>7-Speed Dual-Clutch</span></div>
                        <div>Drive Type: <span style={{ color: 'white', float: 'right' }}>Haldex AWD</span></div>
                    </div>

                    <h4 className="font-display text-accent" style={{ fontSize: '1.2rem', borderBottom: '1px solid rgba(255,215,0,0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>DIMENSIONS & CAPACITY</h4>
                    <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem', color: 'var(--color-text-dim)' }}>
                        <div>Length: <span style={{ color: 'white', float: 'right' }}>4794 mm</span></div>
                        <div>Width: <span style={{ color: 'white', float: 'right' }}>2038 mm</span></div>
                        <div>Height: <span style={{ color: 'white', float: 'right' }}>1212 mm</span></div>
                        <div>Fuel Capacity: <span style={{ color: 'white', float: 'right' }}>100 Liters</span></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
