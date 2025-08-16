import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "umar.md.4474@gmail.com",
      href: "mailto:umar.md.4474@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 8555909496",
      href: "tel:+91 8555909496",
      description: "Let's have a chat"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Gurramkonda, AP",
      href: "#",
      description: "Based in India"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com", color: "hover:text-gray-700" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-secondary/60 rounded-md mt-2 mb-2">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          </div>
          <h2 className="text-4xl font-serif font-bold gradient-text text-foreground mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'd love to hear about your next project and explore how we can collaborate.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Social */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-primary/5 border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <a href={info.href} className="block">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">{info.title}</h4>
                          <p className="text-primary font-medium mb-1 text-sm sm:text-base break-all">{info.value}</p>
                          <p className="text-muted-foreground text-xs sm:text-sm">{info.description}</p>
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-primary/5 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3"></span>
                  Connect With Me
                </h3>
                <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 group hover:scale-110 transform"
                      aria-label={social.label}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-primary/5 border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Availability Status</h3>
                </div>
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-foreground font-medium text-sm sm:text-base">Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Currently accepting freelance work and full-time opportunities. Response time: 24-48 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-primary/5 border-border/50 shadow-xl">
              <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl gradient-text sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                    Start a Conversation
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    Tell me about your project, and let's discuss how we can bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs sm:text-sm font-medium text-foreground mx-2 mb-2">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary/50 h-12 sm:h-14 text-sm sm:text-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs sm:text-sm font-medium mx-2 text-foreground mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary/50 h-12 sm:h-14 text-sm sm:text-lg"
                      /> 
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-medium mx-2 text-foreground mb-2">Project Details</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project goals, timeline, and any specific requirements you have in mind..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none text-sm sm:text-lg leading-relaxed min-h-[120px] sm:min-h-[150px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <Button 
                      onClick={handleSubmit}
                      size="lg" 
                      className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold hover:scale-105 transform transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 sm:mr-3"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30">
                  <p className="text-center text-muted-foreground text-xs sm:text-sm">
                    Usually respond within 24-48 hours • All inquiries are confidential
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;