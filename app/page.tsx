"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HeartPulse, BookOpen, Users, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WellbeingCard = ({ title, description, icon: Icon, color }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`p-6 rounded-xl bg-card border shadow-lg`}
  >
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Your Journey to Mental Wellness
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find support, resources, and professional help on your path to better mental health.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/assessment">Start Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/find-help">Find Help</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            <Image
              src="/meditation-illustration.svg"
              alt="Meditation Illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
        >
          <WellbeingCard
            title="Mental Wellness"
            description="Track your emotional well-being and get personalized insights"
            icon={HeartPulse}
            color="bg-pink-500"
          />
          <WellbeingCard
            title="Daily Meditation"
            description="Access guided meditation sessions for peace and clarity"
            icon={Sparkles}
            color="bg-purple-500"
          />
          <WellbeingCard
            title="Community Support"
            description="Connect with others on similar journeys to wellness"
            icon={Users}
            color="bg-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Your Wellness Journey</h2>
          <div className="relative">
            {/* Add animated path illustration here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-6 rounded-lg shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Step {step}</h3>
                  <p className="text-muted-foreground">
                    {step === 1 && "Take our comprehensive assessment"}
                    {step === 2 && "Get matched with the right support"}
                    {step === 3 && "Begin your journey to wellness"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}