import React from 'react';
import { Outlet } from 'react-router-dom';
import { RoleProvider } from './RoleProvider';

export const RootProvider: React.FC = () => {
  return (
    <RoleProvider>
      <Outlet />
    </RoleProvider>
  );
};
