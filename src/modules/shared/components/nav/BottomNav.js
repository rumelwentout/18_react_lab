import { Icon } from '@iconify/react';
import React from 'react';

const BottomNavItem = ({ label, icon }) => {
  return (
    <button
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-6  group"
    >
      <Icon icon={icon} className="text-[24px] group-hover:text-brand" />
      <span class="text-sm text-gray-2  group-hover:text-brand ">{label}</span>
    </button>
  );
};
const BottomNav = () => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
        <BottomNavItem icon="ri:home-4-fill" label="Home" />
        <BottomNavItem icon="mdi:flight" label="Flight" />
        <BottomNavItem icon="icon-park-solid:tickets-one" label="Booking" />
        <BottomNavItem icon="healthicons:ui-user-profile" label="Profile" />
      </div>
    </div>
  );
};

export default BottomNav;
