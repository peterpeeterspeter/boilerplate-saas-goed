import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Appearance</h2>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  className="justify-start gap-2"
                  onClick={() => setTheme('light')}
                >
                  <Sun className="h-4 w-4" />
                  Light
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  className="justify-start gap-2"
                  onClick={() => setTheme('dark')}
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  className="justify-start gap-2"
                  onClick={() => setTheme('system')}
                >
                  <Laptop className="h-4 w-4" />
                  System
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span>Push Notifications</span>
                </div>
                <Button
                  variant={notifications ? 'default' : 'outline'}
                  onClick={() => setNotifications(!notifications)}
                >
                  {notifications ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>
              <Button variant="destructive">Delete Account</Button>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}