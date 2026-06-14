import { Link } from 'react-router-dom';
import { Film, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">C</span>
              </div>
              <span className="font-display text-xl font-semibold">CineVerse Multiplex</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Where cinema meets grandeur. The ultimate destination for an unforgettable movie experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-6 text-champagne">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/movies', label: 'Movies' },
                { to: '/booking', label: 'Book Tickets' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-white/50 hover:text-champagne transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-6 text-champagne">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-champagne mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Banjara Hills, Road No. 2, Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-champagne shrink-0" />
                <span className="text-sm text-white/50">+91 40 2355 0140</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-champagne shrink-0" />
                <span className="text-sm text-white/50">hello@cineversemultiplex.in</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest mb-6 text-champagne">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-champagne/20 transition-colors">
                <Instagram size={18} className="text-white/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-champagne/20 transition-colors">
                <Twitter size={18} className="text-white/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-champagne/20 transition-colors">
                <Film size={18} className="text-white/60" />
              </a>
            </div>
            <p className="text-sm text-white/30 mt-6">
              Stay connected for exclusive screenings and events.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} CineVerse Multiplex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
