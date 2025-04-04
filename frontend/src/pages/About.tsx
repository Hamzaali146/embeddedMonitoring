
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto animate-fade-in">
      <section className="py-16 md:py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AirVibe</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to help people breathe cleaner air by providing 
            advanced monitoring tools that make invisible air quality visible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src='.\lovable-uploads\WhatsApp Image 2025-03-29 at 5.12.00 PM (1).jpeg'
              alt="AirVibe team" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AirVibe was founded in 2020 by a team of environmental engineers and tech enthusiasts 
              who were concerned about the declining air quality in urban environments and its impact 
              on public health.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              What began as a small research project quickly evolved into a mission to make air quality 
              monitoring accessible to everyone. We believe that understanding your environment is the 
              first step toward improving it.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, AirVibe is trusted by homeowners, businesses, and institutions around the world to 
              provide accurate, real-time data on indoor air quality, helping people make informed decisions 
              about their health and well-being.
            </p>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Innovation" 
              description="We continuously push the boundaries of air quality monitoring technology to deliver the most accurate and user-friendly solutions."
              iconColor="from-airvibe-green to-airvibe-blue"
            />
            <ValueCard 
              title="Transparency" 
              description="We believe in honest, clear communication about air quality data and what it means for your health and environment."
              iconColor="from-airvibe-blue to-airvibe-purple"
            />
            <ValueCard 
              title="Sustainability" 
              description="Our products and practices are designed with environmental responsibility in mind, minimizing our ecological footprint."
              iconColor="from-airvibe-purple to-airvibe-red"
            />
          </div>
        </div>
        
        {/* <div className="bg-airvibe-cardbg rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Hamza Ali" 
              role="CEO & Founder" 
              image="airvibe-dashboard\public\lovable-uploads\WhatsApp Image 2025-04-02 at 6.34.21 PM.jpeg" 
            />
            <TeamMember 
              name="Farzam Nasir" 
              role="CTO" 
              image="airvibe-dashboard\public\lovable-uploads\WhatsApp Image 2025-03-15 at 11.44.15 PM (1).jpeg" 
            />
          </div>
        </div> */}

<div className="bg-airvibe-cardbg rounded-2xl p-8 md:p-12 mb-20">
  <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex flex-col items-center">
      <img 
        src="/lovable-uploads/WhatsApp Image 2025-04-02 at 6.34.21 PM.jpeg" 
        alt="Hamza Ali" 
        className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 shadow-lg"
      />
      <h3 className="text-lg font-semibold mt-4">Hamza Ali</h3>
      <p className="text-sm text-gray-500">CEO & Founder</p>
    </div>
    <div className="flex flex-col items-center">
      <img 
        src="/lovable-uploads/WhatsApp Image 2025-03-15 at 11.44.15 PM (1).jpeg" 
        alt="Farzam Nasir" 
        className="w-40 h-40 object-cover rounded-full border-2 border-gray-300 shadow-lg"
      />
      <h3 className="text-lg font-semibold mt-4">Farzam Nasir</h3>
      <p className="text-sm text-gray-500">CTO</p>
    </div>
  </div>
</div>

        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Air Quality?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust AirVibe for their air monitoring needs.
          </p>
          <Button asChild size="lg" className="bg-airvibe-blue hover:bg-airvibe-blue/90">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  iconColor: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, iconColor }) => {
  return (
    <Card className="border-none shadow-md bg-airvibe-cardbg h-full">
      <CardContent className="pt-6">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${iconColor} mb-6 flex items-center justify-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-2 border-airvibe-green">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default About;
