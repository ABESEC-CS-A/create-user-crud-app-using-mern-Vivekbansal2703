import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import EmptyState from './components/EmptyState';
import Toast from './components/Toast';
import { User } from './types/user';
import './animations.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleAddUser = () => {
    setSelectedUser(undefined);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setToast({ 
      type: 'success', 
      message: selectedUser 
        ? 'User updated successfully!' 
        : 'User added successfully!' 
    });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
            <button
              onClick={handleAddUser}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add User
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <h3 className="text-lg font-medium text-gray-700">User List</h3>
              <p className="text-sm text-gray-500">Manage your users and their access permissions</p>
            </div>
            
            <UserTable onEditUser={handleEditUser} />
          </div>
        </main>
        
        <Footer />
        
        {isFormOpen && (
          <UserForm 
            user={selectedUser} 
            onClose={handleCloseForm} 
          />
        )}
        
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={handleCloseToast}
          />
        )}
      </div>
    </UserProvider>
  );
}

export default App;