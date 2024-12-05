import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/lib/store';
import { Card } from '@/components/ui/card';

const data = [
  { name: 'Jan', users: 400, revenue: 2400 },
  { name: 'Feb', users: 300, revenue: 1398 },
  { name: 'Mar', users: 600, revenue: 9800 },
  { name: 'Apr', users: 800, revenue: 3908 },
  { name: 'May', users: 500, revenue: 4800 },
  { name: 'Jun', users: 700, revenue: 3800 },
];

export function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">Active Users</h3>
              <p className="text-3xl font-bold">892</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">Revenue</h3>
              <p className="text-3xl font-bold">$45,678</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">Growth</h3>
              <p className="text-3xl font-bold">+24%</p>
            </Card>
          </div>

          <Card className="p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Performance Overview</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="users" stroke="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">User</th>
                    <th className="text-left p-4">Email</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">John Doe</td>
                    <td className="p-4">john@example.com</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                    <td className="p-4">2024-02-15</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">jane@example.com</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                    <td className="p-4">2024-02-14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}