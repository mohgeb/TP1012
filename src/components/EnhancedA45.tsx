import { useState } from 'react';
import A45 from '../imports/A45';
import { Lightbox } from './Lightbox';
import imgT1012122 from 'figma:asset/7176f4a45bd931b47963fc6e0c67186631d193fd.png';

export function EnhancedA45() {
  const [imageOpen, setImageOpen] = useState(false);

  const handleImageClick = () => {
    setImageOpen(true);
  };

  return (
    <div className="relative size-full">
      <A45 />
      
      {/* Clickable image area */}
      <div
        className="absolute left-[-28px] top-[204px] h-[340px] w-[650px] cursor-pointer"
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
        imageSrc={imgT1012122}
        title="Free Tour: Help Us Illuminate Forgotten History"
        description="Let the light pour in. Join us for a free tour and help us illuminate the forgotten history of this landmark. See the transformation in progress and learn about the mission of the Fred Rouse Center."
        useGenieEffect
      />
    </div>
  );
}