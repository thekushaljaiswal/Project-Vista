import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const GfgLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2503 18.2914L6.22363 12.6457L11.2503 7.00003L13.1205 8.65717L9.96403 12.2572L10.0212 12.2857L10.0497 12.3001L13.1205 15.6343L11.2503 18.2914Z" fill="currentColor"/>
        <path d="M14.9997 18.2914L13.1295 15.6343L16.1917 12.2914L14.9997 11.0057L11.8712 14.5429L11.8283 14.5143L11.8085 14.5009L9.96403 12.2572L13.1205 8.65717L14.9997 7.00003L19.9977 12.6457L14.9997 18.2914Z" fill="currentColor"/>
    </svg>
)


export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-primary"><GfgLogo /></div>
            <span className="font-bold text-lg text-foreground ml-2">Geeks for Geeks</span>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Geeks for Geeks. All Rights Reserved.</p>
            <p>A Computer Science Portal for Geeks.</p>
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
