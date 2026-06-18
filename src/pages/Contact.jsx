import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileText } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '716-207-0518',
    href: 'tel:7162070518',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'chelseaalberti@gmail.com',
    href: 'mailto:chelseaalberti@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/chelseaalberti',
  },
];

export default function Contact() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Let's connect
          </h1>
          <p className="text-lg font-body text-muted-foreground mt-6 leading-relaxed">
            Think I'd be a good fit for your team? I'd love to hear from you. Whether it's a role, a project, or just a conversation about creative work — don't hesitate to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                  <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-body font-semibold tracking-wide uppercase text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-base font-body text-foreground group-hover:text-accent transition-colors mt-0.5">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-body font-semibold tracking-wide uppercase text-muted-foreground">
                  Resume
                </p>
                <p className="text-base font-body text-foreground mt-0.5">
                  Available upon request
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-sm p-6 lg:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}