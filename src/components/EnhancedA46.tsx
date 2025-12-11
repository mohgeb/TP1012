import A46 from '../imports/A46';
import { SparkleEffect } from './Sparkle';

export function EnhancedA46() {
  return (
    <div className="relative w-full h-full">
      <A46 />

      {/* Sparkle effect positioned over the text */}
      <div className="absolute left-[72px] top-[406px] h-[25px] w-[450px] pointer-events-none z-50">
        <SparkleEffect />
      </div>
    </div>
  );
}
