import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../shared/components/Footer';
import Nav from '../../shared/components/nav/Nav';

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="mx-auto">
      {/* <Nav /> */}
      <>{children}</>
      <Footer />
    </div>
  );
};

export default MainLayout;
