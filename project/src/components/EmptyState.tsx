import React from 'react';
import { UserPlus } from 'lucide-react';

interface EmptyStateProps {
  onAddUser: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddUser }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
      <UserPlus className="w-16 h-16 mx-auto text-gray-400" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">No users yet</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating your first user.
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={onAddUser}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </button>
      </div>
    </div>
  );
};

export default EmptyState;