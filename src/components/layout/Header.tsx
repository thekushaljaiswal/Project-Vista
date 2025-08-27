'use client';

import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Project Vista
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
                <Link href="/">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="#">About</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="#">Contact</Link>
            </Button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
