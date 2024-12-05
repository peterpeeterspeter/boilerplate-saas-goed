import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';

const data = [
  { name: 'Jan', users: 400, revenue: 2400, churn: 20 },
  { name: 'Feb', users: 300, revenue: 1398, churn: 18 },
  { name: 'Mar', users: 600, revenue: 9800, churn: 25 },
  { name: 'Apr', users: 800, revenue: 3908, churn: 22 },
  { name: 'May', users: 500, revenue: 4800, churn: 15 },
  { name: 'Jun', users: 700, revenue: 3800, churn: 19 },
];

export function AdminAnalytics() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Growth</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Revenue</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Churn Rate</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="churn"
                    stroke="#ef4444"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Active Users
                </h3>
                <p className="text-2xl font-bold mt-1">1,234</p>
                <span className="text-sm text-green-600">↑ 12%</span>
              </div>
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </h3>
                <p className="text-2xl font-bold mt-1">$45,678</p>
                <span className="text-sm text-green-600">↑ 8%</span>
              </div>
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Avg. Session
                </h3>
                <p className="text-2xl font-bold mt-1">24m</p>
                <span className="text-sm text-green-600">↑ 7%</span>
              </div>
              <div className="p-4 bg-muted/10 rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Bounce Rate
                </h3>
                <p className="text-2xl font-bold mt-1">32%</p>
                <span className="text-sm text-red-600">↓ 3%</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}