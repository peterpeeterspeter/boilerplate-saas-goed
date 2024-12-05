import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Demo users
const demoAdmin: User = {
  id: '1',
  email: 'admin@demo.com',
  name: 'Admin User',
  role: 'admin',
};

const demoUser: User = {
  id: '2',
  email: 'user@demo.com',
  name: 'Demo User',
  role: 'user',
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

// Initialize demo users
export const initializeDemoUsers = () => {
  // You would typically do this with a backend, but for demo purposes:
  localStorage.setItem('demo-admin', JSON.stringify(demoAdmin));
  localStorage.setItem('demo-user', JSON.stringify(demoUser));
};