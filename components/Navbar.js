'use client';
import { useState, useEffect } from 'react';
import { Home, LayoutGrid, Book, ImageIcon, Menu, Moon, Sun, X } from 'lucide-react';
import clsx from 'clsx';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Sync theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Brand */}
      <div className="fixed top-5 left-5 z-50 text-black dark:text-white text-xl font-medium">MetaQ</div>
      
      {/* Dark Toggle Desktop */}
      {!isMobile && (
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-5 right-5 z-50 cursor-pointer text-black dark:text-white bg-white/40 dark:bg-white/10 p-2 rounded-full border border-white/20"
        >
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      )}

      {/* Floating Navbar */}
      {/* <nav
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
          <NavItem href="#blog" icon={<Book size={18} />} title={"Blog"} />
          <NavItem href="#gallery" icon={<ImageIcon size={18} />} title={"Gallery"} />
          {isMobile && (
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-white/10 transition border border-white/10"
            >
              {dark ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          )}
        </div>
      </nav> */}

      {/* Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-50 text-white bg-black p-2 rounded-full border border-white/20"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-6 animate-slide-down">
          <MobileNavItem icon={<Home size={20} />} text="Home" href="#home" onClick={() => setIsOpen(false)} />
          <MobileNavItem icon={<LayoutGrid size={20} />} text="Work" href="#work" onClick={() => setIsOpen(false)} />
          <MobileNavItem icon={<Book size={20} />} text="Blog" href="#blog" onClick={() => setIsOpen(false)} />
          <MobileNavItem icon={<ImageIcon size={20} />} text="Gallery" href="#gallery" onClick={() => setIsOpen(false)} />
          

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
