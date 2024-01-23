import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";
import MenuItems from "./MenuItems";
import useOutsideClick from "@/hooks/useClickOutside";
import { useCloseMenuOnEsc } from "@/hooks/useCloseMenuOnEsc";
import { useStore } from "zustand";
import { portfolioStore } from "@/store/store";

const Menu = () => {
  const { showMenu, setShowMenu } = useStore(portfolioStore);

  const ref = useOutsideClick(() => {
    setShowMenu(false);
  });

  useCloseMenuOnEsc({
    showMenu: showMenu,
    toggleMenu: () => {
      setShowMenu(false);
    },
  });

  return (
    <div
      className={`select-none transition-all duration-200 justify-center md:flex w-full flex-col px-4 py-4 border-b-[color:var(--Border-primary,#000)] border-solid items-end max-md:max-w-full max-md:px-5`}
    >
      <div className='w-full flex md:hidden items-center'>
        <Link href='/' aria-description='Home' prefetch>
          <Logo />
        </Link>

        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          ref={ref}
          id='menuButton'
          className='md:hidden ml-auto hover:opacity-80 outline-none border-black mt-1 h-min max-w-min rounded-sm text-white text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Black,#000)] bg-black grow border-solid'
        >
          <span className='select-none p-3 flex justify-center items-center rounded-md uppercase gap-2 font-light text-sm tracking-md'>
            {showMenu ? (
              <CgClose size={19} id='menuButtonIconClose' />
            ) : (
              <RxHamburgerMenu size={19} id='menuButtonIconHamburger' />
            )}
          </span>
        </button>
      </div>
      <div
        className={`transition-all duration-700 justify-center ${
          showMenu ? "visible" : "hidden"
        } md:flex w-full flex-col px-16 py-4 border-b-[color:var(--Border-primary,#000)] border-solid items-end max-md:max-w-full max-md:px-5`}
      >
        <div className='select-none justify-between w-full items-center flex gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1'>
          <div className='flex w-full gap-x-8  items-center flex-wrap'>
            <div className='md:block hidden mt-4'>
              <Link href='/' aria-description='Home' prefetch>
                <Logo />
              </Link>
            </div>

            <div className='flex xl:ml-auto w-full md:w-min'>
              <MenuItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
