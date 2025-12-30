import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-security.jpg';
import guard1 from '@/assets/guard-1.jpg';
import controlRoom from '@/assets/control-room.jpg';
import facilityManagement from '@/assets/facility-management.jpg';
import vipSecurity from '@/assets/vip-security.jpg';
import manpowerTeam from '@/assets/manpower-team.jpg';
import training from '@/assets/training.jpg';

const galleryImages = [
  { src: heroImage, alt: 'Professional security team', title: 'Security Team' },
  { src: guard1, alt: 'Security guard on duty', title: 'Guard Services' },
  { src: controlRoom, alt: '24/7 Control room', title: 'Control Room' },
  { src: facilityManagement, alt: 'Facility management team', title: 'Facility Management' },
  { src: vipSecurity, alt: 'VIP protection services', title: 'VIP Security' },
  { src: manpowerTeam, alt: 'Manpower workforce', title: 'Manpower Solutions' },
  { src: training, alt: 'Security training session', title: 'Training Programs' },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
