import Link from 'next/link';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Logo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-primary"><Logo /></div>
            <span className="font-bold text-lg text-foreground ml-2">Project Vista</span>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center gap-1.5">
            Made with <Heart className="text-red-500 h-4 w-4" fill="currentColor" /> by Kushal Jaiswal
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
