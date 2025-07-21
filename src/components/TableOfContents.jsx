import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const TableOfContents = ({ headings = [] }) => {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      }
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed right-4 top-24 z-40 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        aria-label="Toggle table of contents"
      >
        {isOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
      </button>

      {/* TOC Container */}
      <aside
        className={`
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          fixed lg:sticky top-24 left-0 z-30
          w-64 lg:w-72 xl:w-80
          h-[calc(100vh-6rem)] 
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-in-out
          lg:block flex-shrink-0
        `}
      >
        <nav className="p-4 lg:p-6 h-full overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            On this page
          </h3>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              const isH1 = heading.level === 1;
              const isH2 = heading.level === 2;
              const isH3 = heading.level === 3;
              
              return (
                <li
                  key={heading.id}
                  className={`
                    ${isH2 ? 'ml-4' : ''}
                    ${isH3 ? 'ml-8' : ''}
                  `}
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`
                      block py-1.5 px-3 rounded-md transition-all duration-200
                      ${isActive 
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-medium border-l-2 border-primary-500' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                      ${isH1 ? 'font-semibold' : ''}
                    `}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;