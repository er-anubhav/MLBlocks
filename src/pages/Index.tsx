import CountdownTimer from "@/components/CountdownTimer";
import WaitingListForm from "@/components/WaitingListForm";

const Index = () => {
  // Set target date to 30 days from now (you can customize this)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Under 
            <span className="text-primary ml-4 countdown-glow">
              Development
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're building something amazing for you. 
            Our platform will revolutionize your experience.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-accent">
            Expected Launch Date
          </h2>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Waiting List Form */}
        <div className="mb-16 animate-fade-in">
          <WaitingListForm />
        </div>

        {/* Footer Message */}
        <div className="mt-16 animate-fade-in">
          <p className="text-sm text-muted-foreground animate-pulse-soft">
            Thank you for your interest • Stay tuned for updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
