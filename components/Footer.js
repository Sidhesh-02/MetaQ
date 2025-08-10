'use client';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-black text-zinc-700 dark:text-zinc-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        {/* Branding */}
        <h3 className="text-lg font-semibold text-black dark:text-white">
          MetaQ ❤️ 
        </h3>
        {/* Bottom */}
        <div className="mt-2 text-s text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} MetaQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
