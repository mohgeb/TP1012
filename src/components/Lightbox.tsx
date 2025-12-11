import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  useGenieEffect?: boolean;
}

export function Lightbox({ 
  isOpen, 
  onClose, 
  imageSrc, 
  title, 
  description, 
  children, 
  useGenieEffect = false 
}: LightboxProps) {
  // We still track orientation just in case we need fine-tuning, 
  // but the main layout logic no longer depends on it for row/col switching.
  const [imageOrientation, setImageOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.onload = () => {
        setImageOrientation(img.width > img.height ? 'horizontal' : 'vertical');
      };
      img.src = imageSrc;
    }
  }, [imageSrc]);

  if (!mounted) return null;

  const genieExitAnimation = {
    scale: [1, 0.8, 0.3, 0],
    y: [0, 30, 100, 300],
    x: [0, 0, 0, 200],
    opacity: [1, 0.9, 0.5, 0],
    rotateX: [0, 15, 45, 90],
    transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }
  };

  const normalExitAnimation = {
    scale: 0.95,
    opacity: 0,
    y: 20,
  };

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Darkened Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 backdrop-blur-md"
            aria-label="Close"
          >
            <X className="size-8" />
          </button>

          {/* Animated Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={useGenieEffect ? genieExitAnimation : normalExitAnimation}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            // Kept overflow-y-auto here just in case the *image itself* is taller than screen
            className="relative z-10 max-h-[90vh] max-w-[95vw] overflow-y-auto overflow-x-hidden rounded-lg shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {children || (
              // 1. Main Card Container: ALWAYS flex-row and items-stretch.
              // items-stretch ensures the text container height equals image container height.
              <div className="bg-white text-gray-900 shadow-xl overflow-hidden flex flex-row items-stretch max-w-7xl mx-auto">
                
                {imageSrc && (
                  // 2. Image Container: Given flex priority (e.g., flex-[3] takes 3/5ths space)
                  <div className="relative flex-shrink-0 bg-gray-50 flex items-center justify-center flex-[3]">
                    <img
                      src={imageSrc}
                      alt={title || 'Full size image'}
                      // Image constraints. The resulting height of this image dictates the height of the text block.
                      className="block object-contain max-w-[65vw] max-h-[85vh] w-auto h-auto"
                    />
                  </div>
                )}

                {(title || description) && (
                  // 3. Text Container: Sits on the side.
                  // CRITICAL: added `overflow-y-auto`. Because parent is `items-stretch`, 
                  // this div has a fixed height matching the image. If text is too long, it scrolls internally.
                  <div className="flex flex-col p-8 flex-[2] overflow-y-auto custom-scrollbar border-l border-gray-100 bg-white relative">
                    <div className="my-auto"> {/* Centers text vertically if it's short */}
                        {title && (
                        <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900">
                            {title}
                        </h2>
                        )}
                        {description && (
                        <div className="prose prose-base text-gray-600">
                            <p>{description}</p>
                        </div>
                        )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
}