"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const professionals = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Clinical Psychologist",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    expertise: ["Anxiety", "Depression", "Trauma"],
    availability: "Mon, Wed, Fri"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Psychiatrist",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    expertise: ["Mood Disorders", "ADHD", "Anxiety"],
    availability: "Tue, Thu, Sat"
  },
  // Add more professionals
];

export default function Professionals() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Mental Health Professionals</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our experienced team of mental health professionals who are here to support you on your journey to wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={professional.image}
                    alt={professional.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{professional.name}</h3>
                  <p className="text-primary mb-2">{professional.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience: {professional.experience}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {professional.expertise.map((item, i) => (
                        <span
                          key={i}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm mb-4">Available: {professional.availability}</p>
                  <Button className="w-full">Schedule Consultation</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}