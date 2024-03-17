import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Nav = () => {
  const navigate = useNavigate();
  const Items = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Flights',
      link: '/flight'
    },
    {
      name: 'Booking',
      link: '/register'
    },
    {
      name: 'Search',
      link: '/search'
    }
  ];
  const LeftItems = [
    {
      name: 'Page one',
      link: '/auth/login'
    }
  ];

  const [page, setPage] = useState('');

  const path = useLocation();
  useEffect(() => {
    const { page_name } = getPathItems(path.pathname);

    if (page_name) {
      setPage(`${page_name}`);
    } else {
      setPage('');
    }
    console.log(page);
  }, [path]);

  const getPathItems = (pathname) => {
    const pathItems = pathname.split('/');
    console.log(pathItems[1]);
    return {
      page_name: pathItems[1]
    };
  };

  return (
    <>
      <DesktopNav page={page} Items={Items} navigate={navigate} />
      <MobileNav page={page} Items={Items} navigate={navigate} />
    </>
  );
};

export default Nav;
