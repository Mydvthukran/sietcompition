export const notices = [
  {
    id: 1,
    title: { en: 'Final Exam Schedule Released', hi: 'अंतिम परीक्षा कार्यक्रम जारी' },
    description: { en: 'Final examination schedule for all semesters has been released. Check the notice board for details.', hi: 'सभी सेमेस्टर के लिए अंतिम परीक्षा कार्यक्रम जारी कर दिया गया है। विवरण के लिए सूचना बोर्ड देखें।' },
    date: '2026-03-15',
    category: 'exam',
    urgent: true,
  },
  {
    id: 2,
    title: { en: 'Admission Open for B.Tech 2026', hi: 'बी.टेक 2026 के लिए प्रवेश खुले' },
    description: { en: 'Applications are invited for admission to B.Tech programs for the academic year 2026-27.', hi: 'शैक्षणिक वर्ष 2026-27 के लिए बी.टेक कार्यक्रमों में प्रवेश के लिए आवेदन आमंत्रित हैं।' },
    date: '2026-03-10',
    category: 'admission',
    urgent: false,
  },
  {
    id: 3,
    title: { en: 'Technical Fest - Technovation 2026', hi: 'तकनीकी उत्सव - टेक्नोवेशन 2026' },
    description: { en: 'Annual technical fest will be held from March 25-27. Register your team now!', hi: 'वार्षिक तकनीकी उत्सव 25-27 मार्च को आयोजित किया जाएगा। अभी अपनी टीम पंजीकृत करें!' },
    date: '2026-03-08',
    category: 'event',
    urgent: false,
  },
  {
    id: 4,
    title: { en: 'Workshop on AI and Machine Learning', hi: 'एआई और मशीन लर्निंग पर कार्यशाला' },
    description: { en: 'A 3-day workshop on AI/ML will be conducted by industry experts. Limited seats available.', hi: 'उद्योग विशेषज्ञों द्वारा एआई/एमएल पर 3-दिवसीय कार्यशाला आयोजित की जाएगी। सीमित सीटें उपलब्ध हैं।' },
    date: '2026-03-05',
    category: 'event',
    urgent: false,
  },
  {
    id: 5,
    title: { en: 'Scholarship Applications Extended', hi: 'छात्रवृत्ति आवेदन बढ़ाए गए' },
    description: { en: 'Last date for merit scholarship applications has been extended to March 30.', hi: 'मेरिट छात्रवृत्ति आवेदनों की अंतिम तिथि 30 मार्च तक बढ़ा दी गई है।' },
    date: '2026-03-12',
    category: 'admission',
    urgent: true,
  },
  {
    id: 6,
    title: { en: 'Campus Placement Drive', hi: 'कैंपस प्लेसमेंट ड्राइव' },
    description: { en: 'Top MNCs will be visiting campus for placement drives. Prepare well!', hi: 'शीर्ष बहुराष्ट्रीय कंपनियां प्लेसमेंट ड्राइव के लिए कैंपस का दौरा करेंगी। अच्छी तैयारी करें!' },
    date: '2026-03-18',
    category: 'event',
    urgent: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: { en: 'Software Engineer at Google', hi: 'गूगल में सॉफ्टवेयर इंजीनियर' },
    image: '/testimonials/rahul.jpg',
    text: {
      en: 'SIET provided me with excellent education and opportunities. The faculty is supportive and the placement cell is very active.',
      hi: 'एसआईईटी ने मुझे उत्कृष्ट शिक्षा और अवसर प्रदान किए। शिक्षक सहायक हैं और प्लेसमेंट सेल बहुत सक्रिय है।'
    },
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: { en: 'Data Scientist at Microsoft', hi: 'माइक्रोसॉफ्ट में डेटा साइंटिस्ट' },
    image: '/testimonials/priya.jpg',
    text: {
      en: 'The practical exposure and industry connections at SIET helped me land my dream job. Forever grateful!',
      hi: 'एसआईईटी में व्यावहारिक अनुभव और उद्योग संबंधों ने मुझे अपनी सपनों की नौकरी पाने में मदद की। हमेशा के लिए आभारी!'
    },
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: { en: 'Mechanical Engineer at Tata Motors', hi: 'टाटा मोटर्स में मैकेनिकल इंजीनियर' },
    image: '/testimonials/amit.jpg',
    text: {
      en: 'Great infrastructure and dedicated faculty. The labs are well-equipped with latest technology.',
      hi: 'महान बुनियादी ढांचा और समर्पित शिक्षक। प्रयोगशालाएं नवीनतम तकनीक से सुसज्जित हैं।'
    },
    rating: 5,
  },
];

export const galleryImages = [
  { id: 1, src: '/gallery/campus1.jpg', alt: 'Campus Building', category: 'campus' },
  { id: 2, src: '/gallery/lab1.jpg', alt: 'Computer Lab', category: 'labs' },
  { id: 3, src: '/gallery/library1.jpg', alt: 'Library', category: 'library' },
  { id: 4, src: '/gallery/sports1.jpg', alt: 'Sports Complex', category: 'sports' },
  { id: 5, src: '/gallery/hostel1.jpg', alt: 'Hostel', category: 'hostel' },
  { id: 6, src: '/gallery/event1.jpg', alt: 'Tech Fest', category: 'events' },
];

export const statsData = {
  students: 2500,
  placementRate: 95,
  companies: 150,
  alumni: 1000,
  faculty: 50,
  courses: 6,
};
