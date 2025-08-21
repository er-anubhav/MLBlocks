import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setPrevTimeLeft(timeLeft);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const TimeUnit = ({ 
    value, 
    label, 
    prevValue 
  }: { 
    value: number; 
    label: string; 
    prevValue: number; 
  }) => (
    <div className="flex flex-col items-center">
      <div className="maintenance-card rounded-2xl p-6 mb-3 min-w-[100px] transition-transform duration-300 hover:scale-105">
        <div 
          className={`text-4xl md:text-6xl font-bold text-primary countdown-glow transition-all duration-500 ${
            value !== prevValue ? 'animate-count-up' : ''
          }`}
        >
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <TimeUnit value={timeLeft.days} label="Days" prevValue={prevTimeLeft.days} />
      <TimeUnit value={timeLeft.hours} label="Hours" prevValue={prevTimeLeft.hours} />
      <TimeUnit value={timeLeft.minutes} label="Minutes" prevValue={prevTimeLeft.minutes} />
      <TimeUnit value={timeLeft.seconds} label="Seconds" prevValue={prevTimeLeft.seconds} />
    </div>
  );
};

export default CountdownTimer;