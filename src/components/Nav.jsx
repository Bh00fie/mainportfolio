import React from 'react';

// Slim sticky bar. Anchor links rather than routes: five sections on one page
// does not justify a router.
const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Nav({ theme, onToggleTheme }) {
  return (
    <header className="siteNav">
      <nav className="siteNavInner" aria-label="Main">
        <a className="siteNavName" href="#top">
          Abhinandan Thour
        </a>

        <ul className="siteNavLinks">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Inline SVG rather than an icon font: two icons is not worth a webfont. */}
        <button
          type="button"
          className="themeToggle"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="12" y1="1.8" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22.2" />
                <line x1="1.8" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22.2" y2="12" />
                <line x1="4.8" y1="4.8" x2="6.4" y2="6.4" />
                <line x1="17.6" y1="17.6" x2="19.2" y2="19.2" />
                <line x1="4.8" y1="19.2" x2="6.4" y2="17.6" />
                <line x1="17.6" y1="6.4" x2="19.2" y2="4.8" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 1 0 11 11Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Nav;
