import { Facebook, Instagram, Linkedin } from "lucide-react";

type Props = {
  name: string;
  image: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  accent?: string; // e.g. "rgba(255,200,20,0.14)"  (neon-ish)
  logoScale?: number; // optional fine-tune per-logo (1 = default, 1.1 = larger)
};

export default function ChapterCard({
  name,
  image,
  instagram,
  facebook,
  linkedin,
  accent = "rgba(99,102,241,0.12)",
  logoScale = 1,
}: Props) {
  return (
    //      shadow-[0_8px_28px_rgba(2,6,23,0.2)]
    //  hover:shadow-[0_16px_48px_rgba(2,6,23,0.3)]
    <article
      className="group relative w-64 sm:w-72 aspect-[5/3] rounded-lg
                 overflow-hidden transition-transform duration-500 ease-out backdrop-blur-lg border border-white/20"
      aria-label={name}
      role="region"
    >
      {/* Full-card light surface so dark logos read well */}
      <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-lg" />
      {/* <div className="absolute inset-0 bg-white/85 rounded-2xl mix-blend-overlay pointer-events-none opacity-5" /> */}

      {/* Subtle accent tint (kept tasteful) */}
      {/* <div
        aria-hidden
        className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-700"
        style={{
          background: `
      radial-gradient(
        circle at 50% 50%, 
        ${accent.replace("0.12", "0.45")} 0%, 
        ${accent.replace("0.12", "0.18")} 25%, 
        ${accent.replace("0.12", "0.08")} 55%, 
        transparent 80%
      ),
      radial-gradient(
        circle at 50% 35%, 
        rgba(255,255,255,0.08) 0%, 
        transparent 80%
      )
    `,
          boxShadow: `inset 0 0 120px 40px rgba(255,255,255,0.01)`,
          mixBlendMode: "soft-light",
          opacity: 1,
        }}
      /> */}

      {/* Hairline glass edge (lighter than before) */}
      <div className="absolute inset-0 rounded-lg ring-1 ring-white/[0.07] pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-5 pt-0 pb-9">
        <div
          className="flex items-center justify-center pt-0"
          style={{
            width: "90%",
            height: "72%",
            transform: `scale(${logoScale})`,
          }}
        >
          <img
            src={`/images/logos/${image}`}
            alt={`${name} logo`}
            className="max-w-full max-h-full object-contain
                       transition-transform duration-400 group-hover:scale-[1.04]"
            draggable={false}
          />
        </div>
      </div>

      {/* Hover rim (very soft) */}
      <div
        aria-hidden
        className="absolute -inset-0.5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          boxShadow: `0 0 36px 6px ${accent}`,
          filter: "blur(10px)",
        }}
      />

      {/* Socials – always visible, compact pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div
          className="flex items-center gap-3 px-3 py-1.5 rounded-full
                     bg-black/5 border border-white/10 backdrop-blur-sm
                     shadow-[0_6px_18px_rgba(2,6,23,0.55)]"
          role="group"
          aria-label={`${name} social links`}
        >
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} Instagram`}
              className="text-white/90 hover:text-pink-400 transition-colors"
            >
              <Instagram size={18} />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} Facebook`}
              className="text-white/90 hover:text-blue-400 transition-colors"
            >
              <Facebook size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} LinkedIn`}
              className="text-white/90 hover:text-sky-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>

      <span className="sr-only">{name}</span>
    </article>
  );
}
