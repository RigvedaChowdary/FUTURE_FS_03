export interface Movie {
  id: number;
  title: string;
  genre: string[];
  runtime: string;
  rating: number;
  director: string;
  cast: string[];
  synopsis: string;
  poster: string;
  featured: boolean;
  nowShowing: boolean;
  comingSoon: boolean;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'PEDDI',
    genre: ['Action', 'Drama', 'Sports'],
    runtime: '2h 55m',
    rating: 8.4,
    director: 'Buchi Babu Sana',
    cast: ['Ram Charan', 'Janhvi Kapoor', 'Shiva Rajkumar', 'Jagapathi Babu'],
    synopsis: 'Set in a rural backdrop, PEDDI follows the journey of a fierce and determined man who rises through the world of competitive sports, battling personal demons and societal barriers. His arena, his rules — an epic tale of grit and glory.',
    poster: 'https://www.telugutimes.net/en/wp-content/uploads/sites/2/2025/04/PEDDI-FL_INSTA-.jpg',
    featured: true,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Pushpa 2: The Rule',
    genre: ['Action', 'Drama', 'Thriller'],
    runtime: '3h 20m',
    rating: 8.1,
    director: 'Sukumar',
    cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil'],
    synopsis: 'As his smuggling empire grows, a brazen Pushpa Raj longs for power and respect on his vengeful journey, while facing old rivals and new enemies who threaten to destroy everything he has built.',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/11/Pushpa_2-_The_Rule.jpg',
    featured: true,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Kalki 2898 AD',
    genre: ['Sci-Fi', 'Action', 'Mythology'],
    runtime: '2h 59m',
    rating: 7.9,
    director: 'Nag Ashwin',
    cast: ['Prabhas', 'Amitabh Bachchan', 'Deepika Padukone', 'Kamal Haasan'],
    synopsis: 'In the dystopian future of 2898 AD, thousands of years after the Kurukshetra war, Ashwatthama gears up for his final battle of redemption at the sign of hope in a world consumed by darkness.',
    poster: 'https://c.saavncdn.com/888/Kalki-2898-Ad-Telugu-Telugu-2024-20240712063717-500x500.jpg',
    featured: true,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Salaar: Part 1 – Ceasefire',
    genre: ['Action', 'Thriller', 'Epic'],
    runtime: '2h 52m',
    rating: 7.7,
    director: 'Prashanth Neel',
    cast: ['Prabhas', 'Prithviraj Sukumaran', 'Shruti Haasan'],
    synopsis: 'Set in the dystopian city-state of Khansaar, the film centers on a deep bond between two childhood friends that turns into a violent saga of power, betrayal, and an epic battle for supremacy.',
    poster: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/salaar-part-one-movie-poster.jpg',
    featured: false,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 5,
    title: 'Devara: Part 1',
    genre: ['Action', 'Drama', 'Thriller'],
    runtime: '2h 57m',
    rating: 7.3,
    director: 'Koratala Siva',
    cast: ['Jr NTR', 'Janhvi Kapoor', 'Saif Ali Khan'],
    synopsis: 'A mighty sea warrior takes a violent stand against the criminal forces threatening his coastal village. As fear and death spread across the seas, a legend is born — Devara, the protector of the deep.',
    poster: 'https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_.jpg',
    featured: false,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 6,
    title: 'Thandel',
    genre: ['Action', 'Romance', 'Thriller'],
    runtime: '2h 38m',
    rating: 7.5,
    director: 'Chandoo Mondeti',
    cast: ['Naga Chaitanya', 'Sai Pallavi'],
    synopsis: 'Based on a real-life incident from 2018, Thandel tells the gripping story of Srikakulam fishermen captured by Pakistani forces in international waters — a tale of courage, love, and survival against all odds.',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjljYmFhMWEtMzYyOS00NzZmLThiNTktMjA0ZWQ4Njg3MDI1XkEyXkFqcGc@._V1_.jpg',
    featured: false,
    nowShowing: true,
    comingSoon: false,
  },
  {
    id: 7,
    title: 'VARANASI',
    genre: ['Action', 'Adventure', 'Fantasy'],
    runtime: 'TBA',
    rating: 0,
    director: 'S.S. Rajamouli',
    cast: ['Mahesh Babu', 'Priyanka Chopra', 'Prithviraj Sukumaran'],
    synopsis: 'From the master storyteller behind RRR and Baahubali comes an epic globe-trotting adventure blending mythology, history, and futuristic elements. Mahesh Babu stars as Rudhra in what promises to be Indian cinema\'s most ambitious film ever.',
    poster: 'https://i.ytimg.com/vi/jDGETw3YAHc/maxresdefault.jpg',
    featured: true,
    nowShowing: false,
    comingSoon: true,
  },
  {
    id: 8,
    title: 'They Call Him OG',
    genre: ['Action', 'Thriller'],
    runtime: 'TBA',
    rating: 0,
    director: 'Sujeeth',
    cast: ['Pawan Kalyan', 'Emraan Hashmi', 'Priyanka Arul Mohan'],
    synopsis: 'Pawan Kalyan stars as Ojas Gambheera, a ruthless gangster with a mysterious past. When an old enemy resurfaces, OG must confront the shadows of his former life in a high-octane battle for survival.',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzY1NWUwOTYtMGIwMy00NmZhLThlYjYtOGQ1MmJjNTg1NDQ1XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg',
    featured: false,
    nowShowing: false,
    comingSoon: true,
  },
  {
    id: 9,
    title: 'Salaar: Part 2 – Shouryaanga Parvam',
    genre: ['Action', 'Thriller', 'Epic'],
    runtime: 'TBA',
    rating: 0,
    director: 'Prashanth Neel',
    cast: ['Prabhas', 'Prithviraj Sukumaran', 'Shruti Haasan'],
    synopsis: 'The saga continues as the battle for Khansaar enters its bloodiest chapter. With alliances shattered and new enemies rising, Deva must embrace his true destiny in the war for Shouryaanga.',
    poster: 'https://wallpaperbat.com/img/6565077-prithviraj-unveils-new-poster-of-prabhas-from-salaar-part-1-ceasefire-prithviraj-sukumaran-prabhas-salaar-part-1-ceasefire-poster-trailer.jpg',
    featured: false,
    nowShowing: false,
    comingSoon: true,
  },
  {
    id: 10,
    title: 'Kalki 2898 AD: Part 2',
    genre: ['Sci-Fi', 'Action', 'Mythology'],
    runtime: 'TBA',
    rating: 0,
    director: 'Nag Ashwin',
    cast: ['Prabhas', 'Deepika Padukone', 'Amitabh Bachchan', 'Kamal Haasan'],
    synopsis: 'The epic conclusion to the Kalki saga. As Kalki rises to fulfil the ancient prophecy, the final battle between good and evil will determine the fate of humanity itself.',
    poster: 'https://static.moviecrow.com/gallery/20240626/230631-Kalki+2898+AD+Prabhas+Bhairava+Bujji.jpg',
    featured: false,
    nowShowing: false,
    comingSoon: true,
  },
];

