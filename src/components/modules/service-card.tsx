'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/types';
import { Clock, IndianRupee } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['7.5deg', '-7.5deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-7.5deg', '7.5deg']
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden">
        {/* Hover glow effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#7A2828]/20 via-transparent to-[#D4A89F]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          animate={isHovered ? { opacity: [0, 1, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="bg-muted relative aspect-video w-full overflow-hidden">
          <motion.div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${service.image})`,
              imageRendering: 'crisp-edges',
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#7A2828]/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <CardHeader>
          <div className="flex items-center md:items-start text-center md:text-left justify-between gap-2">
            <CardTitle className="text-xl text-[#7A2828] transition-colors group-hover:text-[#A04848]">
              {service.name}
            </CardTitle>
            <motion.span
              className="inline-flex items-center rounded-full border border-transparent bg-[#F4E8E0] px-2.5 py-0.5 text-xs font-semibold text-[#7A2828] transition-all"
              whileHover={{ scale: 1.1 }}
            >
              {service.category}
            </motion.span>
          </div>
          <CardDescription className="line-clamp-2 text-[#5C3D3D]">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex items-center gap-4 text-sm text-[#5C3D3D]">
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="h-4 w-4 text-[#7A2828]" />
              <span>{service.duration} min</span>
            </motion.div>
          </div>
        </CardContent>

        <CardFooter>
          <Link href={`/services/${service.slug}`} className="w-full">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-gradient-to-r from-[#7A2828] to-[#A04848] text-white shadow-md transition-all hover:from-[#A04848] hover:to-[#7A2828] hover:shadow-lg">
                View Details
              </Button>
            </motion.div>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
