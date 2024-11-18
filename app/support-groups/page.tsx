"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, MapPin } from 'lucide-react';

const groups = [
  {
    name: "Anxiety Support Circle",
    schedule: "Every Monday, 7:00 PM",
    location: "Online via Zoom",
    facilitator: "Dr. Emily Watson",
    participants: "8-12 members",
    description: "A safe space to share experiences and learn coping strategies for anxiety.",
    tags: ["Anxiety", "Stress Management"]
  },
  {
    name: "Depression Recovery Group",
    schedule: "Wednesdays, 6:30 PM",
    location: "Community Center",
    facilitator: "Dr. James Miller",
    participants: "6-10 members",
    description: "Supporting each other through depression recovery with professional guidance.",
    tags: ["Depression", "Recovery"]
  },
  {
    name: "Mindfulness Practice Group",
    schedule: "Saturdays, 10:00 AM",
    location: "Online via Zoom",
    facilitator: "Sarah Chen, LMFT",
    participants: "5-15 members",
    description: "Weekly mindfulness meditation and discussion group.",
    tags: ["Mindfulness", "Meditation"]
  }
];

export default function SupportGroups() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Support Groups</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our supportive community groups led by mental health professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{group.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{group.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{group.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{group.participants}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full mt-4">Join Group</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}