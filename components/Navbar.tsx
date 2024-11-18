"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, Home, Activity, Users, BookOpen,
  Heart, Settings, HelpCircle, Moon, Sun,
  ChevronLeft, MessageCircle
} from 'lucide-react';
import { useTheme } from 'next-themes';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Assessment', href: '/assessment', icon: Activity },
  { name: 'Find Help', href: '/professionals', icon: Users },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Support Groups', href: '/support-groups', icon: Heart },
  { name: 'Chat Support', href: '/chat', icon: MessageCircle },
];

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { theme, setTheme } = useTheme();

  // Adjust body margin based on navbar state
  useEffect(() => {
    document.body.style.marginLeft = isExpanded ? '240px' : '72px';
  }, [isExpanded]);

  return (
    <motion.nav
      initial={false}
      animate={{ width: isExpanded ? 240 : 72 }}
      className="fixed left-0 top-0 h-screen bg-card border-r z-50 flex flex-col"
    >
      {/* Header Section */}
      <div className="p-4 flex items-center justify-between border-b">
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-primary"
          >
            MindfulCare
          </motion.span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronLeft className={`h-5 w-5 transition-transform ${!isExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-4 overflow-y-auto">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <motion.div
              whileHover={{ backgroundColor: 'hsl(var(--muted))' }}
              className="flex items-center px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-3"
                >
                  {item.name}
                </motion.span>
              )}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-full flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </motion.nav>
  );
}
