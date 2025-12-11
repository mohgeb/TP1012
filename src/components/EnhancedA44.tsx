import { useState } from 'react';
import A44 from '../imports/A44';
import { Lightbox } from './Lightbox';
import imgT1012112 from 'figma:asset/222c9ed293f2fd6d5f804104540c272e9124e09a.png';

export function EnhancedA44() {
  const [imageOpen, setImageOpen] = useState(false);

  const handleImageClick = () => {
    setImageOpen(true);
  };

  return (
    <div className="relative size-full">
      <A44 />
      
      {/* Clickable image area */}
      <div
        className="absolute left-[-96px] top-[157px] h-[369px] w-[706px] cursor-pointer"
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
        imageSrc={imgT1012112}
        title="From Shadows to Splendor"
        description="Help Us Bring Back the Light. Harness the power of this transformation. Every donation helps plant the seeds of belonging, art, and dignity, turning a symbol of exclusion into a vibrant center for reparative justice and community healing."
        useGenieEffect
      />
    </div>
  );
}