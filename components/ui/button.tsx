import type { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

export default function Button({ text, className, id }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById(id || "counter");

    if (target) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`inline-block text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[rgba(132,0,255,0.5)] focus:ring-offset-2 focus:ring-offset-[#060010] transition-all duration-300 ${
        className ?? ""
      }`}
      aria-label={`Scroll to ${id || "counter"} section`}
    >
      <div className="group relative flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-[#060010] border border-[#392e4e] rounded-xl text-white overflow-visible transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(46,24,78,0.4)] hover:shadow-[0_0_20px_rgba(132,0,255,0.3)] hover:scale-105">
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-xl bg-gradient-radial from-[rgba(132,0,255,0.8)] via-[rgba(132,0,255,0.4)] to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "subtract",
            padding: "2px", // Thinner padding for a refined glow
          }}
        ></div>
        {/* Text */}
        <p className="m-0 font-normal z-10 drop-shadow-[0_0_4px_rgba(132,0,255,0.3)] transition-transform duration-300 group-hover:scale-105">
          {text}
        </p>
      </div>
    </a>
  );
}
