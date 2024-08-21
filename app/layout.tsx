import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/ui/Providers'
import { siteConfig } from '@/config/site'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ui/theme-provider'
import SiteHeader from '@/components/FrontEnd/Navbar'
import Footer from '@/components/FrontEnd/Footer'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        >
           <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
             >
              <SiteHeader />
              {children}
              <Footer />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}