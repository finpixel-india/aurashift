import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Mail, Phone, MapPin, MessageSquare, Globe, Fingerprint, ChevronDown } from 'lucide-react';

const CustomSelect = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    return (
        <div style={{ position: 'relative', width: '100%', fontFamily: 'var(--font-main)' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {selected}
                <ChevronDown size={16} />
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

export const ContactPage = () => {
    return (
        <div className="responsive-hero-padding" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '6rem 4rem 0 4rem', position: 'relative' }}>
            <NavBar />

            <div style={{ marginBottom: '4rem' }}>
                <h2 className="font-display" style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '0.5rem', textShadow: '0 0 30px rgba(0,0,0,0.8)' }}>GLOBAL NODE ACCESS</h2>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Open a direct secure tunnel to our executive support network. Select your preferred channel of communication. All transmissions are quantum-encrypted.
                </p>
            </div>

            <div className="responsive-grid-2" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                flex: 1
            }}>
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderTop: '2px solid var(--color-accent)' }}
                >
                    <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Mail className="text-accent" /> TRANSMIT PAYLOAD
                    </h3>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>ROUTING DEPARTMENT</label>
                            <CustomSelect options={[
                                "VIP ACQUISITION & RESERVATIONS",
                                "OFF-MARKET SOURCING",
                                "GLOBAL LOGISTICS & TRANSPORT",
                                "NEURAL NET IT SUPPORT"
                            ]} />
                        </div>
                        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>IDENTIFIER</label>
                                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'var(--font-main)', outline: 'none' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>RETURN ADDRESS</label>
                                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'var(--font-main)', outline: 'none' }} />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>DECRYPTED MESSAGE</label>
                            <textarea placeholder="State your intent..." rows={5} style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontFamily: 'var(--font-main)', outline: 'none', resize: 'vertical' }}></textarea>
                        </div>
                        <button type="button" className="btn-futuristic" style={{ marginTop: '1rem', padding: '1.2rem' }}>INITIALIZE TRANSMISSION</button>
                    </form>
                </motion.div>

                {/* Right Side Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', borderTop: '2px solid rgba(255,255,255,0.1)' }}
                    >
                        <Fingerprint size={48} className="text-accent" />
                        <div>
                            <h3 className="font-display" style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>AI CONCIERGE: ONLINE</h3>
                            <p style={{ color: 'var(--color-text-dim)', margin: '0 0 1rem 0', lineHeight: '1.4' }}>Skip the wait. Our predictive intelligence core can instantly answer questions regarding off-market availability, spec sheets, and global freight routing.</p>
                            <button style={{ background: 'transparent', color: 'var(--color-accent)', border: '1px solid var(--color-accent)', padding: '0.8rem 1.5rem', cursor: 'pointer', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MessageSquare size={16} /> CONNECT NEURAL NODE
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-panel responsive-flex-row"
                        style={{ padding: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '2rem', flex: 1, borderTop: '2px solid rgba(255,255,255,0.1)' }}
                    >
                        <MapPin size={32} className="text-accent" style={{ flexShrink: 0 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                            <div>
                                <h3 className="font-display" style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>FLAGSHIP SHOWROOM</h3>
                                <p style={{ color: 'var(--color-text-dim)', margin: 0, lineHeight: '1.6' }}>
                                    Terminal 4, Sector 7G<br />
                                    Neo-Kyoto District, 604-8091<br />
                                    <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', display: 'inline-block', marginTop: '0.5rem' }}>By exclusive appointment only.</span>
                                </p>
                            </div>

                            {/* Stylized Map View */}
                            <div style={{
                                height: '200px',
                                background: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80') center/cover`,
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(255,215,0,0.2) 50%, rgba(0,0,0,0.8) 100%)' }} />
                                <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Globe className="text-accent" size={40} style={{ opacity: 0.8, filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.8))' }} />
                                    <span className="font-display text-accent" style={{ opacity: 0.8, letterSpacing: '0.2em', marginTop: '0.5rem', fontSize: '0.8rem', background: 'rgba(0,0,0,0.8)', padding: '0.2rem 0.5rem' }}>SYNCING SATELLITE...</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Extended FAQ Section */}
            <section style={{ marginTop: '6rem', marginBottom: '6rem' }}>
                <h3 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>FREQUENTLY ASKED QUERIES</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                    {[
                        { q: 'WHAT IS THE DELIVERY TIMELINE FOR A BESPOKE CONFIGURATION?', a: 'Due to the intricate detailing and allocation limits of our hypercar manufacturers, expect a 12 to 18-month lead time for fully bespoke commissions.' },
                        { q: 'DO YOU FACILITATE CROSS-CONTINENT FREIGHT?', a: 'Yes. Our logistics arm utilizes pressurized air-freight corridors specifically engineered to transport hypercars from Molsheim, Sant\'Agata, or Woking directly to your private hangar.' },
                        { q: 'WHAT IS REQUIRED TO SECURE AN ALLOCATION?', a: 'A non-refundable $250,000 security retainer is required to initiate the bespoke configurator session and lock in your factory block slot.' }
                    ].map((faq, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                            <h4 className="font-display text-accent" style={{ fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>{faq.q}</h4>
                            <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};
