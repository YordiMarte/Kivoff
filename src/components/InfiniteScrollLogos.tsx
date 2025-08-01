'use client'

const logos = [
  { name: "", logo: "/Infera.jsV.svg" },
  { name: "", logo: "/Veftro.svg" },
  { name: "", logo: "/Or.svg" },
  { name: "", logo: "/ff.svg" },

  { name: "", logo: "/Infera.jsV.svg" },
  { name: "", logo: "/Veftro.svg" },
  { name: "", logo: "/Or.svg" },
  { name: "", logo: "/ff.svg" },
]

export function InfiniteScrollLogos() {
  return (
    <div className="relative overflow-hidden bg-black py-8">
      {/* Gradiente izquierdo */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      
      {/* Gradiente derecho */}
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex gap-12 smooth-scroll">
        {/* Primera copia */}
        {logos.map((product, index) => (
          <div
            key={`first-${index}`}
            className="flex flex-col items-center justify-center min-w-[120px]"
          >
            <img
              src={product.logo}
              alt={product.name}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <span className="text-xs text-gray-400 mt-2 font-medium">
              {product.name}
            </span>
          </div>
        ))}
        
        {/* Segunda copia - duplicación perfecta */}
        {logos.map((product, index) => (
          <div
            key={`second-${index}`}
            className="flex flex-col items-center justify-center min-w-[120px]"
          >
            <img
              src={product.logo}
              alt={product.name}
              className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <span className="text-xs text-gray-400 mt-2 font-medium">
              {product.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .smooth-scroll {
          animation: smoothScroll 40s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        
        @keyframes smoothScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  )
} 