import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User, UserFormData, UserRole } from '../types/user';

interface UserContextType {
  users: User[];
  addUser: (user: UserFormData) => void;
  updateUser: (id: string, user: UserFormData) => void;
  deleteUser: (id: string) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Sample initial data
const initialUsers: User[] = [
  { id: '1', email: 'itsmeashu01@gmail.com', name: 'Ashu Yadav', role: 'teacher' },
  { id: '2', email: 'rohitgiri01@gmail.com', name: 'Rohit Giri', role: 'student' },
  { id: '3', email: 'vishwastayal@gmail.com', name: 'Vishwas Tayal', role: 'manager' },
  { id: '4', email: 'vivekbansal2005@gmail.com', name: 'Vivek Bansal', role: 'admin' },
  { id: '5', email: 'itspinpin@gmail.com', name: 'Vipin Kumar', role: 'student' },
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isLoading, setIsLoading] = useState(false);

  const addUser = (userData: UserFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newUser: User = {
        id: uuidv4(),
        ...userData,
      };
      
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setIsLoading(false);
    }, 500);
  };

  const updateUser = (id: string, userData: UserFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...userData } : user
        )
      );
      setIsLoading(false);
    }, 500);
  };

  const deleteUser = (id: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      setIsLoading(false);
    }, 500);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};