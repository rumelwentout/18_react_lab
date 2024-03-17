import { Icon } from '@iconify/react';
import { PrimaryButton } from '../Button';

const NavItem = ({ item, isActive }) => {
  return (
    <div className="item px-2 text-center  flex flex-col-reverse items-center relative overflow-hidden font-regular tracking-tight cursor-pointer">
      <h1 className="text-center  text-[14px] py-3">{item.name}</h1>
      <Icon
        icon="mdi:bird"
        className={`absolute ${
          !isActive && 'hidden'
        } top-[-4px] text-brand item_bird text-[20px]`}
      />
      <div
        className={`bg-brand ${
          !isActive && 'hidden'
        } item_underline h-[3px] left-0 absolute mt-4`}
      ></div>
    </div>
  );
};

const DesktopNav = ({ page, Items, navigate }) => {
  return (
    <div
      className="mx-auto bg-red hidden md:block fixed md:bg-white top-0 left-0 right-0 shadow-md py-4 
  z-[999]"
    >
      <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[1340px] mx-auto flex justify-between items-center">
        <div className="flex justify-start w-[10%]">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <Icon icon="mdi:react" className="text-[40px] text-brand" />
          </div>
        </div>
        <div className="flex justify-between w-[60%]">
          {Items.map((item) => (
            <NavItem
              item={item}
              isActive={item?.link?.split('/')[1] === page ? true : false}
            />
          ))}
          {/* <Search placeholder={'Search flights'} padding={'1'} /> */}
        </div>
        <div className="w-[15%] flex justify-end">
          <PrimaryButton
            label="Signin"
            icon="mdi:user-arrow-right"
            left={true}
          />
        </div>
      </div>
    </div>
  );
};
export default DesktopNav;
