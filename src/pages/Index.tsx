import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import LoginCard from '../../components/Login/LoginCard';

/**
 * LoginPage
 * 
 * This is the main page for the login functionality.
 * It utilizes the MainAppLayout to center content on the screen
 * and renders the LoginCard component which contains the login form.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
