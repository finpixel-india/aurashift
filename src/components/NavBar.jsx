import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'INVENTORY', path: '/inventory' },
        { name: 'FINANCE', path: '/finance' },
        { name: 'HERITAGE', path: '/heritage' },
        { name: 'CONTACT', path: '/contact' }
    ];

    const DesktopNav = () => (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{
                position: 'absolute',
                top: '2rem',
                right: '4rem',
                display: 'flex',
                gap: '2.5rem',
                alignItems: 'center',
                zIndex: 50
            }}
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    style={({ isActive }) => ({
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        letterSpacing: '0.15em',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease, text-shadow 0.3s ease',
                        opacity: isActive ? 1 : 0.6,
                        textShadow: isActive ? '0 0 8px rgba(255,215,0,0.8)' : 'none',
                        borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                        paddingBottom: '4px'
                    })}
                >
                    <motion.span whileHover={{ opacity: 1, textShadow: '0 0 8px rgba(255,215,0,0.8)' }}>
                        {link.name}
                    </motion.span>
                </NavLink>
            ))}
            <NavLink to="/contact" style={{ display: 'inline-block', marginLeft: '1rem', textDecoration: 'none' }}>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,215,0,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'transparent',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-accent)',
                        padding: '0.5rem 1.5rem',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.8rem',
                        letterSpacing: '0.1em',
                        cursor: 'pointer',
                        borderRadius: '2px',
                    }}
                >
                    RESERVE
                </motion.button>
            </NavLink>
        </motion.nav>
    );

    const MobileNav = () => (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    zIndex: 60,
                    cursor: 'pointer',
                    color: 'var(--color-accent)'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(5,5,5,0.98)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2rem',
                            zIndex: 55
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={({ isActive }) => ({
                                    color: 'var(--color-text)',
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                    letterSpacing: '0.2em',
                                    opacity: isActive ? 1 : 0.6,
                                    textShadow: isActive ? '0 0 10px rgba(255,215,0,0.8)' : 'none',
                                    borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
                                    paddingBottom: '8px'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', marginTop: '2rem' }}>
                            <button
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-accent) 0%, #FFA500 100%)',
                                    color: 'black',
                                    border: 'none',
                                    padding: '1rem 3rem',
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                }}
                            >
                                RESERVE
                            </button>
                        </NavLink>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );

    return isMobile ? <MobileNav /> : <DesktopNav />;
};
