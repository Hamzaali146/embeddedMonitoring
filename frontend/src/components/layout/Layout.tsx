
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        {children}
      </main>
      <footer className="py-6 px-4 bg-airvibe-cardbg border-t border-airvibe-graybg">
        <div className="container mx-auto">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AirVibe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
