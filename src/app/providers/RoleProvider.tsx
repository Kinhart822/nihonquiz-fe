import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserRole = 'student' | 'teacher';

interface RoleContextType {
  role: UserRole;
  toggleRole: () => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [role, setRole] = useState<UserRole>('student');
  const navigate = useNavigate();

  const toggleRole = () => {
    setRole((prev) => {
      const newRole = prev === 'student' ? 'teacher' : 'student';
      if (newRole === 'teacher') {
        void navigate('/teacher/dashboard');
      } else {
        void navigate('/student/dashboard');
      }
      return newRole;
    });
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
