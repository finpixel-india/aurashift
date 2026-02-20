import { motion } from 'framer-motion';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Search, Filter, ChevronRight } from 'lucide-react';

const vehicles = [
    { id: 1, name: 'BUGATTI CHIRON SUPER SPORT', type: 'HYPERCAR', price: '$3,825,000', status: 'IN STOCK', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80', bhp: '1,578', 0: '2.4s' },
    { id: 2, name: 'LAMBORGHINI AVENTADOR SVJ', type: 'SUPERCAR', price: '$515,000', status: 'RESERVED', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200&q=80', bhp: '759', 0: '2.8s' },
    { id: 3, name: 'MCLAREN P1', type: 'HYPERCAR', price: '$1,350,000', status: 'SOLD OUT', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80', bhp: '903', 0: '2.8s' },
    { id: 4, name: 'PORSCHE 911 GT3 RS', type: 'TRACK FOCUSED', price: '$245,000', status: 'IN STOCK', image: 'https://images.unsplash.com/photo-1503376710349-8c7cd9e6d03a?w=1200&q=80', bhp: '518', 0: '3.0s' },
    { id: 5, name: 'FERRARI LAFERRARI', type: 'HYPERCAR', price: '$3,500,000', status: 'BUILD TO ORDER', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80', bhp: '950', 0: '2.4s' },
    { id: 6, name: 'KOENIGSEGG REGERA', type: 'HYPERCAR', price: '$3,100,000', status: 'INCOMING', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80', bhp: '1,500', 0: '2.8s' },
];

const StatusTag = ({ status }) => {
    const getStyle = () => {
        switch (status) {
            case 'IN STOCK': return { color: '#00FF41', border: '1px solid #00FF41' };
            case 'RESERVED': return { color: '#FFD700', border: '1px solid #FFD700' };
            case 'SOLD OUT': return { color: '#FF3333', border: '1px solid #FF3333' };
            case 'INCOMING': return { color: '#00D1FF', border: '1px solid #00D1FF' };
            default: return { color: 'white', border: '1px solid rgba(255,255,255,0.3)' };
        }
    };

    return (
        <span style={{
            ...getStyle(),
            padding: '0.2rem 0.6rem',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.1em',
            background: 'rgba(0,0,0,0.5)'
        }}>
            {status}
        </span>
    );
};

export const InventoryPage = () => {
    return (
        <div className="responsive-hero-padding" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '6rem 4rem 0 4rem', position: 'relative' }}>
            <NavBar />

            <div className="responsive-flex-stack" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                <div>
                    <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>INVENTORY</h2>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>Global Access to the Aura Shift Fleet.</p>
                </div>

                <div className="responsive-flex-stack" style={{ display: 'flex', gap: '1rem' }}>
                    <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', width: '300px' }}>
                        <Search size={18} color="var(--color-text-dim)" />
                        <input
                            type="text"
                            placeholder="Search models..."
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                outline: 'none',
                                marginLeft: '0.5rem',
                                fontFamily: 'var(--font-main)',
                                width: '100%'
                            }}
                        />
                    </div>
                    <button className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', cursor: 'pointer' }}>
                        <Filter size={18} /> FILTERS
                    </button>
                </div>
            </div>

            {/* Database Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem',
                flex: 1
            }}>
                {vehicles.map((v, i) => (
                    <motion.div
                        key={v.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,215,0,0.1)' }}
                    >
                        {/* High-Res Image Header */}
                        <div style={{
                            height: '240px',
                            width: '100%',
                            background: `url(${v.image}) center/cover no-repeat`,
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)' }} />
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                                <StatusTag status={v.status} />
                            </div>
                        </div>

                        {/* Details */}
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 10 }}>
                            <div style={{ color: 'var(--color-accent)', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{v.type}</div>
                            <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{v.name}</h3>

                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>POWER</div>
                                    <div className="font-display" style={{ fontSize: '1.1rem' }}>{v.bhp} BHP</div>
                                </div>
                                <div>
                                    <div style={{ color: 'var(--color-text-dim)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>0-60 MPH</div>
                                    <div className="font-display" style={{ fontSize: '1.1rem' }}>{v[0]}</div>
                                </div>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{v.price}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                                    VIEW DETALS <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </div>
    );
};
