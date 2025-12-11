import { useState } from 'react';
import { motion } from 'motion/react';
import A42 from '../imports/A42';
import { Lightbox } from './Lightbox';
import imgGroupPhoto from 'figma:asset/bffd6dde68c340d4a98f5380e2466f6d0c352584.png';
import imgCarlos from 'figma:asset/97eee4a7629f2142b8850f45f6dbc85c594943eb.png';
import imgMargie from 'figma:asset/84314ee0e0b67dadc742711efab04c521c8ceb88.png';
import imgVolunteer from 'figma:asset/222c9ed293f2fd6d5f804104540c272e9124e09a.png';

const items = [
  {
    id: 1,
    title: 'Slide 1 - Group Photo',
    // We use a React Fragment (<>) to group the HTML tags
    description: (
      <>
        <p className="mb-3 font-semibold text-lg">
          The community is stepping up!
        </p>
        <p className="mb-3">
          Thank you to the <strong>Silver Frogs</strong> for joining us for an exclusive tour and learning how we are turning history's shadow into a beacon of healing. This powerful group photo captures the moment when community members came together at the historic site.
        </p>
        <p className="mb-3">
          You can see the enthusiasm and commitment in their faces as they stand before the building that will become the <strong>Fred Rouse Center for Arts and Community Healing</strong>.
        </p>
        <p className="mb-4">
          The tour was transformative, opening eyes to both the dark history and the bright future of this landmark. Members learned about the building's past as a KKK auditorium and its rebirth as a center for healing and community arts.
        </p>
        <p className="italic text-indigo-600 font-medium">
          #WeTransform — transforming spaces of exclusion into beacons of belonging.
        </p>
      </>
    ),
    position: { top: 285, left: 322, width: 35, height: 12 },
    imageSrc: imgGroupPhoto,
  },
  {
    id: 2,
    title: 'Slide 2 - Carlos Gonzalez-Jaime',
    description: (
      <>
        <p className="mb-3">
          Our vision is brought to life by leaders like <strong>Carlos Gonzalez-Jaime</strong>. As the visionary behind the <em>Transform 1012</em> project, Carlos stands as a testament to the power of reimagining spaces for community healing.
        </p>
        <p className="mb-3">
          In this slide, Carlos is captured mid-presentation, explaining how this center will return vital resources to marginalized communities that have long been underserved.
        </p>
        <p className="mb-2 font-semibold">The Center's Mission:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Transform a former symbol of hatred into a vibrant hub.</li>
          <li>Provide arts education and cultural programming.</li>
          <li>Practice <strong>reparative justice</strong> by actively working to repair harm through positive community investment.</li>
        </ul>
        <p>
          His leadership represents the bridge between acknowledging difficult history and building an inspiring future.
        </p>
      </>
    ),
    position: { top: 371, left: 322, width: 35, height: 12 },
    imageSrc: imgCarlos,
  },
  {
    id: 3,
    title: 'Slide 3 - Margie Drake and the Silver Frogs',
    description: (
      <>
        <p className="mb-3">
          <strong>Margie Drake</strong> and the <strong>Silver Frogs</strong> are diving deep into the history and future of this landmark.
        </p>
        <p className="mb-3">
          This slide captures Margie, a prominent leader within the organization, engaging with the tour. The Silver Frogs (dedicated to lifelong learning for adults 50+) found perfect alignment with our mission.
        </p>
        <p className="mb-3">
          Margie and her fellow members expressed excitement about the Center's plans to host:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Lectures and special events</li>
          <li>Continuing education courses tailored for their demographic</li>
          <li>Intergenerational dialogue sessions</li>
        </ul>
        <p>
          Her enthusiasm represents the growing community support for this transformative project, proving how different community groups can find meaningful connection to this space of healing.
        </p>
      </>
    ),
    position: { top: 457, left: 322, width: 35, height: 12 },
    imageSrc: imgMargie,
  },
  {
    id: 4,
    title: 'Slide 4 - Light and Volunteer Call to Action',
    description: (
      <>
        <p className="mb-3 font-bold text-xl text-amber-600">
          The sun is rising on a new era.
        </p>
        <p className="mb-4">
          Ready to help shine a light on forgotten history? <strong>VOLUNTEER NOW!</strong>
        </p>
        <p className="mb-3">
          This powerful slide features natural light streaming through the building's windows—a metaphor for bringing light to dark history. Sunbeams pierce through the historic architecture, highlighting the building's beautiful bones and its potential for renewal.
        </p>
        <p className="mb-2 font-semibold">Volunteers are needed for:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Tour Guides:</strong> To share the building's history.</li>
          <li><strong>Event Coordinators:</strong> To manage community programs.</li>
          <li><strong>Restoration Helpers:</strong> To preserve architectural features.</li>
          <li><strong>Content Creators:</strong> To document the transformation.</li>
          <li><strong>Outreach Specialists:</strong> To connect with diverse communities.</li>
        </ul>
        <p className="italic font-medium">
          This is more than a building renovation; it's a community resurrection.
        </p>
      </>
    ),
    position: { top: 543, left: 322, width: 35, height: 12 },
    imageSrc: imgVolunteer,
  },
];

export function EnhancedA42() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageOpen, setImageOpen] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const handleImageClick = () => {
    setImageOpen(true);
  };

  // getItemStyle function removed as it is no longer needed

  return (
    <div className="relative size-full">
      {/* Removed style={getItemStyle(1)} from this div */}
      <div>
        <A42 />
      </div>
      
      {/* Hoverable and clickable items */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute cursor-pointer z-10"
          style={{
            top: item.position.top,
            left: item.position.left,
            width: item.position.width,
            height: item.position.height,
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
          }}
          onHoverStart={() => setHoveredItemId(item.id)}
          onHoverEnd={() => setHoveredItemId(null)}
          onClick={() => handleItemClick(item)}
        />
      ))}

      {/* Clickable image area */}
      <div
        className="absolute left-[-57px] top-[223px] h-[583px] w-[394px] cursor-pointer"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
        aria-label="View full image"
      />

      {/* Item details lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={selectedItem?.title}
        description={selectedItem?.description}
        imageSrc={selectedItem?.imageSrc}
        useGenieEffect
      />

      {/* Image lightbox */}
      <Lightbox
        isOpen={imageOpen}
        onClose={() => setImageOpen(false)}
        imageSrc={imgGroupPhoto}
        title="Silver Frogs Tour"
        description="The community is stepping up! Thank you to the @SilverFrogs for joining us for an exclusive tour and learning how we are turning history's shadow into a beacon of healing. This powerful group photo captures the moment when community members, led by the Silver Frogs organization, came together at the historic site. You can see the enthusiasm and commitment in their faces as they stand before the building that will become the Fred Rouse Center for Arts and Community Healing. The tour was transformative, opening eyes to both the dark history and the bright future of this landmark. Members learned about the building's past as a KKK auditorium and its rebirth as a center for healing and community arts. This image represents hope, unity, and the power of collective action in transforming spaces of exclusion into beacons of belonging. #WeTransform."
        useGenieEffect
      />
    </div>
  );
}