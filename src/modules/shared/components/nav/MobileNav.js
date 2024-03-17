import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../Button';

const MobileNavItem = ({ item, isActive }) => {
  return (
    <div className="item px-2 text-center border-b-[1px]  flex items-start relative overflow-hidden font-regular tracking-tight cursor-pointer">
      <h1 className="text-center  text-[14px] py-3">{item.name}</h1>
      <Icon
        icon="mdi:bird"
        className={`absolute ${
          !isActive && 'hidden'
        } right-[4px] top-2.5 text-brand item_bird text-[20px]`}
      />
    </div>
  );
};
const MobileNav = ({ page, Items, navigate }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);
  return (
    <>
      <div
        className="mx-auto block md:hidden fixed bg-white top-0 left-0 w-[100%] shadow-md py-3 px-4
z-[999]"
      >
        <div className="flex justify-between items-center w-[100%]">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <Icon icon="mdi:react" className="text-[40px] text-brand" />
          </div>
          <div className="flex items-center">
            <Icon
              icon="ic:outline-search"
              className="cursor-pointer text-[24px] text-gray-2 mr-4"
              onClick={() => setShow(true)}
            />
            <Icon
              icon="mdi:hamburger-menu"
              className="cursor-pointer text-[24px] text-gray-2"
              onClick={() => setShow(true)}
            />
          </div>
        </div>
      </div>
      {show && (
        <div
          className="mx-auto block md:hidden fixed bg-white top-0 left-0 w-[100%] bottom-0 shadow-lg py-4 
  z-[999]"
        >
          <div
            className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%]
       xl:w-[90%] 2xl:w-[1340px] mx-auto flex flex-col 
       justify-between items-center"
          >
            <div className="flex justify-between items-center w-[100%] mb-10">
              <div className="cursor-pointer" onClick={() => navigate('/')}>
                <Icon icon="mdi:react" className="text-[40px] text-brand" />
              </div>
              <Icon
                icon="gridicons:cross"
                className="cursor-pointer text-[24px] text-gray-2"
                onClick={() => setShow(false)}
              />
            </div>
            <div className="flex flex-col justify-start w-[100%]">
              {/* <Search placeholder={'Search flights'} padding={'1'} /> */}
              <div className="flex justify-start w-[100%] mb-5"></div>
              {Items.map((item) => (
                <MobileNavItem
                  item={item}
                  isActive={item?.link?.split('/')[1] === page ? true : false}
                />
              ))}
            </div>
            <div className="w-[100%] flex justify-start mt-10">
              <PrimaryButton
                label="Signin"
                icon="mdi:user-arrow-right"
                left={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MobileNav;
