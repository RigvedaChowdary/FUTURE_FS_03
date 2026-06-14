import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Clock, ArrowRight, X } from 'lucide-react';
import { movies } from '../data/movies';

type Filter = 'all' | 'now_showing' | 'coming_soon';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<number | null>(
    searchParams.get('id') ? Number(searchParams.get('id')) : null
  );

  const filtered = useMemo(() => {
    let list = movies;
    if (filter === 'now_showing') list = list.filter((m) => m.nowShowing);
    if (filter === 'coming_soon') list = list.filter((m) => m.comingSoon);
    return list;
  }, [filter]);

  const selected = selectedId ? movies.find((m) => m.id === selectedId) : null;

  const openDetail = (id: number) => {
    setSelectedId(id);
    setSearchParams({ id: String(id) });
  };

  const closeDetail = () => {
    setSelectedId(null);
    setSearchParams({});
  };

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-champagne text-xs font-medium uppercase tracking-widest">
            Our Collection
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-charcoal mt-2">
            Films
          </h1>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-12">
          {([
            { key: 'all', label: 'All Films' },
            { key: 'now_showing', label: 'Now Showing' },
            { key: 'coming_soon', label: 'Coming Soon' },
          ] as const).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-soft-grey hover:bg-charcoal/5 border border-charcoal/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((movie) => (
            <button
              key={movie.id}
              onClick={() => openDetail(movie.id)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-left"
            >
              <div className="aspect-[2/3] overflow-hidden relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {movie.comingSoon && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    Coming Soon
                  </span>
                )}
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
                <p className="text-xs text-charcoal/50 mt-3 line-clamp-2">{movie.synopsis}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in"
          onClick={closeDetail}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-[21/9] overflow-hidden rounded-t-3xl">
                <img
                  src={selected.poster}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  {selected.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-champagne fill-champagne" />
                    <span className="text-white">{selected.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{selected.runtime}</span>
                  </div>
                  <span>{selected.genre.join(', ')}</span>
                </div>
              </div>
              <button
                onClick={closeDetail}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-charcoal/70 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-8">
              <p className="text-sm text-charcoal/70 leading-relaxed mb-8">
                {selected.synopsis}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-champagne mb-2">
                    Director
                  </h4>
                  <p className="text-sm text-charcoal">{selected.director}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-champagne mb-2">
                    Cast
                  </h4>
                  <p className="text-sm text-charcoal">{selected.cast.join(', ')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {selected.nowShowing && (
                  <Link
                    to={`/booking?movie=${selected.id}`}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-champagne text-white text-sm font-medium rounded-full hover:bg-champagne-dark transition-all duration-300"
                    onClick={closeDetail}
                  >
                    Book Tickets
                    <ArrowRight size={16} />
                  </Link>
                )}
                {selected.comingSoon && (
                  <span className="px-6 py-3 bg-charcoal/5 text-charcoal/50 text-sm font-medium rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
