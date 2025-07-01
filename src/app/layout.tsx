import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AABAR - Child Care Management Platform',
  description: 'Enhancing child safety and communication through innovative AI-powered solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    animation: {
                      'fade-in-up': 'fadeInUp 0.6s ease-out',
                    },
                    keyframes: {
                      fadeInUp: {
                        '0%': {
                          opacity: '0',
                          transform: 'translateY(30px)',
                        },
                        '100%': {
                          opacity: '1',
                          transform: 'translateY(0)',
                        },
                      },
                    },
                  },
                },
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
