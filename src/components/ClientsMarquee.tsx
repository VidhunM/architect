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
  const keyframes = `
    @keyframes marquee-right {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <div style={{ width: "100%", background: "#fff", padding: "2rem 0", textAlign: "center" }}>
      {/* Inject the keyframes */}
      <style>{keyframes}</style>

      <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", fontWeight: "600" }}>
        Our Brand Partners
      </h2>

      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            animation: "marquee-right 20s linear infinite",
          }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              style={{ height: "4rem", width: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
