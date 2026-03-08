import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';
import gallery3 from '@/assets/gallery-3.jpeg';
import gallery4 from '@/assets/gallery-4.jpeg';
import gallery5 from '@/assets/gallery-5.jpeg';
import gallery6 from '@/assets/gallery-6.jpeg';
import gallery7 from '@/assets/gallery-7.jpeg';
import gallery8 from '@/assets/gallery-8.jpeg';
import gallery9 from '@/assets/gallery-9.jpeg';
import gallery11 from '@/assets/gallery-11.jpeg';
import gallery12 from '@/assets/gallery-12.jpeg';
import gallery13 from '@/assets/gallery-13.jpeg';
import gallery14 from '@/assets/gallery-14.jpeg';
import gallery15 from '@/assets/gallery-15.jpeg';


const galleryImages = [
  { src: gallery1, alt: 'Security guards at construction site', title: 'Site Security' },
  { src: gallery2, alt: 'Security team at Jalpak Foods', title: 'Plant Security' },
  { src: gallery3, alt: 'Security guards saluting at dawn', title: 'Disciplined Team' },
  { src: gallery4, alt: 'Fire safety training session', title: 'Safety Training' },
  { src: gallery5, alt: 'Manpower team briefing in warehouse', title: 'Manpower Solutions' },
  { src: gallery6, alt: 'Physical training session', title: 'Fitness Training' },
  { src: gallery7, alt: 'Reporting', title: 'Reporting' },
  { src: gallery8, alt: 'Manpower team briefing in field', title: 'Corporate Security' },
  { src: gallery9, alt: 'Manpower team briefing onsite', title: 'Security Onsite' },
  { src: gallery11, alt: 'Manpower team briefing onsite', title: 'Training onsite' },
  { src: gallery12, alt: 'Manpower team briefing onsite', title: 'Cadets hoisting flag' },
  { src: gallery13, alt: 'Manpower team briefing onsite', title: 'Security breifing' },
  { src: gallery14, alt: 'Manpower team briefing onsite', title: 'Dependable security' },
  { src: gallery15, alt: 'Manpower team briefing onsite', title: 'Every officer is dependable' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Operations</span> in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our professional security and manpower services
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground font-semibold">{image.title}</p>
              </div>
              <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-foreground font-semibold mt-4">
                {galleryImages[selectedImage].title}
              </p>
            </div>
            
            <button
              onClick={goToNext}
              className="absolute right-4 p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
