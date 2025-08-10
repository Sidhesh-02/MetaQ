'use client';

import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-black text-zinc-700 dark:text-zinc-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        
        {/* Branding */}
        <h3 className="text-lg font-semibold text-black dark:text-white">
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
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
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
      className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-indigo-500 dark:hover:bg-indigo-500 transition-colors duration-300"
    >
      {icon}
    </a>
  );
}
