'use client';

import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black py-10 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(58,0,94,0.4)] via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        
        {/* Branding */}
        <h3 className="text-lg font-semibold text-white">
          MetaQ ❤️
        </h3>

        {/* Social Icons */}
        <div className="flex gap-5">
          <SocialLink href="https://github.com/Sidhesh-02" icon={<Github size={20} />} />
          <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
          <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
        </div>

        {/* Bottom Text */}
        <div className="mt-3 text-sm text-zinc-500 ">
          &copy; {new Date().getFullYear()} MetaQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white border border-zinc-200  text-zinc-700 hover:text-white hover:bg-indigo-500  transition-colors duration-300"
    >
      {icon}
    </a>
  );
}
