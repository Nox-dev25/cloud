"use client";

interface ClientLogosProps {
  transparent?: boolean;
}

export default function ClientLogos({ transparent }: ClientLogosProps) {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  return (
    <section
      className={`w-full py-4 flex flex-col items-center ${
        transparent ? "" : "bg-gray-900"
      }`}
    >
      <h2
        className={`text-1xl md:text-2xl font-medium mb-4 ${
          transparent ? "text-white/80" : "text-white"
        }`}
      >
        Trusted By
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center 
                       opacity-80 hover:opacity-100 transition-opacity"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
