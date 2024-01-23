"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";

/**
 * Footer
 */
export default function Footer() {
  const path = usePathname();
  return (
    <footer>
      <div className='items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5'>
        <div className='mt-8 pb-2 max-md:max-w-full'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0'>
              <span className='hidden text-white w-min p-5 hover:bg-[#e27a67] transition-colors duration-300 bg-[#1D1D1D] select-none lg:block relative text-xl lg:text-[24px]'>
                <span className='font-bimbo whitespace-nowrap'>
                  emilia.buler-forrest.se
                </span>
                {/* <div className='self-stretch text-black text-base leading-6 mt-6 max-md:max-w-full'>
                  Stay up to date on the latest features and releases by joining
                  our newsletter.
                </div>
                <div className='items-stretch self-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap'>
                  <span className='text-stone-500 text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Color-Brand-black,#000)] bg-white grow justify-center p-3 border-solid'>
                    Your email here
                  </span>
                  <span className='text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Black,#000)] px-6 py-3 border-solid max-md:px-5'>
                    Subscribe
                  </span>
                </div>
                <div className='self-stretch text-black text-xs leading-5 mt-4 max-md:max-w-full'>
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </div> */}
              </span>
            </div>
            <div className='flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0'>
              <div className='grow max-md:max-w-full max-md:mt-10'>
                <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                    <span className='items-stretch flex flex-col pb-2 max-md:mt-10'>
                      <div className='select-none text-black text-base font-semibold leading-6 whitespace-nowrap'>
                        Sections
                      </div>
                      <div className='text-black text-sm leading-5 whitespace-nowrap mt-6'>
                        <Link href='/home'>
                          {path === "/home" && <>&#8212; </>}Home
                        </Link>
                      </div>
                      <div className='text-black text-sm leading-5 whitespace-nowrap mt-4'>
                        <Link href='/bio'>
                          {path === "/bio" && <>&#8212; </>}Bio
                        </Link>
                      </div>
                      <div className='text-black text-sm leading-5 whitespace-nowrap mt-4'>
                        <Link href='/portfolio-service-design'>
                          {path === "/portfolio-service-design" && (
                            <>&#8212; </>
                          )}
                          Service Design
                        </Link>
                      </div>
                      <div className='text-black text-sm leading-5 mt-4'>
                        <Link href='/portfolio-ux-design'>
                          {path === "/portfolio-ux-design" && <>&#8212; </>}UX
                        </Link>
                      </div>
                      <div className='text-black text-sm leading-5 mt-4'>
                        <Link href='/contact'>
                          {path === "/contact" && <>&#8212; </>}Get In Touch
                        </Link>
                      </div>
                    </span>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <span className='items-stretch flex flex-col pb-2 max-md:mt-10'>
                      <div className='select-none text-black text-base font-semibold leading-6 whitespace-nowrap'>
                        Projects
                      </div>
                      <Link prefetch href='/project-preloved'>
                        <div className='text-black text-sm leading-5 whitespace-nowrap mt-6'>
                          Preloved - H&M
                        </div>
                      </Link>
                      <Link prefetch href='/project-af-ddcs'>
                        <div className='text-black text-sm leading-5 mt-6'>
                          Data-driven Customer Segmentation - AF
                        </div>
                      </Link>
                      <Link prefetch href='/project-af-sscj'>
                        <div className='text-black text-sm leading-5 mt-6'>
                          Self-Service Customer Journey /Service Blueprint - AF
                        </div>
                      </Link>
                      <Link prefetch href='/project-sl-sspt'>
                        <div className='text-black text-sm leading-5 mt-6'>
                          Stockholm Public Transport - SL
                        </div>
                      </Link>
                      <Link prefetch href='/project-af-fpop'>
                        <div className='text-black text-sm leading-5 mt-6'>
                          Facilitating the Process of Operational Planning - AF
                        </div>
                      </Link>
                    </span>
                  </div>
                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <span className='items-stretch flex flex-col pb-2 max-md:mt-10'>
                      <div className='mt-6' />
                      <Link prefetch href='/project-well-organised'>
                        <div className='text-black text-sm leading-5 whitespace-nowrap mt-6'>
                          Well Organised Blog
                        </div>
                      </Link>
                      <Link prefetch href='/project-hilma-convey'>
                        <div className='text-black text-sm leading-5 mt-6'>
                          Hilma Convey
                        </div>
                      </Link>
                    </span>
                  </div>

                  <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                    <span className='items-stretch flex grow flex-col max-md:mt-10'>
                      <div className='select-none text-black text-base font-semibold leading-6 whitespace-nowrap'>
                        Follow me
                      </div>
                      <span className='select-none items-stretch flex justify-between  mt-4 gap-3 py-2'>
                        <RiLinkedinBoxFill size={24} />
                        <Link
                          target='_blank'
                          href='https://linkedin.com/in/emiliaforrest'
                        >
                          <div className='gap-4 text-black flex items-center text-sm leading-5 my-auto'>
                            LinkedIn
                            <BsArrowRight className='ml-auto' />
                          </div>
                        </Link>
                      </span>
                      <span className='select-none items-stretch flex justify-between gap-3 py-2'>
                        <RiFacebookBoxFill size={24} />
                        <Link
                          target='_blank'
                          href='https://facebook.com/emilia.forrest'
                        >
                          <div className='gap-4 text-black flex items-center text-sm leading-5 my-auto'>
                            Facebook
                            <BsArrowRight className='ml-auto' />
                          </div>
                        </Link>
                      </span>
                      <span className='select-none items-stretch flex justify-between gap-3 py-2'>
                        <RiInstagramLine size={24} />
                        <Link
                          target='_blank'
                          href='https://instagram.com/emiliaforrest'
                        >
                          <div className='gap-4 text-black flex items-center text-sm leading-5 my-auto'>
                            Instagram
                            <BsArrowRight className='ml-auto' />
                          </div>
                        </Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border border-[color:var(--Border-primary,#000)] bg-black flex shrink-0 h-px flex-col mt-20 border-solid max-md:max-w-full max-md:mt-10' />
        <span className='justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap'>
          <div className='text-black text-sm leading-5'>
            © 2024 Emilia Forrest. All rights reserved.
          </div>
          <span className='flex-wrap items-stretch flex justify-between gap-5'>
            <div className='text-black text-sm leading-5 underline grow whitespace-nowrap'>
              Privacy Policy
            </div>
            <div className='text-black text-sm leading-5 underline grow whitespace-nowrap'>
              Cookies
            </div>
          </span>
        </span>
      </div>
    </footer>
  );
}
