import { useState } from 'react';
import { Shield, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VipSourcingConcierge = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <div className="responsive-section" style={{
            padding: '4rem',
            background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(0,0,0,0.98) 100%)',
            border: '1px solid rgba(255,215,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle background element */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={16} /> SYNDICATE ACQUISITION //
                    </h2>
                    <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        VIP SOURCING CONCIERGE.
                    </h3>
                    <p style={{ color: 'var(--color-text-dim)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        If the asset you require is not currently in our public or off-market inventory, our acquisition algorithms will locate it. We deploy resources globally to secure allocations that do not officially exist.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-dim)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
                            Guaranteed Anonymity Protocol
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
                            Direct Factory Negotiation (Maranello, Molsheim, Sant'Agata)
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
                            Encrypted Logistics & Airfreight Handover
                        </li>
                    </ul>
                </div>

                <div style={{ position: 'relative', minHeight: '350px' }}>
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    background: 'rgba(5,5,5,0.8)',
                                    border: '1px solid rgba(255,215,0,0.2)',
                                    padding: '2rem'
                                }}
                            >
                                <CheckCircle2 size={48} color="var(--color-accent)" style={{ marginBottom: '1.5rem' }} />
                                <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>DIRECTIVE LOGGED</h4>
                                <p style={{ color: 'var(--color-text-dim)' }}>An operative will establish encrypted contact within 2 hours.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            >
                                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="CLIENT DESIGNATION (NAME)"
                                        required
                                        style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'var(--font-main)' }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="SECURE CONTACT (EMAIL/SECCOM)"
                                        required
                                        style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'var(--font-main)' }}
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="TARGET ASSET SPECIFICATION (E.G. CHIRON PUR SPORT, EXPOSED CARBON)"
                                    required
                                    style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'var(--font-main)' }}
                                />

                                <textarea
                                    placeholder="ADDITIONAL DIRECTIVES / DEADLINE CONSTRAINTS"
                                    rows={4}
                                    style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'var(--font-main)', resize: 'none' }}
                                />

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="btn-futuristic"
                                    style={{
                                        padding: '1.2rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        opacity: status === 'submitting' ? 0.7 : 1,
                                        cursor: status === 'submitting' ? 'wait' : 'pointer'
                                    }}
                                >
                                    {status === 'submitting' ? 'TRANSMITTING...' : (
                                        <>INITIATE SOURCING PROTOCOL <Send size={18} /></>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
