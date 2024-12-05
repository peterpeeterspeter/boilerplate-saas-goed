import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useAuth } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export function Profile() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully');
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile</h1>

          <Card className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {user?.name.charAt(0)}
                    </span>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2"
                    type="button"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      value={user?.email}
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-muted"
                      disabled
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Role</label>
                    <input
                      type="text"
                      value={user?.role}
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-muted capitalize"
                      disabled
                    />
                  </div>

                  <Button type="submit">Save Changes</Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}