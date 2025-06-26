
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, name: name || null }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        setEmail('');
        setName('');
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to defense tech insights.",
        });
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-jarvis-blue/10 to-jarvis-blue-light/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-16 h-16 text-jarvis-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Defense Tech
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get exclusive insights on the latest in defense technology, AI innovations, 
            and emerging military solutions delivered to your inbox.
          </p>
        </div>

        {isSubscribed ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">You're All Set!</h3>
            <p className="text-gray-400">
              Welcome to the defense tech community. You'll receive updates soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="bg-tech-darker border-jarvis-gray text-white focus:border-jarvis-blue"
            />
            <div className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-tech-darker border-jarvis-gray text-white focus:border-jarvis-blue"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-jarvis-blue hover:bg-jarvis-blue-light text-white px-6 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              No spam, unsubscribe at any time. Your data is secure.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
