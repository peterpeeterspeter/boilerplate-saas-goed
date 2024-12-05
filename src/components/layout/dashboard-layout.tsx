import { Outlet } from 'react-router-dom';
import { DashboardNav } from './dashboard-nav';

export function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}