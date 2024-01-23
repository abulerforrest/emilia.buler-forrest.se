import Link from "next/link";
import { RiLinkedinBoxFill } from "react-icons/ri";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const path = usePathname();
  return (
    <span className='w-full relative transition-all duration-500 justify-end gap-1 sm:gap-3 lg:gap-10 tracking-md block md:flex h-full my-auto'>
      <MenuItem label={<span>Home</span>} href='/home' path={path ?? ""} />
      <MenuItem label='Bio' href='/bio' path={path ?? ""} />
      <MenuItem
        label={<span>Service Design</span>}
        href='/portfolio-service-design'
        path={path ?? ""}
      />
      <MenuItem
        label={<span>UX</span>}
        href='/portfolio-ux-design'
        path={path ?? ""}
      />
      <MenuItem label={<span>CV / Resume</span>} href='/cv' path={path ?? ""} />
      <div className='flex flex-wrap md:flex-nowrap items-center gap-4'>
        <Link href='https://linkedin.com/in/emiliaforrest' target='_blank'>
          <button className='flex items-center gap-2 bg-white border h-min md:max-w-min w-full rounded-sm transition-colors duration-300 hover:bg-[#0077B5] hover:text-white hover:border-transparent text-black text-base leading-6 whitespace-nowrap justify-center border-black grow px-5 py-2 border-solid'>
            LinkedIn
            <span>
              <RiLinkedinBoxFill size={26} />
            </span>
          </button>
        </Link>
        <Link href='/contact' className='w-full md:w-min'>
          <button
            className={`${
              path === "/contact"
                ? "bg-gradient-to-r from-[#8cbca7] via-[#cabd3d] to-[#f8ad6c]"
                : ""
            } hover:bg-[#f36e49] hover:text-white transition-colors duration-300 border-transparent h-min md:max-w-min w-full rounded-sm text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-5 py-2 border-solid`}
          >
            Get In Touch
          </button>
        </Link>
      </div>
    </span>
  );
};

export default MenuItems;
