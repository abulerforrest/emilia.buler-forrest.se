import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type VisitProjectLinkProps = {
  href: string;
  label: string;
  alt: string;
};

const VisitProjectLink = ({ href, label, alt }: VisitProjectLinkProps) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap mt-6 justify-end items-center gap-4'>
      <Link href={href} aria-aria-description={alt} prefetch>
        <button className='flex items-center gap-2 bg-white border h-min md:max-w-min w-full rounded-sm transition-colors duration-300 hover:bg-[#000] hover:text-white hover:border-transparent text-black text-base leading-8 whitespace-nowrap justify-center border-black grow px-5 py-2 border-solid'>
          {label}
          <span>
            <BsArrowRight />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default VisitProjectLink;
