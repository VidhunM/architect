import React from "react";

const clientLogos = [
  "https://img.interiorcompany.com/interior/static/brandpartners/Asian-Paints.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Finolex.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Hettich.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Berger-Paint.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Faber.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Anchor.png?aio=w-320;",
  "https://img.interiorcompany.com/interior/static/brandpartners/Ebco.png?aio=w-320;",
];

const ClientsMarquee: React.FC = () => {
  // Calculate total width of all logos with gaps
  const totalWidth = clientLogos.length * (96 + 72); // logo width + gap

  const keyframes = `
    @keyframes seamlessMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${totalWidth / 2}px); }
    }
  `;

  return (
    <div className="w-full bg-white py-8 text-center">
      <style>{keyframes}</style>

      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
          Our Brand Partners
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max" style={{ animation: `seamlessMarquee ${clientLogos.length * 3}s linear infinite` }}>
          {/* Render logos 3 times to ensure seamless looping */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="mx-9 flex-shrink-0">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
