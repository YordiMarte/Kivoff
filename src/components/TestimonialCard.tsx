import React from 'react';

// ----------------- Types -----------------
export type Status = 'online' | 'recently_active' | 'offline';

export interface Testimonial {
  avatar: string;
  name: string;
  handle: string;
  text: string;
  lastSeen: string;
}

// ----------------- Helpers -----------------
export const getActivityStatus = (lastSeen: string): Status => {
  const now = new Date();
  const lastSeenDate = new Date(lastSeen);
  const minutesDiff = (now.getTime() - lastSeenDate.getTime()) / (1000 * 60);

  if (minutesDiff < 5) return 'online';
  if (minutesDiff < 30) return 'recently_active';
  return 'offline';
};

const statusColors: Record<Status, string> = {
  online: 'bg-green-500',
  recently_active: 'bg-yellow-400',
  offline: 'bg-gray-500',
};

// ----------------- Card -----------------
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const status = getActivityStatus(testimonial.lastSeen);

  return (
    <div className="bg-[#18181b] backdrop-blur p-6 rounded-2xl border border-[#00DC82] hover:border-gray-700/60 transition-all duration-300 flex-shrink-0 w-80 mx-4 flex flex-col min-h-[260px]">
      <div className="flex items-center gap-3 mb-4 relative">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover shadow"
        />
        {/* Status dot */}
        <span
          className={`absolute bottom-2 left-10 w-3 h-3 rounded-full border border-black ${statusColors[status]}`}
          title={status}
        ></span>

        <div className="flex flex-col">
          <span className="text-white font-semibold text-base leading-tight">{testimonial.name}</span>
          <span className="text-xs text-gray-400">{testimonial.handle}</span>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mt-2 whitespace-pre-line">
        {testimonial.text}
      </p>
    </div>
  );
};

// ----------------- Testimonials List -----------------
import { testimonialsData } from '../lib/data';

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="bg-black py-24 overflow-hidden relative">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-35%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-35%); }
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

        {/* Row 1 */}
        <div className="overflow-x-hidden w-full">
          <div
            className="flex w-max animate-[scrollLeft_40s_linear_infinite]"
          >
            {duplicatedTestimonials.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-x-hidden w-full mt-12">
          <div
            className="flex w-max animate-[scrollRight_40s_linear_infinite]"
          >
            {duplicatedTestimonials.slice().reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
}
