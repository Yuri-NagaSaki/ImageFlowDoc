import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="56" height="56" rx="12" ry="12" fill="url(#gradient)" transform="rotate(12, 32, 32)" />
          <path d="M20 40l8-8a4 4 0 014 0L44 40m-4-4l3-3a4 4 0 014 0L52 38m-12-12h.02M22 44h20a4 4 0 004-4V24a4 4 0 00-4-4H22a4 4 0 00-4 4v16a4 4 0 004 4z" 
                stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        ImageFlow
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
