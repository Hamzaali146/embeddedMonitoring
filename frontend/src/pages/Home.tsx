
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Thermometer, Droplets, Activity,
  Wind, BarChart, Shield, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto animate-fade-in">
      <section className="py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Monitor Your Air, <span className="text-airvibe-blue">Optimize Your Life</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AirVibe helps you track, analyze, and improve the air quality in your home or office with real-time data and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-airvibe-blue hover:bg-airvibe-blue/90">
                <Link to="/sense">
                  View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-airvibe-cardbg p-4">
            <img 
              src="/lovable-uploads/dashboard.png" 
              alt="AirVibe Dashboard" 
              className="rounded-xl w-full h-auto shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive air monitoring system provides everything you need to understand and improve your indoor environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Thermometer className="h-6 w-6 text-airvibe-blue" />}
            title="Temperature & Humidity"
            description="Monitor comfort levels with precision temperature and humidity tracking."
          />
          <FeatureCard 
            icon={<Wind className="h-6 w-6 text-airvibe-yellow" />}
            title="Air Quality Analysis"
            description="Track PM2.5, CO2, and other pollutants affecting your air quality."
          />
          <FeatureCard 
            icon={<BarChart className="h-6 w-6 text-airvibe-blue" />}
            title="Data Visualization"
            description="Beautiful charts and graphs for easy trend analysis and insights."
          />
          <FeatureCard 
            icon={<Shield className="h-6 w-6 text-airvibe-purple" />}
            title="Health Recommendations"
            description="Get personalized advice to improve air quality for better health."
          />
        </div>
      </section>
      
      <section className="py-16 bg-airvibe-cardbg rounded-2xl p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose AirVibe?</h2>
            <p className="text-muted-foreground mb-6">
              Our advanced sensing technology and intuitive dashboard make air quality monitoring simple and effective.
            </p>
            <ul className="space-y-4">
              <BenefitItem text="Real-time monitoring with instant alerts" />
              <BenefitItem text="Historical data analysis for trend identification" />
              <BenefitItem text="Multi-room support with individual sensors" />
              <BenefitItem text="Energy consumption tracking for each device" />
              <BenefitItem text="Custom threshold settings for your environment" />
            </ul>
            <Button asChild className="mt-8 bg-airvibe-blue hover:bg-airvibe-blue/90">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <StatsCard
                icon={<Activity className="h-5 w-5 text-airvibe-green" />}
                value="99.9%"
                label="Uptime Reliability"
              />
              <StatsCard
                icon={<Clock className="h-5 w-5 text-airvibe-yellow" />}
                value="24/7"
                label="Continuous Monitoring"
              />
            </div>
            <div className="space-y-4 mt-8">
              <StatsCard
                icon={<Droplets className="h-5 w-5 text-airvibe-blue" />}
                value="6+"
                label="Air Quality Metrics"
              />
              <StatsCard
                icon={<Shield className="h-5 w-5 text-airvibe-purple" />}
                value="100%"
                label="Data Privacy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-md bg-airvibe-cardbg h-full">
      <CardHeader>
        <div className="bg-airvibe-graybg p-3 rounded-full w-fit mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <Card className="border-none shadow-md bg-airvibe-graybg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-airvibe-darkbg p-2 rounded-full">
            {icon}
          </div>
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => {
  return (
    <li className="flex items-center">
      <div className="bg-airvibe-green/20 rounded-full p-1 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-airvibe-green"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      {text}
    </li>
  );
};

export default Home;
