import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';
import { testimonials } from '../data/content';
import PropTypes from 'prop-types';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { language } = useLanguage();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {getTranslation(language, 'gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {getTranslation(language, 'gallery.subtitle')}
          </p>
        </motion.div>

        {/* Campus Tour Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            {getTranslation(language, 'gallery.campusTour')}
          </h3>
          <div className="max-w-4xl mx-auto aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl">
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p>Campus Virtual Tour Video</p>
                <p className="text-sm mt-2">(Video placeholder - Replace with actual video embed)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl cursor-pointer overflow-hidden shadow-lg"
              onClick={() => setSelectedImage(id)}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                📷
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            {getTranslation(language, 'gallery.testimonials')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                      👤
                    </div>
                    <div>
                      <h4 className="text-xl font-bold dark:text-white">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {testimonials[currentTestimonial].role[language]}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{testimonials[currentTestimonial].text[language]}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                📷
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
              >
                <FaTimes size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
