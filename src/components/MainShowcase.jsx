import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Zap, Cpu, ArrowRight, ChevronDown } from 'lucide-react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { DigitalMatchmaker } from './DigitalMatchmaker';
import { hypercarManifest } from '../data/vehicleData';
import { LiveMarketFeed } from './LiveMarketFeed';
import { AcousticShowcase } from './AcousticShowcase';
import { VipSourcingConcierge } from './VipSourcingConcierge';
import { OwnershipEconomics } from './OwnershipEconomics';
import { ScrollCanvasHero } from './ScrollCanvasHero';

const CustomSelect = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    return (
        <div style={{ position: 'relative', flex: 1, fontFamily: 'var(--font-main)' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '1rem',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {selected}
                <ChevronDown size={14} />
            </div>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(10,10,10,0.95)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderTop: 'none',
                    zIndex: 20,
                    maxHeight: '200px',
                    overflowY: 'auto'
                }}>
                    {options.map(opt => (
                        <div
                            key={opt}
                            onClick={() => { setSelected(opt); setIsOpen(false); }}
                            style={{ padding: '1rem', color: 'white', cursor: 'pointer', transition: 'background 0.2s', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,215,0,0.2)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ValueProp = ({ title, desc }) => (
    <div style={{ padding: '2rem', borderLeft: '2px solid var(--color-accent)', background: 'linear-gradient(90deg, rgba(255,215,0,0.05) 0%, transparent 100%)' }}>
        <h4 className="font-display" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{title}</h4>
        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

export const MainShowcase = () => {
    return (
        <div style={{ paddingBottom: '0rem', position: 'relative' }}>

            {/* Background Subtle Glows */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '50vw',
                height: '50vh',
                background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '-5%',
                width: '60vw',
                height: '60vh',
                background: 'radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <NavBar />

            {/* Interactive Scroll Canvas Hero */}
            <ScrollCanvasHero />

            {/* The Digital Matchmaker Engine */}
            <section className="responsive-section" style={{ padding: '0 4rem 4rem 4rem' }}>
                <DigitalMatchmaker />
            </section>

            {/* Quick Search & Featured Feed */}
            <section className="responsive-hero-padding" style={{ padding: '2rem 4rem 6rem 4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel responsive-flex-stack"
                    style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '4rem', background: 'rgba(5,5,5,0.8)' }}
                >
                    <span className="font-display" style={{ color: 'var(--color-accent)', minWidth: '150px' }}>SECURE A VEHICLE //</span>
                    <CustomSelect options={["Bugatti", "Lamborghini", "Ferrari", "Koenigsegg"]} />
                    <CustomSelect options={["2020 - Present", "2010 - 2019"]} />
                    <CustomSelect options={["Under $1,000,000", "$1M - $3M", "Over $3M"]} />
                    <NavLink to="/inventory" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-futuristic" style={{ padding: '1rem 3rem' }}>LOCATE</motion.button>
                    </NavLink>
                </motion.div>

                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h3 className="font-display responsive-title-h3" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '40px', height: '2px', background: 'var(--color-accent)' }}></span>
                            BRAND PHILOSOPHY
                        </h3>
                        <ValueProp title="ZERO-LATENCY NEURAL MESH" desc="Our patented architecture allows the vehicle chassis to proactively respond to driver intention before physical input is registered." />
                        <ValueProp title="OBSIDIAN SHIELD TECHNOLOGY" desc="Advanced kinetic dampening fields wrapped in carbon-nanotube lattices. Safety isn't an option; it's a foundational absolute." />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h3 className="font-display responsive-title-h3" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '40px', height: '2px', background: 'var(--color-accent)' }}></span>
                            VERIFIED LOGS
                        </h3>
                        <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-text-dim)', marginBottom: '1rem', lineHeight: '1.6' }}>"The P-01 doesn't drive. It teleports you between coordinates while feeding you telemetry data directly into your optic nerve. Truly terrifying perfection."</p>
                            <span className="font-display text-accent" style={{ fontSize: '0.8rem' }}>// CLIENT ID: 899-XRA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Detail Section 0: Hypercar Manifest (No Images) */}
            <section className="responsive-section" style={{ padding: '6rem 4rem', background: 'rgba(5,5,5,0.95)', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>ACTIVE DATABASE //</h2>
                    <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>GLOBAL INVENTORY SPECIFICATIONS</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {hypercarManifest.map((car, i) => (
                        <div key={i} className="responsive-grid-2" style={{
                            padding: '2rem',
                            borderLeft: '2px solid var(--color-accent)',
                            background: 'linear-gradient(90deg, rgba(255,215,0,0.05) 0%, transparent 100%)',
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: '2rem',
                            alignItems: 'center'
                        }}>
                            <div>
                                <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{car.name}</h4>
                                <div className="text-accent font-display" style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>{car.topSpeed}</div>
                            </div>
                            <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                                <div><strong style={{ color: 'white' }}>Powertrain:</strong> {car.engine}</div>
                                <div><strong style={{ color: 'white' }}>Output:</strong> {car.power}</div>
                                <div><strong style={{ color: 'white' }}>0-100 km/h:</strong> {car.acceleration}</div>
                                <div><strong style={{ color: 'white' }}>Weight:</strong> {car.weight}</div>
                                <div style={{ gridColumn: '1 / -1' }}><strong style={{ color: 'white' }}>Drivetrain:</strong> {car.drivetrain}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Extended Detail Section 1: Exclusivity */}
            <section className="responsive-section" style={{ padding: '6rem 4rem', position: 'relative', overflow: 'hidden' }}>
                {/* Techy gamified animated background */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-20%',
                        width: '800px',
                        height: '800px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
                        zIndex: 0,
                        pointerEvents: 'none',
                        filter: 'blur(40px)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'linear-gradient(rgba(255,215,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.02) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                    <div style={{
                        height: '500px',
                        background: `url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80') center/cover`,
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)' }} />
                    </div>
                    <div>
                        <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>UNRIVALED PROVENANCE //</h2>
                        <h3 className="font-display responsive-title-h2" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem', lineHeight: 1.1 }}>ACCESS TO THE UNAVAILABLE.</h3>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                            We do not deal in volume. Aura Shift procures the strictly limited, the highly sought-after, and the frankly impossible. From bespoke 1-of-1 Pagani Zondas to the last production allocations of the W16 Bugatti Mistral.
                        </p>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                            Our syndicate algorithms scour the global off-market to secure assets before they ever reach public visibility.
                        </p>
                        <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none' }}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-futuristic" style={{ padding: '1rem 3rem' }}>JOIN THE SYNDICATE</motion.button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Extended Detail Section 2: Concierge */}
            <section className="responsive-section" style={{ padding: '6rem 4rem' }}>
                <VipSourcingConcierge />
            </section>

            {/* Extended Detail Section 2.5: Ownership Economics Graph */}
            <OwnershipEconomics />

            {/* Extended Detail Section 3: Bespoke Engineering Ticker */}
            <section style={{ padding: '4rem 0', background: 'rgba(5,5,5,0.8)', borderTop: '1px solid rgba(255,215,0,0.1)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    style={{ display: 'inline-flex', gap: '3rem', cursor: 'default' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', gap: '3rem' }}>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.4)' }}>// CARBON TITANIUM CHASSIS</span>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>+ ACTIVE AERO SURFACES</span>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.4)' }}>// COLD FUSION FORGING</span>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>+ 10-PISTON CALIPERS</span>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.4)' }}>// MAGNESIUM SUPERALLOYS</span>
                            <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>+ KINETIC RECOVERY SYS</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Extended Detail Section 3.5: Acoustic Performance Showcase */}
            <section className="responsive-section" style={{ padding: '6rem 4rem', background: 'rgba(5,5,5,0.95)' }}>
                <AcousticShowcase />
            </section>

            {/* Extended Detail Section 4: Performance Guarantee */}
            <section className="responsive-section" style={{ padding: '8rem 4rem', textAlign: 'center' }}>
                <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>ABSOLUTE CERTIFICATION //</h2>
                <h3 className="font-display responsive-title-h2" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem' }}>THE 100-POINT TELEMETRY TEST.</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', marginBottom: '4rem' }}>
                    Every unit acquired by Aura Shift undergoes a brutal localized validation. Engine mapping, structural acoustics, downforce parity, and transmission wear are continuously logged across 100 metric nodes before given the Syndicate Seal.
                </p>
                <div className="responsive-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {[
                        { val: "100%", label: "W16 STRUCTURAL INTEGRITY" },
                        { val: "0.2µ", label: "CARBON WEAVE TOLERANCE" },
                        { val: "12Hz", label: "ACOUSTIC RESONANCE LIMIT" },
                        { val: "99.9%", label: "THERMAL BARRIER EFFICIENCY" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div className="font-display text-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.val}</div>
                            <div style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};
