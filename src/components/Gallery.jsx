import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useLanguage } from '../contexts/useLanguage';
import { getTranslation } from '../data/translations';
import { testimonials } from '../data/content';

const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

const galleryImages = Object.entries(imageModules)
  .filter(([path]) => !path.toLowerCase().includes('siet.webp'))
  .map(([path, src], idx) => {
    const fileName = path.split('/').pop() || `Image ${idx + 1}`;
    const readableName = fileName
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
      .trim();

    return {
      id: idx + 1,
      src,
      alt: readableName,
    };
  });

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
    <section className="gallery-section">
      <div className="container gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gallery-header"
        >
          <h2 className="gallery-title">
            {getTranslation(language, 'gallery.title')}
          </h2>
          <p className="gallery-subtitle">
            {getTranslation(language, 'gallery.subtitle')}
          </p>
        </motion.div>

       
        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="gallery-card"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonial-section">
          <h3 className="testimonial-title">
            {getTranslation(language, 'gallery.testimonials')}
          </h3>
          <div className="testimonial-wrap">
            <div className="testimonial-carousel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="testimonial-card"
                >
                  <div className="testimonial-head">
                    <div className="testimonial-avatar">
                      👤
                    </div>
                    <div>
                      <h4 className="testimonial-name">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="testimonial-role">
                        {testimonials[currentTestimonial].role[language]}
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    "{testimonials[currentTestimonial].text[language]}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="testimonial-nav testimonial-nav-prev"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="testimonial-nav testimonial-nav-next"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`testimonial-dot ${idx === currentTestimonial ? 'active' : ''}`}
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
              className="gallery-lightbox-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery-lightbox-image"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="gallery-lightbox-close"
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
