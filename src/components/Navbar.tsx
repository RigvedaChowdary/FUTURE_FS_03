import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/movies', label: 'Movies' },
  { to: '/booking', label: 'Booking' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-display font-bold text-sm">C</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-charcoal">
              CineVerse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-charcoal text-white'
                      : 'text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            to="/booking"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 hover:shadow-lg hover:shadow-champagne/20"
          >
            Book Now
          </Link>

          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-charcoal/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-champagne/10 text-champagne-dark'
                    : 'text-charcoal/70 hover:bg-charcoal/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/booking"
            className="block mt-2 px-4 py-3 bg-champagne text-white text-sm font-medium rounded-xl text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
