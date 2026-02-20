import { useState } from 'react';
import { TrendingUp, Activity, DollarSign } from 'lucide-react';

const DATA_SETS = {
    'Bugatti Chiron': { baseValue: 3000000, currentAvg: 3800000, trend: '+26.6%', points: [100, 105, 112, 120, 128, 126] },
    'Porsche Carrera GT': { baseValue: 4400000, currentAvg: 1800000, trend: '+309%', points: [30, 45, 70, 110, 140, 150] }, // Adjusted for visual scale relative to previous massive appreciation
    'McLaren P1': { baseValue: 1150000, currentAvg: 2200000, trend: '+91.3%', points: [80, 95, 100, 115, 125, 130] },
    'Pagani Huayra': { baseValue: 1400000, currentAvg: 3200000, trend: '+128%', points: [60, 75, 90, 110, 130, 150] }
};

export const OwnershipEconomics = () => {
    const [selectedAsset, setSelectedAsset] = useState('Porsche Carrera GT');
    const data = DATA_SETS[selectedAsset];

    // Simple SVG Line Graph Generator
    const generatePath = (points) => {
        const width = 800;
        const height = 200;
        const max = Math.max(...points) * 1.1; // Add 10% padding top
        const min = Math.min(...points) * 0.9;
        const range = max - min;

        const stepX = width / (points.length - 1);

        return points.map((p, i) => {
            const x = i * stepX;
            const y = height - ((p - min) / range) * height;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="responsive-section" style={{ padding: '6rem 4rem', background: 'rgba(5,5,5,0.95)', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="font-display text-accent" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <TrendingUp size={16} /> FINANCIAL TELEMETRY //
                </h2>
                <h3 className="font-display responsive-title-h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>OWNERSHIP ECONOMICS</h3>
                <p style={{ color: 'var(--color-text-dim)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
                    Hypercars are kinetic assets. Track historical appreciation trajectories and projected market scarcity variables.
                </p>
            </div>

            <div className="responsive-grid-2" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="text-accent font-display" style={{ fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>SELECT ASSET PROFILE</div>
                    {Object.keys(DATA_SETS).map(asset => (
                        <button
                            key={asset}
                            onClick={() => setSelectedAsset(asset)}
                            style={{
                                padding: '1rem',
                                background: selectedAsset === asset ? 'rgba(255,215,0,0.05)' : 'transparent',
                                border: '1px solid',
                                borderColor: selectedAsset === asset ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: selectedAsset === asset ? 'var(--color-accent)' : 'white',
                                textAlign: 'left',
                                fontFamily: 'var(--font-display)',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {asset}
                        </button>
                    ))}
                </div>

                <div className="glass-panel responsive-section" style={{ padding: '3rem', position: 'relative' }}>
                    <div className="responsive-flex-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
                        <div>
                            <div style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>CURRENT MARKET AVERAGE</div>
                            <div className="font-display" style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <DollarSign size={28} className="text-accent" />
                                {formatCurrency(data.currentAvg).replace('$', '')}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>MSRP / HISTORICAL BASE</div>
                            <div className="font-display" style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
                                {formatCurrency(data.baseValue)}
                            </div>
                            <div className="text-accent font-display" style={{ marginTop: '0.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                <Activity size={16} /> {data.trend}
                            </div>
                        </div>
                    </div>

                    {/* SVG Chart Placeholder */}
                    <div style={{ width: '100%', height: '250px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                        {/* Grid lines */}
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} style={{ position: 'absolute', left: 0, right: 0, bottom: `${(i / 3) * 100}%`, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                        ))}

                        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                            {/* Gradient Fill */}
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Area under line */}
                            <path
                                d={`${generatePath(data.points)} L 800 200 L 0 200 Z`}
                                fill="url(#chartGradient)"
                            />

                            {/* The line itself */}
                            <path
                                d={generatePath(data.points)}
                                fill="none"
                                stroke="var(--color-accent)"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />

                            {/* Data points */}
                            {data.points.map((p, i, arr) => {
                                const max = Math.max(...arr) * 1.1;
                                const min = Math.min(...arr) * 0.9;
                                const x = i * (800 / (arr.length - 1));
                                const y = 200 - ((p - min) / (max - min)) * 200;
                                return (
                                    <circle key={i} cx={x} cy={y} r="5" fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth="2" />
                                );
                            })}
                        </svg>

                        {/* X-Axis labels (simulated years) */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '-30px', left: 0, right: 0, color: 'var(--color-text-dim)', fontSize: '0.8rem', fontFamily: 'var(--font-display)' }}>
                            <span>YEAR 1</span>
                            <span>YEAR 2</span>
                            <span>YEAR 3</span>
                            <span>YEAR 4</span>
                            <span>YEAR 5</span>
                            <span>CURRENT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
