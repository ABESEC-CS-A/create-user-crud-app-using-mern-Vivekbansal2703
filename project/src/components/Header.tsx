import React from 'react';
import { Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Users className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold tracking-wide text-center">USER MANAGEMENT</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;