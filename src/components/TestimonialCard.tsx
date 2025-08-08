import React from 'react';


interface Testimonial {
  avatar: string;
  name: string;
  handle: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className=" bg-[#18181b] backdrop-blur p-6 rounded-2xl border border-gray-300 hover:border-gray-700/60 transition-all duration-300 flex-shrink-0 w-80 mx-4 flex flex-col min-h-[260px]">
    <div className="flex items-center gap-3 mb-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full border-2 border-gray-700 object-cover shadow"
      />
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

export default TestimonialCard;
