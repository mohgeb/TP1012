import { motion } from 'motion/react';
import { EnhancedA41 } from "./components/EnhancedA41";
import { EnhancedA42 } from "./components/EnhancedA42";
import { EnhancedA43 } from "./components/EnhancedA43";
import { EnhancedA44 } from "./components/EnhancedA44";
import { EnhancedA45 } from "./components/EnhancedA45";
import { EnhancedA46 } from "./components/EnhancedA46";

// 1. The Inner Card Animation
// This handles the Scale, Shadow, and Z-Index pop when the specific page is focused.
const AnimatedPageCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ 
        scale: 0.85, 
        opacity: 0.5,
        y: 50, // Starts slightly lower
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      }}
      whileInView={{ 
        scale: 1, // Full size
        opacity: 1,
        y: 0,
        zIndex: 10,
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.5)" // Deep shadow
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1
      }}
      // The viewport trigger is set to center. 
      // The animation triggers when the element is predominantly in the center.
      viewport={{ 
        amount: 0.6, // 60% of the item must be visible
        margin: "0px 0px -100px 0px" // Adjustment to trigger timing
      }}
      className="relative h-[842px] w-[595px] overflow-hidden rounded-lg bg-white"
    >
      {children}
    </motion.div>
  );
};

// 2. The Page Section Wrapper
// This forces the browser to treat this section as a "Snap Point"
const SnapSection = ({ children }: { children: React.ReactNode }) => {
  return (
    // h-screen makes the container exactly the height of the viewport
    // snap-center tells the browser: "When scrolling stops, align this div to the center"
    <div className="flex h-screen w-full shrink-0 snap-center items-center justify-center p-8">
      <AnimatedPageCard>
        {children}
      </AnimatedPageCard>
    </div>
  );
};

export default function App() {
  return (
    // Main Scroll Container
    // h-screen: Locks the height to the viewport
    // overflow-y-scroll: Enables scrolling within this container
    // snap-y snap-mandatory: Enforces the physics where scroll always lands on a child
    // scroll-smooth: Makes the movement between snaps fluid
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gray-100">
      
      {/* Page 1 */}
      <SnapSection>
        <EnhancedA41 />
      </SnapSection>

      {/* Page 2 */}
      <SnapSection>
        <EnhancedA42 />
      </SnapSection>

      {/* Page 3 */}
      <SnapSection>
        <EnhancedA43 />
      </SnapSection>

      {/* Page 4 */}
      <SnapSection>
        <EnhancedA44 />
      </SnapSection>

      {/* Page 5 */}
      <SnapSection>
        <EnhancedA45 />
      </SnapSection>

      {/* Page 6 */}
      <SnapSection>
        <EnhancedA46 />
      </SnapSection>

    </div>
  );
}