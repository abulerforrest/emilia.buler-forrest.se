import { portfolioStore } from "@/store/store";
import Link from "next/link";
import { useStore } from "zustand";

const MenuItem = ({
  label,
  href,
  path,
}: {
  label: string | React.ReactNode;
  href: string;
  path: string;
}) => {
  let isCurrent: boolean = false;
  isCurrent = path === href;

  if (path === "/" && href === "/home") {
    isCurrent = true;
  }
  const { setShowMenu, showMenu } = useStore(portfolioStore);
  return (
    <Link href={href} prefetch>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={`my-4 w-min border-b-2 border-opacity-0 ${
          !isCurrent && "border-transparent"
        } text-black transition-all duration-500 text-base leading-6 grow whitespace-nowrap ${
          isCurrent && "border-opacity-100 border-b-2 border-black"
        }`}
      >
        {label}
      </div>
    </Link>
  );
};

export default MenuItem;
