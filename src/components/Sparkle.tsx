import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
}

export function SparkleEffect() {
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  useEffect(() => {
    const particles: SparkleParticle[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * -100 - 30,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 2,
      });
    }
    setSparkles(particles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible z-50">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: sparkle.x,
            y: sparkle.y,
            opacity: [0, 1, 1, 0],
            scale: [0, sparkle.scale, sparkle.scale, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}

