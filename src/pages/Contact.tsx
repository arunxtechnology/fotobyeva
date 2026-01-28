import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { toast } from 'sonner';
import { CONTACT_INFO } from '@/config/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you! We\'ll be in touch within 24 hours.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      sessionType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Let's Create Together
            </h1>
            <p className="text-charcoal-light text-lg">
              Ready to start your portrait journey? Reach out to schedule your
              complimentary consultation or ask any questions.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeInSection>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
                <h2 className="text-2xl font-serif text-charcoal mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif text-charcoal mb-3">Thank You!</h3>
                    <p className="text-charcoal-light mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@email.com"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={CONTACT_INFO.phone.display}
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sessionType">Session Type</Label>
                        <Select
                          value={formData.sessionType}
                          onValueChange={(value) => setFormData({ ...formData, sessionType: value })}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a session type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maternity">Maternity</SelectItem>
                            <SelectItem value="newborn">Newborn</SelectItem>
                            <SelectItem value="baby">Baby (3-12 months)</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                            <SelectItem value="kids">Kids & Teens</SelectItem>
                            <SelectItem value="women">Women's Portrait</SelectItem>
                            <SelectItem value="headshots">Professional Headshots</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Vision *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details about your session, including any special requests, dates you're considering, or questions you have..."
                        className="bg-background min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </FadeInSection>

            {/* Contact Info */}
            <FadeInSection direction="right" delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-serif text-charcoal mb-6">
                    Studio Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal mb-1">Location</h3>
                        <p className="text-charcoal-light">
                          Virginia Beach, VA<br />
                          <span className="text-sm">Serving all of Hampton Roads</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                        <a
                          href={CONTACT_INFO.phone.link}
                          className="text-charcoal-light hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.phone.display}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal mb-1">Email</h3>
                        <a
                          href={CONTACT_INFO.email.link}
                          className="text-charcoal-light hover:text-primary transition-colors"
                        >
                          {CONTACT_INFO.email.display}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-charcoal mb-1">Studio Hours</h3>
                        <p className="text-charcoal-light">
                          Tuesday - Saturday: By Appointment<br />
                          Sunday - Monday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">
                    Map integration available upon request
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-blush-light rounded-lg p-6">
                  <h3 className="font-serif text-lg text-charcoal mb-2">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-charcoal-light text-sm">
                    We respond to all inquiries within 24 hours. For urgent matters,
                    please give us a call during studio hours.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
