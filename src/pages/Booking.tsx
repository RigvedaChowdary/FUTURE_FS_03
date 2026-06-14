import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, Clock, ArrowRight, ArrowLeft, Check, Ticket } from 'lucide-react';
import { movies, showtimes, pricing } from '../data/movies';

type Step = 'movie' | 'date' | 'seats' | 'confirm';

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const SEATS_PER_ROW = 10;

function generateSeats() {
  const seats: { id: string; available: boolean }[] = [];
  for (const row of ROWS) {
    for (let n = 1; n <= SEATS_PER_ROW; n++) {
      const isUnavailable = Math.random() < 0.25;
      seats.push({ id: `${row}${n}`, available: !isUnavailable });
    }
  }
  return seats;
}

const allSeats = generateSeats();

function getNext7Days() {
  const days: { date: Date; label: string; day: string }[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      date: d,
      label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
    });
  }
  return days;
}

const dates = getNext7Days();

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedMovie = searchParams.get('movie')
    ? Number(searchParams.get('movie'))
    : null;

  const [step, setStep] = useState<Step>(preselectedMovie ? 'date' : 'movie');
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(preselectedMovie);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>('Standard');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const movie = useMemo(
    () => movies.find((m) => m.id === selectedMovieId),
    [selectedMovieId]
  );

  const nowShowing = movies.filter((m) => m.nowShowing);

  const seatPrice = selectedFormat === 'IMAX' ? pricing.imax : pricing.standard;
  const total = selectedSeats.length * seatPrice;

  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else if (selectedSeats.length < 8) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed && movie) {
    return (
      <div className="pt-28 pb-24 min-h-screen">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-6 animate-fade-in">
            <Check size={28} className="text-champagne" />
          </div>
          <h1 className="font-display text-4xl font-semibold text-charcoal mb-4 animate-fade-in-up">
            Booking Confirmed
          </h1>
          <p className="text-soft-grey text-sm mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Your tickets have been reserved. Enjoy the show.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Ticket size={20} className="text-champagne" />
              <span className="font-display font-semibold text-charcoal">{movie.title}</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-soft-grey">Date</span>
                <span className="text-charcoal">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-soft-grey">Time</span>
                <span className="text-charcoal">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-soft-grey">Format</span>
                <span className="text-charcoal">{selectedFormat}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-soft-grey">Seats</span>
                <span className="text-charcoal">{selectedSeats.join(', ')}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-charcoal/10">
                <span className="text-soft-grey">Total</span>
                <span className="font-display font-semibold text-champagne-dark">&#8377;{total.toFixed(0)}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a
              href="/"
              className="px-8 py-3 bg-charcoal text-white text-sm font-medium rounded-full hover:bg-charcoal/90 transition-colors"
            >
              Back to Home
            </a>
            <a
              href="/movies"
              className="px-8 py-3 border border-charcoal/10 text-charcoal text-sm font-medium rounded-full hover:bg-charcoal/5 transition-colors"
            >
              Browse Films
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            Reserve Your Seat
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mt-2">
            Book Tickets
          </h1>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-2 mb-12">
          {(['movie', 'date', 'seats', 'confirm'] as Step[]).map((s, i) => {
            const labels = ['Film', 'Date & Time', 'Seats', 'Confirm'];
            const stepOrder = ['movie', 'date', 'seats', 'confirm'];
            const currentIdx = stepOrder.indexOf(step);
            const thisIdx = i;
            const isActive = thisIdx === currentIdx;
            const isCompleted = thisIdx < currentIdx;

            return (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    isCompleted
                      ? 'bg-champagne text-white'
                      : isActive
                      ? 'bg-charcoal text-white'
                      : 'bg-charcoal/5 text-soft-grey'
                  }`}
                >
                  {isCompleted ? <Check size={14} /> : i + 1}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:inline ${
                    isActive ? 'text-charcoal' : 'text-soft-grey'
                  }`}
                >
                  {labels[i]}
                </span>
                {i < 3 && <div className="w-8 h-px bg-charcoal/10" />}
              </div>
            );
          })}
        </div>

        {/* Step: Movie Selection */}
        {step === 'movie' && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">
              Select a Film
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nowShowing.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedMovieId(m.id);
                    setStep('date');
                  }}
                  className={`group flex gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedMovieId === m.id
                      ? 'border-champagne bg-champagne/5'
                      : 'border-transparent bg-white hover:border-champagne/30 shadow-sm'
                  }`}
                >
                  <div className="w-20 aspect-[2/3] rounded-lg overflow-hidden shrink-0">
                    <img src={m.poster} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-charcoal text-sm truncate">
                      {m.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Star size={10} className="text-champagne fill-champagne" />
                      <span className="text-xs text-charcoal">{m.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-soft-grey">
                      <Clock size={10} />
                      <span>{m.runtime}</span>
                    </div>
                    <p className="text-xs text-soft-grey mt-1">{m.genre.join(', ')}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step: Date & Time */}
        {step === 'date' && movie && (
          <div>
            <button
              onClick={() => setStep('movie')}
              className="flex items-center gap-2 text-sm text-soft-grey hover:text-charcoal transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Change Film
            </button>

            <div className="bg-white rounded-2xl p-6 mb-8 flex items-center gap-4">
              <div className="w-16 aspect-[2/3] rounded-lg overflow-hidden shrink-0">
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-charcoal">{movie.title}</h3>
                <p className="text-xs text-soft-grey mt-1">{movie.runtime} &middot; {movie.genre.join(', ')}</p>
              </div>
            </div>

            <h2 className="font-display text-2xl font-semibold text-charcoal mb-4">
              Choose Date
            </h2>
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {dates.map((d) => {
                const key = d.label;
                const active = selectedDate === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedDate(key)}
                    className={`shrink-0 w-20 py-4 rounded-2xl text-center transition-all duration-300 ${
                      active
                        ? 'bg-charcoal text-white'
                        : 'bg-white text-charcoal border border-charcoal/10 hover:border-charcoal/30'
                    }`}
                  >
                    <span className="block text-xs font-medium">{d.day}</span>
                    <span className="block text-sm font-semibold mt-0.5">{d.label}</span>
                  </button>
                );
              })}
            </div>

            <h2 className="font-display text-2xl font-semibold text-charcoal mb-4">
              Choose Showtime
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {showtimes.map((s) => {
                const active = selectedTime === s.time && selectedFormat === s.format;
                return (
                  <button
                    key={s.time + s.format}
                    onClick={() => {
                      setSelectedTime(s.time);
                      setSelectedFormat(s.format);
                    }}
                    className={`py-4 px-3 rounded-xl text-center transition-all duration-300 ${
                      active
                        ? 'bg-charcoal text-white'
                        : 'bg-white text-charcoal border border-charcoal/10 hover:border-charcoal/30'
                    }`}
                  >
                    <span className="block text-sm font-semibold">{s.time}</span>
                    <span className={`block text-xs mt-0.5 ${active ? 'text-white/60' : 'text-soft-grey'}`}>
                      {s.format}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-8">
              <p className="text-xs text-soft-grey">
                {selectedFormat === 'IMAX' ? 'IMAX' : 'Standard'}: &#8377;{selectedFormat === 'IMAX' ? pricing.imax : pricing.standard} per seat
              </p>
              <button
                onClick={() => selectedDate && selectedTime && setStep('seats')}
                disabled={!selectedDate || !selectedTime}
                className="inline-flex items-center gap-2 px-8 py-3 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Select Seats <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step: Seats */}
        {step === 'seats' && movie && (
          <div>
            <button
              onClick={() => setStep('date')}
              className="flex items-center gap-2 text-sm text-soft-grey hover:text-charcoal transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Change Date & Time
            </button>

            <div className="bg-white rounded-2xl p-4 mb-8 flex flex-wrap items-center gap-4 text-xs text-soft-grey">
              <span>{movie.title}</span>
              <span>&middot;</span>
              <span>{selectedDate}</span>
              <span>&middot;</span>
              <span>{selectedTime} ({selectedFormat})</span>
            </div>

            <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">
              Select Seats
            </h2>

            {/* Screen */}
            <div className="text-center mb-8">
              <div className="mx-auto w-3/4 h-2 bg-charcoal/10 rounded-full mb-2" />
              <span className="text-xs text-soft-grey uppercase tracking-widest">Screen</span>
            </div>

            {/* Seat map */}
            <div className="max-w-md mx-auto mb-8">
              {ROWS.map((row) => (
                <div key={row} className="flex items-center gap-1.5 mb-1.5 justify-center">
                  <span className="w-6 text-xs text-soft-grey text-center">{row}</span>
                  {Array.from({ length: SEATS_PER_ROW }, (_, i) => {
                    const seatId = `${row}${i + 1}`;
                    const seat = allSeats.find((s) => s.id === seatId);
                    const isSelected = selectedSeats.includes(seatId);
                    const isAvailable = seat?.available ?? false;
                    return (
                      <button
                        key={seatId}
                        disabled={!isAvailable}
                        onClick={() => toggleSeat(seatId)}
                        className={`w-7 h-7 rounded text-xs font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-champagne text-white scale-105'
                            : isAvailable
                            ? 'bg-charcoal/5 text-charcoal/40 hover:bg-champagne/20'
                            : 'bg-charcoal/5 text-charcoal/10 cursor-not-allowed'
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                  <span className="w-6 text-xs text-soft-grey text-center">{row}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mb-8 text-xs text-soft-grey">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-charcoal/5" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-champagne" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-charcoal/5 opacity-50" />
                <span>Taken</span>
              </div>
            </div>

            {/* Summary bar */}
            {selectedSeats.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in-up">
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    {selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''} selected
                  </p>
                  <p className="text-xs text-soft-grey">{selectedSeats.join(', ')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-xl font-semibold text-champagne-dark">
                    &#8377;{total.toFixed(0)}
                  </span>
                  <button
                    onClick={() => setStep('confirm')}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300"
                  >
                    Review <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step: Confirm */}
        {step === 'confirm' && movie && (
          <div>
            <button
              onClick={() => setStep('seats')}
              className="flex items-center gap-2 text-sm text-soft-grey hover:text-charcoal transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Change Seats
            </button>

            <h2 className="font-display text-2xl font-semibold text-charcoal mb-8">
              Booking Summary
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
              <div className="flex gap-6 mb-6 pb-6 border-b border-charcoal/5">
                <div className="w-24 aspect-[2/3] rounded-lg overflow-hidden shrink-0">
                  <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{movie.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-soft-grey">
                    <Star size={10} className="text-champagne fill-champagne" />
                    <span>{movie.rating}</span>
                    <span>&middot;</span>
                    <span>{movie.runtime}</span>
                  </div>
                  <p className="text-xs text-soft-grey mt-2">{movie.genre.join(', ')}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-soft-grey">Date</span>
                  <span className="text-charcoal font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-grey">Showtime</span>
                  <span className="text-charcoal font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-grey">Format</span>
                  <span className="text-charcoal font-medium">{selectedFormat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-grey">Seats</span>
                  <span className="text-charcoal font-medium">{selectedSeats.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-grey">Price per seat</span>
                  <span className="text-charcoal">&#8377;{seatPrice.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-charcoal/10">
                  <span className="font-display font-semibold text-charcoal">Total</span>
                  <span className="font-display text-xl font-semibold text-champagne-dark">
                    &#8377;{total.toFixed(0)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full py-4 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300 hover:shadow-lg hover:shadow-champagne/20"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
