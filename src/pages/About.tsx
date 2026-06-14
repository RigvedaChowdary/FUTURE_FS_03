import { Link } from 'react-router-dom';
import { Award, Film, Users, Star, Crown, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Film, value: '19', label: 'Screens' },
  { icon: Users, value: '1L+', label: 'Monthly Guests' },
  { icon: Award, value: '8', label: 'Awards' },
  { icon: Star, value: '4.8', label: 'Average Rating' },
];

const values = [
  {
    title: 'Curated Selection',
    description: 'Every film is chosen with intention — from the biggest Telugu blockbusters to independent gems, we present cinema that matters.',
  },
  {
    title: 'Exceptional Comfort',
    description: 'Premium recliner seating, Dolby Atmos sound calibration, and crystal-clear laser projection create an immersive sanctuary.',
  },
  {
    title: 'Personal Service',
    description: 'From booking to credits, our concierge team ensures every moment of your visit is effortless and elegant.',
  },
  {
    title: 'Community',
    description: 'We cultivate a community of film lovers through events, fan screenings, and shared appreciation for the art of cinema.',
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-champagne text-xs font-medium uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mt-2 mb-6">
              Where Cinema
              <br />
              Becomes Grand
            </h1>
            <p className="text-soft-grey leading-relaxed mb-4">
              CineVerse Multiplex was born from a simple belief: the way we watch films should be as
              extraordinary as the films themselves. Founded in 2020 in the heart of Hyderabad, we set out
              to reimagine the multiplex experience — blending world-class technology with the warmth and
              grandeur that Telugu cinema deserves.
            </p>
            <p className="text-soft-grey leading-relaxed">
              Every detail of our spaces — from the hand-selected materials to the acoustically
              perfected screening rooms — is designed to honour the filmmaker's vision and the
              audience's experience.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7994290/pexels-photo-7994290.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CineVerse Multiplex interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-charcoal text-white p-6 rounded-2xl max-w-[200px]">
              <span className="font-display text-3xl font-semibold text-champagne">2020</span>
              <p className="text-xs text-white/50 mt-1">Established in Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={24} className="text-champagne mx-auto mb-3" />
                <span className="font-display text-3xl md:text-4xl font-semibold">{stat.value}</span>
                <p className="text-sm text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-champagne text-xs font-medium uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-soft-grey leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Crown size={32} className="text-champagne mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            Join the Experience
          </h2>
          <p className="text-soft-grey mb-8 max-w-md mx-auto">
            Become a CineVerse member and unlock a world of exclusive screenings, priority booking,
            and curated events.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 hover:shadow-lg hover:shadow-champagne/20"
          >
            Book Your First Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
