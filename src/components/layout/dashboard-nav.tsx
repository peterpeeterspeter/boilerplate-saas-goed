import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Settings,
  UserCircle,
  Users,
  BarChart3,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const adminNavItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { icon: UserCircle, label: 'Profile', path: '/admin/profile' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const userNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: UserCircle, label: 'Profile', path: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export function DashboardNav() {
  const location = useLocation();
  const { user, setUser } = useAuth();
  const navItems = user?.role === 'admin' ? adminNavItems : userNavItems;

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="h-screen border-r flex flex-col bg-background">
      <div className="p-6 flex items-center justify-between border-b">
        <Link to="/" className="text-xl font-bold">
          ModernSaaS
        </Link>
        <ThemeToggle />
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors relative overflow-hidden',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute left-0 w-1 h-6 bg-primary-foreground rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-accent"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}