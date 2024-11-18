"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Newspaper, HeadphonesIcon } from 'lucide-react';

const resources = [
  {
    title: "Understanding Anxiety",
    type: "Article",
    icon: BookOpen,
    description: "Learn about the different types of anxiety disorders and coping strategies.",
    duration: "10 min read",
    category: "Educational"
  },
  {
    title: "Mindfulness Meditation",
    type: "Video",
    icon: Video,
    description: "A guided meditation session for reducing stress and anxiety.",
    duration: "15 min",
    category: "Practice"
  },
  {
    title: "Sleep Hygiene Guide",
    type: "Article",
    icon: Newspaper,
    description: "Tips and techniques for improving your sleep quality.",
    duration: "8 min read",
    category: "Self-Help"
  },
  {
    title: "Calming Sounds",
    type: "Audio",
    icon: HeadphonesIcon,
    description: "A collection of nature sounds and white noise for relaxation.",
    duration: "30 min",
    category: "Relaxation"
  }
];

const categories = ["All", "Educational", "Practice", "Self-Help", "Relaxation"];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles, videos, and audio resources to support your mental health journey.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {resource.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm bg-secondary px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <Button variant="ghost" size="sm">
                    Access Resource
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}