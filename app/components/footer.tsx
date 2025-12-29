'use client';
import Image from "next/image";
import { Facebook, Instagram } from 'lucide-react';

export default function FooterGlow() {
  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61584510311404' },
    { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/iqbalstructuralsolutions/' },
  ];

  const contactInfo = [
    { text: 'contact@iqbalstructuralsolutions', href: 'mailto:contact@iqbalstructuralsolutions' },
    { text: '+92 3213333792', href: 'tel:+923213333792' },
    { text: 'Office#113, mall of Faisalabad, canal road, Faisalabad', href: 'https://www.google.com/maps/search/Office#113,+mall+of+Faisalabad,+Kashmir+pul+canal+road,+Faisalabad' },
  ];

  return (
    <footer className="relative mt-20 w-full overflow-hidden pt-16 pb-8">
      {/* Global Glass Style */}
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(6px) saturate(180%);
          background: linear-gradient(180deg, rgba(255,250,240,0.9) 0%, rgba(255,228,196,0.9) 100%);
          border: 1px solid rgba(244,120,63,0.15);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Gradient + Glow Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-50" />
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-orange-400/40 blur-[120px]" />
        <div className="absolute right-1/4 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-orange-300/35 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,120,63,0.18),transparent_65%)]" />
      </div>
{/* Footer Content */}
<div className="glass relative z-10 mx-auto flex max-w-6xl flex-col items-center md:items-start gap-2 md:gap-25 px-4  md:py-12 md:flex-row md:justify-between">
  
  {/* Brand */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <a href="/" className=" flex items-center ">
      <Image
        src="/logo.png"
        alt="SteelBuild Logo"
        width={150}
        height={50}
        className="object-contain"
      />
    </a>
   
  </div>

  {/* Links */}
  <nav className="flex w-full flex-col gap-10 md:gap-40 items-center md:items-start text-center md:text-left md:flex-row md:w-auto">
    
    {/* Company Links */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
        Company
      </div>
      <ul className="space-y-2 text-sm text-gray-700 flex flex-col items-center md:items-start">
        <li><a href="/#about" className="hover:text-orange-600 transition">About Us</a></li>
        <li><a href="/#services" className="hover:text-orange-600 transition">Services</a></li>
        <li><a href="/projects" className="hover:text-orange-600 transition">Projects</a></li>
        <li><a href="/contact" className="hover:text-orange-600 transition">Contact us</a></li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
        Follow Us
      </div>
      <ul className="space-y-2 text-sm text-gray-700 flex flex-col items-center md:items-start">
        {socialLinks.map(({ icon: Icon, name, href }) => (
          <li key={name} className="flex">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-orange-600 transition"
            >
              <Icon className="w-5 h-5 text-gray-700" />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
        Contact Us
      </div>
      <ul className="space-y-2 text-sm text-gray-700 flex flex-col items-center md:items-start">
        {contactInfo.map(({ text, href }) => (
          <li key={text}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:text-orange-600 transition block max-w-2xs break-words"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </nav>
</div>


      {/* Bottom */}
      <div className="relative z-10 mt-10 text-center text-xs text-gray-600">
        © 2025 Iqbal Structural Solution. All rights reserved.
      </div>
    </footer>
  );
}
