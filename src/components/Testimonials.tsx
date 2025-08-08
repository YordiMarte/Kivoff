import { testimonials } from '@/lib/data';
import TestimonialCard from './TestimonialCard';
import React from 'react';

// Keyframes para scroll infinito
const scrollLeft = {
  animation: 'scrollLeft 40s linear infinite',
};
const scrollRight = {
  animation: 'scrollRight 40s linear infinite',
};

export default function Testimonials() {
  // Duplicar para efecto seamless
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-black py-24 overflow-hidden relative">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the community
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feedback from the community of developers using kivoff
          </p>
        </div>

        {/* Primera fila: izquierda a derecha */}
        <div className="relative mb-8">
          <div className="overflow-x-hidden w-full">
            <div style={scrollLeft} className="flex w-[200%]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          {/* Segunda fila: derecha a izquierda */}
          <div className="overflow-x-hidden w-full mt-8">
            <div style={scrollRight} className="flex w-[200%]">
              {duplicatedTestimonials.slice().reverse().map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          {/* Gradientes laterales mejorados */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black/90 via-black/60 to-transparent pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
}