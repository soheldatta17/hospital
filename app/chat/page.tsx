"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm here to listen and support you. How are you feeling today?"
    }
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Thank you for sharing. I'm here to support you. Would you like to tell me more about what's on your mind?"
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Support Chat</h1>
          <p className="text-muted-foreground">
            Chat with our AI support assistant for immediate help and guidance.
          </p>
        </motion.div>

        <Card className="p-4 h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted'
                  }`}
                >
                  {message.type === 'bot' && (
                    <Bot className="h-4 w-4 mb-2" />
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t pt-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}