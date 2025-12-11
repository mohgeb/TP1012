import { useState } from 'react';
import A41 from '../imports/A41';

export function EnhancedA41() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll('[data-page]');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative size-full">
      <A41 />
      
      {/* Clickable overlay for Carousel Post */}
      <div
        className="absolute left-[30px] top-[590px] h-[17px] w-[510px] cursor-pointer transition-colors"
        onClick={() => scrollToSection(1)}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection(1)}
        aria-label="Go to Carousel Post"
      >
        {hoveredIndex === 0 && (
          <div className="absolute inset-0 bg-blue-600/10 rounded-sm" />
        )}
      </div>
      
      {/* Clickable overlay for Houdini Post */}
      <div
        className="absolute left-[30px] top-[611px] h-[17px] w-[510px] cursor-pointer transition-colors"
        onClick={() => scrollToSection(2)}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection(2)}
        aria-label="Go to Houdini Fun Fact Series"
      >
        {hoveredIndex === 1 && (
          <div className="absolute inset-0 bg-blue-600/10 rounded-sm" />
        )}
      </div>
      
      {/* Clickable overlay for Donation Appeal */}
      <div
        className="absolute left-[31px] top-[632px] h-[17px] w-[510px] cursor-pointer transition-colors"
        onClick={() => scrollToSection(3)}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection(3)}
        aria-label="Go to Donation Appeal"
      >
        {hoveredIndex === 2 && (
          <div className="absolute inset-0 bg-blue-600/10 rounded-sm" />
        )}
      </div>
      
      {/* Clickable overlay for Free Tour Invitation */}
      <div
        className="absolute left-[30px] top-[653px] h-[17px] w-[510px] cursor-pointer transition-colors"
        onClick={() => scrollToSection(4)}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection(4)}
        aria-label="Go to Free Tour Invitation"
      >
        {hoveredIndex === 3 && (
          <div className="absolute inset-0 bg-blue-600/10 rounded-sm" />
        )}
      </div>
    </div>
  );
}
