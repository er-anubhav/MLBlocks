import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join the waiting list.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully Added!",
        description: "You've been added to our waiting list. We'll notify you when we launch!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="maintenance-card rounded-2xl p-8 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center text-accent">
        Join Our Waiting List
      </h3>
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Be the first to know when we launch. We'll send you an exclusive early access invitation.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/50 border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground h-12"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Adding to list...
            </div>
          ) : (
            "Notify Me When Ready"
          )}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
};

export default WaitingListForm;