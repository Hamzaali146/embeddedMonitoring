
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Home, Building2, Factory, Activity, Settings, Clock, Headphones } from 'lucide-react';

const Services = () => {
  return (
    <div className="container mx-auto animate-fade-in">
      <section className="py-16 md:py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential to industrial settings, AirVibe offers tailored air quality monitoring 
            solutions to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard 
            title="Residential Monitoring"
            description="Perfect for homeowners who want to ensure their family is breathing clean, healthy air."
            icon={<Home className="h-6 w-6" />}
            price="$9.99"
            features={[
              "Real-time temperature & humidity tracking",
              "PM2.5 and CO2 monitoring",
              "Mobile app with alerts",
              "Single room coverage",
              "Monthly air quality reports"
            ]}
            popular={false}
          />
          
          <ServiceCard 
            title="Business Solutions"
            description="Comprehensive monitoring for offices, retail spaces, and commercial buildings."
            icon={<Building2 className="h-6 w-6" />}
            price="$24.99"
            features={[
              "Multi-room monitoring system",
              "Advanced pollutant detection",
              "HVAC integration capabilities",
              "Employee health dashboards",
              "Quarterly air quality assessments",
              "Compliance reporting"
            ]}
            popular={true}
          />
          
          <ServiceCard 
            title="Industrial Systems"
            description="Heavy-duty monitoring for manufacturing facilities and industrial environments."
            icon={<Factory className="h-6 w-6" />}
            price="$99.99"
            features={[
              "Industrial-grade sensors",
              "Hazardous gas detection",
              "Custom alert thresholds",
              "Regulatory compliance tools",
              "API access for system integration",
              "24/7 technical support",
              "Custom reporting solutions"
            ]}
            popular={false}
          />
        </div>
        
        <div className="bg-airvibe-cardbg rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your air monitoring solution with these specialized services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AdditionalServiceCard 
              title="Consultation Services"
              description="Get expert advice on improving your air quality from our environmental specialists."
              icon={<Activity className="h-6 w-6 text-airvibe-blue" />}
            />
            <AdditionalServiceCard 
              title="Custom Integration"
              description="Connect AirVibe with your existing smart home or building management systems."
              icon={<Settings className="h-6 w-6 text-airvibe-green" />}
            />
            <AdditionalServiceCard 
              title="24/7 Monitoring"
              description="Around-the-clock professional monitoring of your air quality with emergency alerts."
              icon={<Clock className="h-6 w-6 text-airvibe-yellow" />}
            />
            <AdditionalServiceCard 
              title="Maintenance & Calibration"
              description="Regular servicing of your sensors to ensure accurate readings and optimal performance."
              icon={<Settings className="h-6 w-6 text-airvibe-purple" />}
            />
            <AdditionalServiceCard 
              title="Training & Education"
              description="Workshops and resources to help your team understand and respond to air quality issues."
              icon={<Activity className="h-6 w-6 text-airvibe-red" />}
            />
            <AdditionalServiceCard 
              title="Premium Support"
              description="Priority access to our technical team with guaranteed response times."
              icon={<Headphones className="h-6 w-6 text-airvibe-green" />}
            />
          </div>
        </div>
        
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0">
            <ProcessStep 
              number="1"
              title="Consultation"
              description="We assess your specific needs and environment"
            />
            <ProcessStep 
              number="2"
              title="Installation"
              description="Our technicians set up your monitoring system"
              connector
            />
            <ProcessStep 
              number="3"
              title="Monitoring"
              description="Begin tracking your air quality metrics in real-time"
              connector
            />
            <ProcessStep 
              number="4"
              title="Analysis"
              description="Receive detailed reports and improvement recommendations"
            />
          </div>
        </div>
        
        <Card className="border-none shadow-md bg-airvibe-cardbg">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact our team today to discuss how AirVibe can help you monitor and improve your air quality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-airvibe-blue mr-2" />
                    <span>No long-term contracts required</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-airvibe-blue mr-2" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-airvibe-blue mr-2" />
                    <span>Free consultation for new customers</span>
                  </div>
                </div>
                <Button className="mt-8 bg-airvibe-blue hover:bg-airvibe-blue/90">
                  Contact Us
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Air quality sensor" 
                  className="rounded-xl shadow-lg" 
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  popular: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  price, 
  features,
  popular
}) => {
  return (
    <Card className={`border-none shadow-md ${popular ? 'bg-gradient-to-b from-airvibe-cardbg to-airvibe-graybg border border-airvibe-green/20 relative' : 'bg-airvibe-cardbg'}`}>
      {popular && (
        <div className="absolute -top-3 right-6">
          <Badge className="bg-airvibe-blue text-airvibe-darkbg">Most Popular</Badge>
        </div>
      )}
      <CardHeader>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${popular ? 'bg-airvibe-blue text-airvibe-darkbg' : 'bg-airvibe-graybg text-white'}`}>
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground"> / month</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-airvibe-blue mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? 'bg-airvibe-blue hover:bg-airvibe-blue/90 text-airvibe-darkbg' : 'bg-airvibe-graybg hover:bg-airvibe-graybg/90'}`}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

interface AdditionalServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AdditionalServiceCard: React.FC<AdditionalServiceCardProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <Card className="border-none shadow-md bg-airvibe-graybg h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-airvibe-cardbg p-3 rounded-full">
            {icon}
          </div>
          <div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  connector?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  connector = false 
}) => {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-airvibe-green text-airvibe-darkbg flex items-center justify-center font-bold text-xl">
          {number}
        </div>
        {connector && (
          <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-airvibe-green" style={{ transform: 'translateY(-50%)' }}></div>
        )}
      </div>
      <h3 className="font-bold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default Services;