export const showtimes = [
  { time: '10:30 AM', format: 'Standard' },
  { time: '1:00 PM', format: 'Standard' },
  { time: '3:30 PM', format: 'IMAX' },
  { time: '6:00 PM', format: 'IMAX' },
  { time: '8:30 PM', format: 'Standard' },
  { time: '9:15 PM', format: 'IMAX' },
];

export const pricing = {
  standard: 250,
  imax: 450,
  premium: 600,
  child: 150,
};

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'The most comfortable cinema experience in the city. From the moment you walk in, you feel the difference. CineVerse sets the standard.',
    rating: 5,
    title: 'Film Enthusiast',
  },
  {
    id: 2,
    name: 'Rahul Reddy',
    text: 'Seamless online booking and luxurious seating. The IMAX experience here is simply unmatched. This is how every multiplex should operate.',
    rating: 5,
    title: 'Premium Member',
  },
  {
    id: 3,
    name: 'Ananya Krishnan',
    text: 'A beautiful theatre with exceptional service. The sound quality and screen clarity make every Telugu blockbuster feel even more epic.',
    rating: 5,
    title: 'Architecture Designer',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    text: 'The curated film selection and intimate screening rooms make every visit feel special. Best multiplex experience in Hyderabad.',
    rating: 5,
    title: 'Patron since 2020',
  },
];

export const faqs = [
  {
    question: 'What makes CineVerse Multiplex different from other theatres?',
    answer: 'We offer a curated cinematic experience with luxury seating, premium Dolby Atmos sound and laser projection, and an atmosphere designed for true film appreciation. Every detail, from our lobby to our screening rooms, is crafted with care.',
  },
  {
    question: 'How do I become a Premium Member?',
    answer: 'You can sign up for our Premium Membership online or at any CineVerse location. Membership includes priority booking, complimentary refreshments, and exclusive access to advance screenings and events.',
  },
  {
    question: 'Can I book private screenings?',
    answer: 'Absolutely. Our Private Screening experience allows you to reserve an entire screening room for your group. Contact our concierge team for availability and custom arrangements.',
  },
  {
    question: 'What is your refund and exchange policy?',
    answer: 'Tickets may be exchanged for a different showtime up to 2 hours before the scheduled screening. Refunds are available up to 24 hours before showtime. Premium Members enjoy flexible exchanges at no additional cost.',
  },
  {
    question: 'Do you offer accessible seating and accommodations?',
    answer: 'Every CineVerse location is fully accessible, with wheelchair-accessible seating, assistive listening devices, and closed captioning available for all screenings. Please inform us of any specific needs when booking.',
  },
  {
    question: 'What food and beverage options are available?',
    answer: 'Our concessions go beyond the ordinary — enjoy gourmet snacks, craft beverages, and a curated selection. Premium Members receive complimentary refreshments with every visit.',
  },
];

export const locations = [
  {
    name: 'CineVerse Banjara Hills',
    address: 'Road No. 2, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91 40 2355 0140',
    screens: 8,
  },
  {
    name: 'CineVerse Jubilee Hills',
    address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
    phone: '+91 40 2355 0267',
    screens: 6,
  },
  {
    name: 'CineVerse Madhapur',
    address: 'HITEC City, Madhapur, Hyderabad, Telangana 500081',
    phone: '+91 40 2355 0189',
    screens: 5,
  },
];
