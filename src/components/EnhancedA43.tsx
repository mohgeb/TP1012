import { useState } from 'react';
import A43 from '../imports/A43';
import { Lightbox } from './Lightbox';
import imgT1012132 from 'figma:asset/30b90fdbeded4aadc29b1219c30ac64ed0b98d78.png';

export function EnhancedA43() {
  const [imageOpen, setImageOpen] = useState(false);

  const handleImageClick = () => {
    setImageOpen(true);
  };

  return (
    <div className="relative size-full">
      <A43 />
      
      {/* Clickable image area */}
      <div
        className="absolute left-[-11px] top-[220px] h-[540px] w-[405px] cursor-pointer"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
        aria-label="View full image"
      />

      {/* Image lightbox */}
      <Lightbox
        isOpen={imageOpen}
        onClose={() => setImageOpen(false)}
        imageSrc={imgT1012132}
        title="Houdini Tonight - KKK Auditorium"
        description="The Unbelievable History of Fort Worth's KKK Hall: Houdini Once Took the Stage! This authentic poster shows the legendary Harry Houdini's lecture at the Klan Auditorium in the 1920s."
        useGenieEffect
      />
    </div>
  );
}