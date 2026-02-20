import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const DigitalMatchmaker = () => {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState({ lifestyle: '', performance: '', brand: '' });

    const questions = [
        {
            id: 'lifestyle',
            title: 'I. OPERATIONAL DIRECTIVE',
            desc: 'Define the primary asset utilization pattern.',
            options: [
                { id: 'daily', label: 'Daily Kinetic Integration', sub: 'Usable power, reliable, relatively compliant' },
                { id: 'weekend', label: 'Weekend Excursion', sub: 'High theater, visceral, specialized' },
                { id: 'track', label: 'Track Weapons Array', sub: 'Maximum downforce, stripped chassis, lap times' }
            ]
        },
        {
            id: 'performance',
            title: 'II. OUTPUT THRESHOLD',
            desc: 'Identify the required thrust delivery method.',
            options: [
                { id: 'na', label: 'Naturally Aspirated', sub: 'Linear power, sensory overload, soaring redline' },
                { id: 'fi', label: 'Forced Induction', sub: 'Massive torque wave, violent mid-range' },
                { id: 'hybrid', label: 'Hybrid / Electric', sub: 'Instantaneous torque vectoring, brutal launch' }
            ]
        },
        {
            id: 'brand',
            title: 'III. AESTHETIC DOCTRINE',
            desc: 'Select the design and engineering philosophy.',
            options: [
                { id: 'italian', label: 'Italian Emotionalism', sub: 'Ferrari, Lamborghini, Pagani' },
                { id: 'german', label: 'German Precision', sub: 'Porsche, Mercedes-AMG' },
                { id: 'british', label: 'British & Boutique', sub: 'McLaren, Aston Martin, Koenigsegg' }
            ]
        }
    ];

    const handleSelect = (optionId) => {
        const currentQ = questions[step];
        const newSelections = { ...selections, [currentQ.id]: optionId };
        setSelections(newSelections);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setStep(3); // Result step
        }
    };

    const getMatches = () => {
        // Simple logic for mockup: just returning some hardcoded results based on generic logic
        if (selections.lifestyle === 'track') return ['Porsche 911 GT3 RS', 'McLaren Senna', 'Aston Martin Valkyrie'];
        if (selections.brand === 'italian') return ['Ferrari SF90 Stradale', 'Lamborghini Revuelto', 'Pagani Utopia'];
        if (selections.performance === 'hybrid') return ['Rimac Nevera', 'Porsche 918 Spyder', 'Mercedes-AMG ONE'];
        return ['Bugatti Chiron Super Sport', 'Koenigsegg Jesko', 'McLaren Speedtail']; // Default fallback
    };

    return (
        <div className="responsive-section" style={{ padding: '4rem', background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,215,0,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }} />

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>ALGORITHMIC SOURCING //</h2>
                <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>DIGITAL MATCHMAKER</h3>
                <p style={{ color: 'var(--color-text-dim)', marginTop: '1rem' }}>Process lifestyle vectors to isolate the optimal hyper-asset.</p>
            </div>

            <div style={{ minHeight: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                    {step < 3 ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            style={{ width: '100%', maxWidth: '800px' }}
                        >
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <h4 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{questions[step].title}</h4>
                                <p style={{ color: 'var(--color-text-dim)' }}>{questions[step].desc}</p>
                            </div>

                            <div className="responsive-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {questions[step].options.map(opt => (
                                    <div
                                        key={opt.id}
                                        onClick={() => handleSelect(opt.id)}
                                        style={{
                                            padding: '2rem',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            background: 'rgba(255,255,255,0.02)',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--color-accent)';
                                            e.currentTarget.style.background = 'rgba(255,215,0,0.05)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                        }}
                                    >
                                        <div className="font-display" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{opt.label}</div>
                                        <div style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: '1.4' }}>{opt.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}
                        >
                            <CheckCircle2 size={48} color="var(--color-accent)" style={{ margin: '0 auto 2rem auto' }} />
                            <h4 className="font-display" style={{ fontSize: '2rem', marginBottom: '2rem' }}>OPTIMAL ASSETS ISOLATED</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {getMatches().map((match, i) => (
                                    <div key={i} style={{ padding: '1.5rem', background: 'linear-gradient(90deg, rgba(255,215,0,0.1) 0%, transparent 100%)', borderLeft: '2px solid var(--color-accent)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="font-display" style={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>{match}</span>
                                        <button style={{ background: 'transparent', color: 'var(--color-accent)', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--font-display)' }}>
                                            VIEW TELEMETRY <ArrowRight size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => setStep(0)} style={{ marginTop: '3rem', background: 'transparent', color: 'var(--color-text-dim)', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                                RECALIBRATE PARAMETERS
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
