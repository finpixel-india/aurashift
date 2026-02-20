import { motion } from 'framer-motion';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Flag, Target, Users, Hexagon } from 'lucide-react';

export const HeritagePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '0', position: 'relative' }}>
            <NavBar />

            {/* Massive Hero Image */}
            <div style={{
                height: '60vh',
                width: '100%',
                background: `url('https://images.unsplash.com/photo-1503376710349-8c7cd9e6d03a?w=1600&q=80') center/cover no-repeat`,
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '4rem'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%, rgba(5,5,5,1) 100%)' }} />

                <div style={{ zIndex: 10 }}>
                    <h2 className="font-display" style={{ fontSize: '4.5rem', fontWeight: '700', marginBottom: '0.5rem', textShadow: '0 0 40px rgba(0,0,0,0.8)' }}>OUR HERITAGE</h2>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.6', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                        Forged in the fires of 2010. Aura Shift stands at the absolute apex of hyper-automotive retail and kinetic architecture, dealing strictly in vehicles pushing past 1,000 BHP.
                    </p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                padding: '4rem',
                flex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderLeft: '2px solid var(--color-accent)' }}
                >
                    <Flag className="text-accent" size={32} style={{ marginBottom: '1.5rem' }} />
                    <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>THE FOUNDING (2010)</h3>
                    <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        Originating as a shadow-broker network for off-market Bugattis and Koenigseggs, the founders of Aura Shift quickly realized the market needed a centralized node. By 2012, we opened the "Glass Vault" in Geneva.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderLeft: '2px solid var(--color-accent)' }}
                >
                    <Target className="text-accent" size={32} style={{ marginBottom: '1.5rem' }} />
                    <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>MISSION PROTOCOL</h3>
                    <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        We exist to connect visionaries with the pinnacle of mechanical achievement. No compromises. No mass production. If a vehicle doesn't rewrite the laws of physics, it does not cross our threshold.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderLeft: '2px solid var(--color-accent)' }}
                >
                    <Users className="text-accent" size={32} style={{ marginBottom: '1.5rem' }} />
                    <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>THE ARCHITECTS</h3>
                    <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        Our bespoke advisory board includes former F1 telemetry engineers and hyper-car factory test drivers. When we procure an asset, it is vetted by the very people who wrote its DNA.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderLeft: '2px solid var(--color-accent)', gridColumn: '1 / -1', background: 'rgba(255,215,0,0.02)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Hexagon className="text-accent" size={48} />
                        <div>
                            <h3 className="font-display" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>THE NEURAL NETWORK (2026)</h3>
                            <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6', maxWidth: '1000px' }}>
                                Recognizing the dawn of AI-integrated chassis controls, Aura Shift rebranded in 2026 to focus on "Synthetic Dynamics." We are now the exclusive global distributor for the P-01 Neural hyper-EV, blending our rich carbon-combustion heritage with absolute technological terror.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Extended Detail Section 1: The Glass Vault */}
            <section style={{ padding: '6rem 4rem', background: 'radial-gradient(circle at center, rgba(255,215,0,0.03) 0%, transparent 70%)' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>THE GLASS VAULT ARCHIVES //</h2>
                    <h3 className="font-display" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '3rem' }}>PRESERVING THE ANALOG ERA.</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', textAlign: 'left' }}>
                        <div>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Below Sector 7G lies a climate-controlled, subterranean gallery where the internal combustion engine is treated as a historic artifact. The Glass Vault contains over 40 zero-mile supercars from the 1990s and 2000s.
                            </p>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                                From the McLaren F1 to the Ferrari F50, these machines are kept in absolute stasis. Access to the Vault is granted strictly to Syndicate-tier investors.
                            </p>
                        </div>
                        <div style={{
                            height: '300px',
                            background: `url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200') center/cover`,
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
                            <div className="font-display text-accent" style={{ position: 'absolute', bottom: '1rem', right: '1rem', letterSpacing: '0.1em' }}>VAULT FEED: SECURE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Detail Section 2: Vision 2030 */}
            <section style={{ padding: '6rem 4rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>PROJECT NEO-HORIZON 2030</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', marginBottom: '3rem' }}>
                    Aura Shift is currently constructing the world's first orbital vehicle proving ground. In partnership with private aerospace entities, Neo-Horizon will allow our clients to experience true 0-G aerodynamics testing by 2030.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem' }}>
                    <div>
                        <div className="font-display text-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>$4.2B</div>
                        <div style={{ color: 'var(--color-text-dim)', letterSpacing: '0.1em' }}>CAPITAL RAISED</div>
                    </div>
                    <div>
                        <div className="font-display text-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>2029</div>
                        <div style={{ color: 'var(--color-text-dim)', letterSpacing: '0.1em' }}>PROJECTED LAUNCH</div>
                    </div>
                    <div>
                        <div className="font-display text-accent" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>8</div>
                        <div style={{ color: 'var(--color-text-dim)', letterSpacing: '0.1em' }}>GLOBAL CENTRIFUGES</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
