import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/lib/store';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <nav className="fixed w-full md:bg-background/95 md:backdrop-blur supports-[backdrop-filter]:md:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            ModernSaaS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <ThemeToggle />
            {user ? (
              <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden bg-background border-b"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        initial="closed"
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/features"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          {user ? (
            <Link
              to={user.role === 'admin' ? '/admin' : '/dashboard'}
              className="block px-3 py-2"
            >
              <Button className="w-full">Dashboard</Button>
            </Link>
          ) : (
            <Link to="/login" className="block px-3 py-2">
              <Button className="w-full">Sign In</Button>
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
