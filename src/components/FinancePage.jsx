import { motion } from 'framer-motion';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Calculator, Banknote, ShieldAlert, FileText, BarChart3 } from 'lucide-react';

export const FinancePage = () => {
    return (
        <div className="responsive-hero-padding" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '6rem 4rem 0 4rem', position: 'relative' }}>
            <NavBar />

            <div style={{ marginBottom: '4rem' }}>
                <h2 className="font-display responsive-title-h2" style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '0.5rem', textShadow: '0 0 30px rgba(255,215,0,0.1)' }}>FINANCIAL ARCHITECTURE</h2>
                <p className="responsive-title-h3" style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Acquiring an apex-tier vehicle requires apex-tier financial structuring. Our dedicated team of wealth managers and automotive financiers craft bespoke acquisition strategies tailored to your global asset portfolio.
                </p>
            </div>

            <div className="responsive-grid-2" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(400px, 1fr) minmax(400px, 1.2fr)',
                gap: '4rem',
                flex: 1
            }}>
                {/* EMI Calculator */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '2px solid var(--color-accent)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Calculator className="text-accent" size={28} />
                        <h3 className="font-display" style={{ fontSize: '1.5rem', margin: 0 }}>BESPOKE ACQUISITION ESTIMATOR</h3>
                    </div>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '1rem' }}>Model based on current Fed prime rates + 0.5% premium exotic markup.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>VEHICLE PRINCIPAL (USD)</label>
                                <span style={{ fontWeight: 'bold' }}>$3,825,000</span>
                            </div>
                            <input type="range" min="200000" max="5000000" step="50000" defaultValue="3825000" style={{ width: '100%', accentColor: 'var(--color-accent)' }} />
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>CAPITAL REDUCTION (DOWN PAYMENT)</label>
                                <span style={{ fontWeight: 'bold' }}>$825,000</span>
                            </div>
                            <input type="range" min="0" max="2500000" step="25000" defaultValue="825000" style={{ width: '100%', accentColor: 'var(--color-accent)' }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>AMORTIZATION TERM</label>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {[24, 36, 48, 60, 72].map(term => (
                                    <button key={term} style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        background: term === 60 ? 'var(--color-accent)' : 'transparent',
                                        color: term === 60 ? 'black' : 'white',
                                        border: `1px solid ${term === 60 ? 'transparent' : 'rgba(255,255,255,0.2)'}`,
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-main)'
                                    }}>{term} MO</button>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            marginTop: '1rem',
                            padding: '2rem',
                            background: 'rgba(255,215,0,0.05)',
                            border: '1px solid rgba(255,215,0,0.3)',
                            borderRadius: '4px',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>PROJECTED MONTHLY ALLOCATION</div>
                            <div className="font-display text-accent responsive-title-h1" style={{ fontSize: '3.5rem', fontWeight: 'bold', textShadow: '0 0 20px rgba(255,215,0,0.4)' }}>$58,450</div>
                        </div>

                        <button className="btn-futuristic" style={{ width: '100%', padding: '1.2rem', fontSize: '1rem' }}>SUBMIT TO UNDERWRITING</button>
                    </div>
                </motion.div>

                {/* Info Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Banknote className="text-accent" size={24} />
                            <h3 className="font-display" style={{ fontSize: '1.2rem', margin: 0 }}>ASSET TRADE-IN EQUITY</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                            Leverage our global syndicate API to instantly assess the wholesale value of your current exotic vehicle. We accept tier-1 assets (Ferrari, McLaren, Pagani) as direct equity toward new acquisitions.
                        </p>
                        <button style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '0.8rem 1.5rem', cursor: 'pointer', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <BarChart3 size={18} /> INITIATE APPRAISAL
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <ShieldAlert className="text-accent" size={24} />
                            <h3 className="font-display" style={{ fontSize: '1.2rem', margin: 0 }}>CAPITAL LEASE VS. OWNERSHIP</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                            Optimize your tax burden. For vehicles over $1.5M, a structured capital lease often provides superior liquidity compared to outright ownership. Consult our proprietary whitepaper.
                        </p>
                        <button style={{ background: 'transparent', color: 'var(--color-accent)', border: '1px solid var(--color-accent)', padding: '0.8rem 1.5rem', cursor: 'pointer', fontFamily: 'var(--font-display)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <FileText size={18} /> DOWNLOAD WHITEPAPER
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Extended Detail Section 1: Syndicate API */}
            <section className="responsive-section" style={{ marginTop: '6rem', padding: '4rem', background: 'rgba(255,215,0,0.02)', borderTop: '1px solid rgba(255,215,0,0.1)', borderBottom: '1px solid rgba(255,215,0,0.1)' }}>
                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>SYNDICATE LIQUIDATION //</h2>
                        <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>INSTANT EQUITY TRANSFER.</h3>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Our proprietary algorithm connects directly to 400+ ultra-high-net-worth dealer networks globally. When you propose a trade-in, the system runs a real-time auction in the background, securing the absolute maximum wholesale value for your asset within 14 seconds.
                        </p>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            No negotiations. No delays. The exact figure is immediately applied against the principal of your new Aura Shift acquisition.
                        </p>
                    </div>
                    <div className="responsive-section" style={{ padding: '3rem', background: 'rgba(5,5,5,0.8)', border: '1px solid rgba(255,255,255,0.1)', overflowX: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-text-dim)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>ASSET</span>
                            <span className="font-display">2023 FERRARI SF90 STRADALE</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                            <span style={{ color: 'var(--color-text-dim)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>NETWORK BIDS</span>
                            <span className="font-display">1,402 NODES SCANNED</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                            <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>FINAL APPRAISAL</span>
                            <span className="font-display text-accent" style={{ fontSize: '1.5rem' }}>$685,000</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended Detail Section 2: Wealth Management */}
            <section className="responsive-section" style={{ padding: '6rem 4rem', textAlign: 'center' }}>
                <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>WEALTH OPTIMIZATION STRATEGIES</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left' }}>
                        <h4 className="font-display text-accent" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>CLOSED-END LEASING</h4>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>Predictable depreciation curves for assets held 24-36 months. Maximize your liquid capital by paying only for the exact utilization of the vehicle's lifespan.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left' }}>
                        <h4 className="font-display text-accent" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>SECTION 179 DEPRECIATION</h4>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>For our Track-Focused units exceeding the 6,000 lbs GVWR limit, our CPAs provide direct guidance on claiming up to 100% bonus depreciation for qualified enterprise use.</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left' }}>
                        <h4 className="font-display text-accent" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>OFF-SHORE REGISTRATION</h4>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>Complete anonymity and optimized tax liabilities through our established legal partnerships in Montana, the Cayman Islands, and Monaco.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
