import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  Cloud,
  MessageSquare,
  BarChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols and data encryption at rest and in transit.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times globally.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for scale with modern cloud infrastructure and microservices.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivery network ensures fast access from anywhere.',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with built-in communication tools.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and reporting for data-driven decisions.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: '$29',
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing businesses and teams',
    price: '$99',
    popular: true,
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Custom development',
      'SLA guarantee',
    ],
  },
];

const testimonials = [
  {
    quote: "This platform has transformed how our team works. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "The analytics capabilities have given us insights we never had before.",
    author: "Michael Chen",
    role: "Product Manager at InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "Best-in-class security and performance. Exactly what we needed.",
    author: "Emily Rodriguez",
    role: "Security Lead at SecureFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const faqs = [
  {
    question: "How secure is the platform?",
    answer: "We implement bank-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards.",
  },
  {
    question: "Can I try before subscribing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 email support for all plans, with priority support and dedicated account managers for higher tiers.",
  },
  {
    question: "How does billing work?",
    answer: "We offer monthly and annual billing options. Annual subscriptions come with a 20% discount.",
  },
];

export function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Modern Solutions for Modern Teams
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empower your team with our enterprise-grade platform. Built for scale, security, and success.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`p-6 ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium absolute -top-3 right-4">
                      Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of teams already using our platform to accelerate their business.
            </p>
            <Link to="/login">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}