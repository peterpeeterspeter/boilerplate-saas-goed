import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/store';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo login logic
    if (email === 'admin@demo.com') {
      const admin = JSON.parse(localStorage.getItem('demo-admin') || '{}');
      setUser(admin);
      toast.success('Welcome back, Admin!');
      navigate('/admin');
    } else if (email === 'user@demo.com') {
      const user = JSON.parse(localStorage.getItem('demo-user') || '{}');
      setUser(user);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-md mx-auto"
      >
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Welcome Back</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Demo Credentials:
            <br />
            Admin: admin@demo.com
            <br />
            User: user@demo.com
            <br />
            (Any password will work)
          </div>
        </div>
      </motion.div>
    </div>
  );
}