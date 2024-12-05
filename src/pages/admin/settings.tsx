import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Moon, Sun, Laptop, Shield, Mail, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AdminSettings() {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Settings</h1>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">System Appearance</h2>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>System Notifications</span>
                  </div>
                  <Button
                    variant={notifications ? 'default' : 'outline'}
                    onClick={() => setNotifications(!notifications)}
                  >
                    {notifications ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Digest</span>
                  </div>
                  <Button
                    variant={emailDigest ? 'default' : 'outline'}
                    onClick={() => setEmailDigest(!emailDigest)}
                  >
                    {emailDigest ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">System Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <div>
                      <span className="block">Maintenance Mode</span>
                      <span className="text-sm text-muted-foreground">
                        Temporarily disable user access
                      </span>
                    </div>
                  </div>
                  <Button
                    variant={maintenanceMode ? 'default' : 'outline'}
                    onClick={() => setMaintenanceMode(!maintenanceMode)}
                  >
                    {maintenanceMode ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Security</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Two-Factor Authentication</span>
                </div>
                <Button variant="outline">Configure 2FA</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-destructive">Danger Zone</h2>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  These actions are irreversible. Please proceed with caution.
                </p>
                <div className="flex gap-4">
                  <Button variant="destructive">Reset System</Button>
                  <Button variant="destructive">Purge Data</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}