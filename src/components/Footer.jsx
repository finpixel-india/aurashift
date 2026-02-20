import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="responsive-section responsive-flex-stack" style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '3rem 4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#050505',
            zIndex: 10,
            position: 'relative'
        }}>
            <div className="responsive-flex-stack" style={{ display: 'flex', gap: '2rem' }}>
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>SHOWROOM</NavLink>
                <NavLink to="/inventory" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>INVENTORY</NavLink>
                <NavLink to="/finance" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>FINANCE</NavLink>
                <NavLink to="/heritage" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>HERITAGE</NavLink>
                <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color: 'var(--color-text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>CONTACT</NavLink>
            </div>
            <div>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', letterSpacing: '0.1em', margin: 0, textAlign: 'center' }}>
                    © 2026 AURA SHIFT AUTOMOTIVE. ALL SYSTEMS NOMINAL.
                </p>
            </div>
        </footer>
    );
};
