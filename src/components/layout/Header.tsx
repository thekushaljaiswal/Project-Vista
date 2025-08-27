'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '../ui/button';

const Logo = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-6 flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-primary">
            <Logo />
            <span className="font-bold text-lg sm:inline-block">
              Project Vista
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
                <Link href="/">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/contribute">Contribute</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="#">About</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-4">
             <Button>Sign In</Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
