import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/navbar';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Landing } from '@/pages/landing';
import { Login } from '@/pages/login';
import { Dashboard } from '@/pages/dashboard';
import { Profile } from '@/pages/profile';
import { Settings } from '@/pages/settings';
import { Admin } from '@/pages/admin';
import { AdminUsers } from '@/pages/admin/users';
import { AdminAnalytics } from '@/pages/admin/analytics';
import { AdminProfile } from '@/pages/admin/profile';
import { AdminSettings } from '@/pages/admin/settings';
import { initializeDemoUsers } from '@/lib/store';

const queryClient = new QueryClient();
initializeDemoUsers();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background text-foreground">
          <Router>
            <Routes>
              {/* Public routes */}
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Landing />
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    <Navbar />
                    <Login />
                  </>
                }
              />

              {/* User dashboard routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* Admin dashboard routes */}
              <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<Admin />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Routes>
            <Toaster position="top-center" theme="system" />
          </Router>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}