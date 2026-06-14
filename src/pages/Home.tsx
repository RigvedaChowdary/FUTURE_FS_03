import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight, Award, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import { movies, testimonials, faqs, locations } from '../data/movies';

function HeroSection() {
  const featured = movies.filter((m) => m.featured);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const movie = featured[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-all duration-1000"
          key={movie.id}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-fade-in" key={movie.id}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-champagne/20 backdrop-blur-sm border border-champagne/30 text-champagne text-xs font-medium rounded-full uppercase tracking-wider">
                Featured
              </span>
              <span className="text-white/50 text-xs">Now Showing</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-[1.1]">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-champagne fill-champagne" />
                <span className="text-white font-medium">{movie.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-white/60">
                <Clock size={14} />
                <span>{movie.runtime}</span>
              </div>
              <span className="text-white/40">|</span>
              <span className="text-white/60">{movie.genre.join(', ')}</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
              {movie.synopsis}
            </p>

            <div className="flex items-center gap-4">
              <Link
                to={`/booking?movie=${movie.id}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 hover:shadow-lg hover:shadow-champagne/30"
              >
                Book Tickets
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/movies"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View All Films
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={() => setCurrent((current - 1 + featured.length) % featured.length)}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={14} />
        </button>
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-champagne' : 'w-3 bg-white/30'
            }`}
          />
        ))}
        <button
          onClick={() => setCurrent((current + 1) % featured.length)}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}

function NowShowingSection() {
  const showing = movies.filter((m) => m.nowShowing).slice(0, 6);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-champagne text-xs font-medium uppercase tracking-widest">
              Now Showing
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2">
              Current Films
            </h2>
          </div>
          <Link
            to="/movies"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-champagne-dark transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showing.map((movie, i) => (
            <Link
              to={`/movies?id=${movie.id}`}
              key={movie.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={12} className="text-champagne fill-champagne" />
                  <span className="text-xs font-medium text-charcoal">{movie.rating}</span>
                  <span className="text-xs text-soft-grey">{movie.runtime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-champagne-dark transition-colors">
                  {movie.title}
                </h3>
                <p className="text-xs text-soft-grey mt-1">{movie.genre.join(', ')}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/movies"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-champagne-dark transition-colors"
        >
          View All Films <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

function MembershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-champagne text-xs font-medium uppercase tracking-widest">
              Premium Access
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2 mb-6">
              CineVerse Membership
            </h2>
            <p className="text-soft-grey leading-relaxed mb-8">
              Experience cinema at its finest. Our membership offers exclusive access to
              advance screenings, complimentary refreshments, and priority booking — all
              wrapped in the grandeur you deserve.
            </p>
            <div className="space-y-4">
              {[
                'Priority booking for all screenings',
                'Complimentary artisan refreshments',
                'Exclusive advance screening invitations',
                'Private screening room access',
                '10% discount on all food & beverage',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-champagne" />
                  </div>
                  <span className="text-sm text-charcoal/80">{benefit}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-charcoal/90 transition-all duration-300"
            >
              <Crown size={16} />
              Learn More
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7994290/pexels-photo-7994290.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium cinema experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <Crown size={18} className="text-champagne" />
                <span className="font-display font-semibold text-charcoal">Premium</span>
              </div>
              <p className="text-xs text-soft-grey">From &#8377;499/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-champagne fill-champagne" />
                ))}
              </div>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-soft-grey">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    { year: '2024', title: 'Best Multiplex Experience', org: 'South Indian Film Chamber' },
    { year: '2023', title: 'Excellence in Service', org: 'Telugu Cinema Awards' },
    { year: '2023', title: 'Best IMAX Theatre', org: 'Indian Cinema Technology Society' },
    { year: '2022', title: 'Outstanding Design', org: 'Architecture & Film Council India' },
  ];

  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Award size={32} className="text-champagne mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Recognition
          </h2>
          <p className="text-white/40 mt-4 text-sm">
            Honored for our commitment to the art of cinema.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award.year + award.title}
              className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-champagne/20 transition-colors duration-300"
            >
              <span className="text-champagne font-display text-2xl font-semibold">
                {award.year}
              </span>
              <h3 className="font-display text-lg font-medium mt-3 mb-1">{award.title}</h3>
              <p className="text-sm text-white/40">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            Our Locations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2">
            Visit Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                {loc.name}
              </h3>
              <div className="space-y-3 text-sm text-soft-grey">
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
                <p className="text-charcoal/60">{loc.screens} screens</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-champagne-dark hover:text-champagne transition-colors"
              >
                Get Directions <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-champagne text-xs font-medium uppercase tracking-widest">
          Newsletter
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2 mb-4">
          Stay in the Frame
        </h2>
        <p className="text-soft-grey text-sm mb-8">
          Receive curated film recommendations, exclusive event invitations, and behind-the-scenes stories.
        </p>

        {submitted ? (
          <div className="bg-champagne/10 rounded-2xl p-8 animate-fade-in">
            <p className="font-display text-lg font-semibold text-charcoal">Thank you for subscribing</p>
            <p className="text-sm text-soft-grey mt-2">You'll hear from us soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-3.5 rounded-full border border-charcoal/10 bg-ivory text-sm text-charcoal placeholder:text-soft-grey focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mt-2">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-display text-base font-medium text-charcoal pr-4">
                  {faq.question}
                </span>
                <ChevronRight
                  size={18}
                  className={`text-champagne shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-8 pb-6 text-sm text-soft-grey leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <NowShowingSection />
      <MembershipSection />
      <TestimonialsSection />
      <AwardsSection />
      <LocationsSection />
      <NewsletterSection />
      <FAQSection />
    </>
  );
}
