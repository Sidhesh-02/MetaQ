'use client';
import { useState, useEffect } from 'react';
import { Home, LayoutGrid, Book, ImageIcon, Menu, Moon, Sun, X } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed  top-1 md:top-3 left-0 right-0 z-30 bg-transparent flex justify-between items-center px-6 md:px-10 py-4 transition-colors duration-300",
        )}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/metaq.png"
            className='rounded-full'
            alt="MetaQ"
            width={40}
            height={40}
            priority
          />
        </Link>

      </div>


      {/* Floating Navbar */}
      <nav
        className={clsx(
          'fixed z-40 backdrop-blur-lg bg-black/60 border border-white/10 text-white rounded-full shadow-lg py-2 flex items-center',
          isMobile
            ? 'bottom-4 left-1/2 -translate-x-1/2 px-3'
            : 'top-4 left-1/2 -translate-x-1/2 px-4'
        )}
      >
        <div className="flex gap-3 items-center text-sm">
          <NavItem href="/" icon={<Home size={18} />} title={"Home"} />
          <NavItem href="/work" icon={<LayoutGrid size={18} />} title={"Work"} />
        </div>
      </nav>

      {/* Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 p-2 "
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-6 animate-slide-down">
          <MobileNavItem icon={<Home size={20} />} text="Home" href="/" onClick={() => setIsOpen(false)} />
          <MobileNavItem icon={<LayoutGrid size={20} />} text="Work" href="/work" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}

function NavItem({ href, icon, title }) {
  return (
    <a
      href={href}
      className="p-2 flex rounded-full hover:bg-white/10 transition border border-transparent hover:border-white/10"
    >
      {icon} <span className='ml-4 hidden md:block'>{title}</span>
    </a>
  );
}

function MobileNavItem({ icon, text, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition text-white text-lg"
    >
      {icon} {text}
    </a>
  );
}
