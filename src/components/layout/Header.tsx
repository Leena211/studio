
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UserCircle, Calculator, BookOpen, Sparkles, LayoutDashboard, HomeIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import React from 'react';
import { AppLogoIcon } from '@/components/icons/AppLogoIcon';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/topics', label: 'Topics', icon: BookOpen },
  { href: '/calculators', label: 'Calculators', icon: Calculator },
  { href: '/ai-financial-guide', label: 'AI Guide', icon: Sparkles },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/profile', label: 'Profile', icon: UserCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLink = ({ href, label, icon: Icon, isMobile }: { href: string; label: string; icon: LucideIcon; isMobile?: boolean }) => (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "justify-start text-base font-medium hover:bg-accent/10 hover:text-primary",
        pathname === href ? "text-primary font-semibold bg-primary/5" : "text-foreground/80",
        isMobile ? "w-full" : ""
      )}
    >
      <Link href={href} onClick={() => {
        if (isMobile) {
          setIsMobileMenuOpen(false);
        }
      }}>
        <Icon className="mr-2 h-5 w-5" />
        {label}
      </Link>
    </Button>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
          <AppLogoIcon className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">FinLit Teens</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="mb-4 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <AppLogoIcon className="h-8 w-8 text-primary" />
                  <span className="font-headline text-xl font-bold text-primary">FinLit Teens</span>
                </Link>
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} isMobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
