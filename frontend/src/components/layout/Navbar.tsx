
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Thermometer, Droplets, Home, Info, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-airvibe-darkbg border-b border-airvibe-cardbg p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="bg-gradient-to-br from-airvibe-blue to-airvibe-blue rounded-full p-1">
                <Droplets className="h-6 w-6 text-white" />
              </div> */}
              <span className="text-xl font-bold">AirVibe</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={isActive('/')}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </NavLink>
            <NavLink to="/sense" active={isActive('/sense')}>
              <Thermometer className="h-4 w-4 mr-2" />
              Sense
            </NavLink>
            <NavLink to="/about" active={isActive('/about')}>
              <Info className="h-4 w-4 mr-2" />
              About Us
            </NavLink>
            <NavLink to="/services" active={isActive('/services')}>
              <Settings className="h-4 w-4 mr-2" />
              Services
            </NavLink>
            <NavLink to="/upload_script" active={isActive('/upload_script')}>
              <Settings className="h-4 w-4 mr-2" />
              Editor
            </NavLink>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Toggle menu</span>
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
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-4 py-2 text-sm font-medium rounded-md",
        active
          ? "bg-airvibe-cardbg text-white"
          : "text-gray-400 hover:text-white hover:bg-airvibe-cardbg"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
