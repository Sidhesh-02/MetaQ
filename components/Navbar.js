'use client';
import { useState, useEffect } from 'react';
import { Home, User, LayoutGrid, Book, ImageIcon, Menu, Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Load initial theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Sync theme changes to <html> and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Brand (Top-left) */}
      <div className="fixed top-5 left-5 z-50 text-black dark:text-white text-xl font-medium">MetaQ</div>

      {/* Dark Mode Toggle (Top-right on desktop) */}
      {!isMobile && (
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-5 right-5 z-50 cursor-pointer text-black dark:text-white bg-white/40 dark:bg-white/10 p-2 rounded-full border border-white/20"
        >
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      )}

      {/* Floating Navbar */}
      <nav
        className={clsx(
          'fixed z-40 backdrop-blur-lg bg-black/60 border border-white/10 text-white rounded-full shadow-lg px-6 py-2 flex items-center justify-between',
          isMobile
            ? 'bottom-4 left-1/2 -translate-x-1/2 w-[95%]'
            : 'top-4 left-1/2 -translate-x-1/2'
        )}
      >
        <div className="flex gap-4 items-center text-sm">
          <NavItem href="#home" icon={<Home size={18} />} />
          <NavItem href="#about" icon={<User size={18} />} />
          <NavItem href="#work" icon={<LayoutGrid size={18} />} />
          <NavItem href="#blog" icon={<Book size={18} />} />
          <NavItem href="#gallery" icon={<ImageIcon size={18} />} />
          {isMobile && (
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-white/10 transition border border-white/10"
            >
              {dark ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          )}
        </div>
      </nav>

      {/* Hamburger (Top-right on mobile) */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 text-white bg-white/10 p-2 rounded-full border border-white/20"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Slide-in Menu (Mobile only) */}
      {isMobile && isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-40 p-8 pt-20 text-white space-y-6 text-lg animate-slide-down">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        </div>
      )}
    </>
  );
}

function NavItem({ href, icon }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full hover:bg-white/10 transition border border-transparent hover:border-white/10"
    >
      {icon}
    </a>
  );
}
