'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '../ui/button';

const GfgLogo = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2503 18.2914L6.22363 12.6457L11.2503 7.00003L13.1205 8.65717L9.96403 12.2572L10.0212 12.2857L10.0497 12.3001L13.1205 15.6343L11.2503 18.2914Z" fill="currentColor"/>
        <path d="M14.9997 18.2914L13.1295 15.6343L16.1917 12.2914L14.9997 11.0057L11.8712 14.5429L11.8283 14.5143L11.8085 14.5009L9.96403 12.2572L13.1205 8.65717L14.9997 7.00003L19.9977 12.6457L14.9997 18.2914Z" fill="currentColor"/>
    </svg>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-6 flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-primary">
            <GfgLogo />
            <span className="font-bold text-lg sm:inline-block">
              Geeks for Geeks
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
                <Link href="/">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="#">Courses</Link>
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
