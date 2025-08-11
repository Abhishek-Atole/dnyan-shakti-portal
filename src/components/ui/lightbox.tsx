import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft' && onPrev) {
      onPrev();
    } else if (e.key === 'ArrowRight' && onNext) {
      onNext();
    }
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
        
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-image"
        />
        
        {currentImage.title && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h3 className="text-lg font-semibold">{currentImage.title}</h3>
          </div>
        )}
        
        {images.length > 1 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
            <button
              onClick={onPrev}
              className="text-white text-2xl hover:text-[#D4AF37] transition-colors duration-200 bg-black/30 rounded-full p-2"
              aria-label="Previous image"
              disabled={!onPrev}
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="text-white text-2xl hover:text-[#D4AF37] transition-colors duration-200 bg-black/30 rounded-full p-2"
              aria-label="Next image"
              disabled={!onNext}
            >
              ›
            </button>
          </div>
        )}
        
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export const useLightbox = (images: Array<{ src: string; alt: string; title?: string }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  };
};
