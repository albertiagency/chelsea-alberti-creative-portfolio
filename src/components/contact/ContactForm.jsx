import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: 'chelseaalberti@gmail.com',
      subject: `New inquiry from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-foreground">Message sent!</h3>
        <p className="text-sm font-body text-muted-foreground mt-2">Thanks for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-body text-accent hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Name</label>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="bg-background border-border font-body"
        />
      </div>
      <div>
        <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Email</label>
        <Input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@email.com"
          className="bg-background border-border font-body"
        />
      </div>
      <div>
        <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Message</label>
        <Textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          className="bg-background border-border font-body resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-body font-medium transition-all duration-300"
      >
        {sending ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}